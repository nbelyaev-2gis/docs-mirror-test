import { memo } from 'react';
import { MethodProps } from '@shared/docusaurus/plugin-sdk-reference/types/refs/method';
import s from './constructorMethods.module.css';
import { Method } from '../../Method';

interface ConstructorMethodsProps {
  constructorMethods?: MethodProps[];
  parentName: string;
}

export const ConstructorMethods = memo(
  ({ constructorMethods, parentName }: ConstructorMethodsProps) => {
    if (!constructorMethods || !constructorMethods.length) {
      return null;
    }

    return (
      <div className={s.constructorContainer}>
        {constructorMethods.map((method, i) => {
          return (
            <Method
              id={method.name}
              parentName={parentName}
              key={`constructor-${method.name}-${i + 1}`}
              isConstructor
              {...method}
            />
          );
        })}
      </div>
    );
  },
);

ConstructorMethods.displayName = 'ConstructorMethods';
