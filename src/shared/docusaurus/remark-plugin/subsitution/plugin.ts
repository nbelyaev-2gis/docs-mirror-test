import { visit as unistVisit } from 'unist-util-visit';
import { minimatch } from 'minimatch';
import type { Transformer } from 'unified';
import { visit as estreeVisit } from 'estree-util-visit';
import { log } from './lib/log';
import { substituteLiteral, substituteTemplateLiteral } from './lib/substitute';
import { SubstitueFn } from './lib/substitute/types';
import { isString } from './lib/isString';

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

type Options = {
  substitutions: Record<string, string>;
  excludeFiles: string[];
};

export function substitutionPlugin({ substitutions, excludeFiles }: Options) {
  const patterns = Object.entries(substitutions).map(([key, value]) => ({
    key,
    find: new RegExp(escapeRegExp(key), 'g'),
    replace: value,
  }));

  const transformer: Transformer = async (tree, file) => {
    const filePath = file.path.split(`${file.cwd}`)[1];

    const isExcluded = excludeFiles.some((pattern) => minimatch(filePath, pattern));

    if (isExcluded) {
      return;
    }

    const applySubstitutions = (value: string, nodeLine = 1, nodeColumn = 1) => {
      let result = value;
      patterns.forEach((pattern) => {
        result = result.replace(pattern.find, (replacedValue) => {
          log(
            `Replaced "${replacedValue}" with "${pattern.replace}" at ${filePath}:${nodeLine}:${nodeColumn}`,
          );
          return pattern.replace;
        });
      });
      return result;
    };

    log(`Processing file: ${filePath}`);

    ['text', 'code', 'inlineCode', 'jsx', 'html', 'mdxFlowExpression', 'mdxTextExpression'].forEach(
      (type) => {
        unistVisit(tree, type, (node) => {
          const line = node.position?.start.line ?? 1;
          const column = node.position?.start.column ?? 1;

          if ('value' in node && isString(node.value)) {
            node.value = applySubstitutions(node.value, line, column);
          }

          const estree = (node?.data as any)?.estree;

          if ((type === 'mdxFlowExpression' || type === 'mdxTextExpression') && estree) {
            estreeVisit(estree, {
              enter(node) {
                const allSubsituteFn: Partial<Record<typeof node.type, SubstitueFn<any>>> = {
                  Literal: substituteLiteral,
                  TemplateLiteral: substituteTemplateLiteral,
                };

                const subsituteFn = allSubsituteFn[node.type];

                if (!subsituteFn) {
                  return;
                }

                subsituteFn(node, {
                  onSubstitute: (value: string) => applySubstitutions(value, line, column),
                });
              },
            });
          }
        });
      },
    );
  };

  return transformer;
}

export const createSubstitutionPlugin = (options: Options) => {
  return [substitutionPlugin, options];
};
