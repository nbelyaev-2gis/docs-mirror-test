import { Parser, DomHandler } from 'htmlparser2';
import { findOne, findAll, removeElement, textContent } from 'domutils';
import renderHTML from 'dom-serializer';
import { hasChildren, AnyNode } from 'domhandler';
import stripIndent from 'strip-indent';

export const decomposeHtml = (htmlCode: string) => {
  const result = {
    css: '',
    html: '',
    htmlParts: {
      head: '',
      body: '',
    },
    js: '',
    title: '',
    description: '',
  };

  const domHandler = new DomHandler((error, dom) => {
    if (error) {
      throw new Error(error.message);
    }

    // title
    const titleNode = findOne((node) => node.tagName === 'title', dom);
    if (titleNode) {
      result.title = removeEmptyStrings(stripIndent(textContent(titleNode)));
    }

    // meta decription
    const descriptionNode = findOne(
      (node) => node.tagName === 'meta' && node.attribs.name === 'description',
      dom,
    );
    if (descriptionNode && descriptionNode.attribs.content) {
      result.description = descriptionNode.attribs.content;
    }

    // script
    const scriptNodesWithContent = findAll(
      (node) => node.tagName === 'script' && !node.attribs.src,
      dom,
    );
    result.js = removeEmptyStrings(stripIndent(textContent(scriptNodesWithContent)));

    // style
    const styleNodes = findAll((node) => node.tagName === 'style', dom);
    result.css = removeEmptyStrings(stripIndent(textContent(styleNodes)));

    // html
    scriptNodesWithContent.forEach((node) => {
      removeElement(node);
    });
    styleNodes.forEach((node) => {
      removeElement(node);
    });
    result.html = removeEmptyStrings(renderHTML(dom));

    // htmlParts
    const headNode = findOne((node) => node.tagName === 'head', dom);
    if (headNode) {
      result.htmlParts.head = removeEmptyStrings(stripIndent(getInnerHTML(headNode)));
    }
    const bodyNode = findOne((node) => node.tagName === 'body', dom);
    if (bodyNode) {
      result.htmlParts.body = removeEmptyStrings(stripIndent(getInnerHTML(bodyNode)));
    } else {
      // В HTML нет тега <body>. Это норма, просто используем всё кроме <head> как body
      const domWithoutHead = dom.filter((node) => node !== headNode);
      result.htmlParts.body = removeEmptyStrings(stripIndent(renderHTML(domWithoutHead)));
    }
  });
  const parser = new Parser(domHandler);

  try {
    parser.write(htmlCode);
    parser.end();
  } catch {
    // do nothing
  }

  return result;
};

function removeEmptyStrings(s: string): string {
  return s
    .split('\n')
    .filter((l) => !!l.trim())
    .join('\n');
}

/**
 * Функция deprecated в domutils.
 * Реализация взята оттуда же: https://github.com/fb55/domutils/blob/ee2b464d8d9532090df32a6dc7a375900c0aa611/src/stringify.ts#L33
 */
function getInnerHTML(node: AnyNode): string {
  return hasChildren(node) ? node.children.map((node) => renderHTML(node)).join('') : '';
}
