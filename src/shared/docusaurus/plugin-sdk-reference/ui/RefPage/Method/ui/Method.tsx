import React, { memo } from 'react';
import s from './method.module.css';
import { cn } from '@shared/utils';
import { Name } from './Name';
import { Result } from './Result';
import { DetailItem } from '@shared/docusaurus/plugin-sdk-reference/ui/RefPage/DetailItem';
import { Description } from '@shared/docusaurus/plugin-sdk-reference/ui/RefPage/Description';
import { refAnchorClassName } from '@shared/docusaurus/plugin-sdk-reference/model/constants';
import { MethodProps } from '@shared/docusaurus/plugin-sdk-reference/types/refs/method';
import { generateAnchor } from '@shared/docusaurus/plugin-sdk-reference/lib/generateAnchor';

export interface MethodWithProps extends MethodProps {
  /**
   * id который будет использован для генерации меню
   */
  id?: string;
  parentName?: string;
}

export const Method = memo(
  ({
    name,
    parentName = '',
    description,
    parameters,
    result,
    isConstructor = false,
    isOptional = false,
    paramsSignature,
  }: MethodWithProps) => {
    const hasParameters = parameters && parameters.length > 0;
    const hasResult = result && result.types && result.types.length > 0;

    const anchor = generateAnchor([parentName, name]);

    return (
      <div className={cn(s.container, refAnchorClassName)} id={anchor}>
        <Name
          id={anchor}
          paramsSignature={paramsSignature}
          isConstructor={isConstructor}
          isOptional={isOptional}
          name={name}
          parameters={parameters}
        />
        {description && <Description>{description}</Description>}
        {hasParameters && <div className={s.sectionHeader}>Parameters</div>}

        {(hasParameters || hasResult) && (
          <div className={s.parametersGrid}>
            {parameters?.map((param) => (
              <DetailItem key={param.name} {...param} isParameter parentName={parentName || name} />
            ))}
            {hasResult && <Result {...result} />}
          </div>
        )}
      </div>
    );
  },
);

Method.displayName = 'Method';
