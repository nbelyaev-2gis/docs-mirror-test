import { memo } from 'react';
import { MethodProps } from '@shared/docusaurus/plugin-sdk-reference/types/refs/method';
import s from './methods.module.css';
import { Method } from '../../Method';

interface MethodsProps {
  methods?: MethodProps[];
  parentName: string;
}

export const Methods = memo(({ methods, parentName }: MethodsProps) => {
  if (!methods || !methods.length) {
    return null;
  }

  return (
    <div className={s.methodsList}>
      <div className={s.sectionHeader}>Methods</div>
      {methods.map((method, i) => (
        <Method
          id={method.name}
          parentName={parentName}
          key={`method-${method.name}-${i + 1}`}
          {...method}
        />
      ))}
    </div>
  );
});

Methods.displayName = 'Methods';
