import { memo } from 'react';
import Heading from '@theme/Heading';
import { cn } from '@shared/utils';
import {
  MethodProps,
  ParameterProps,
} from '@shared/docusaurus/plugin-sdk-reference/types/refs/method';
import { Description } from '@shared/docusaurus/plugin-sdk-reference/ui/RefPage/Description';
import { WithAnchorButton } from './WithAnchorButton';
import s from './name.module.css';

type Props = Omit<MethodProps, 'description' | 'result'> & { id: string };

export const Name = memo<Props>(
  ({ id, paramsSignature, isConstructor, isOptional, parameters, name }) => {
    if (paramsSignature) {
      return (
        <div className={cn(isConstructor ? s.constructorNameContainer : s.methodNameContainer)}>
          <WithAnchorButton anchor={id}>
            <Description>{paramsSignature}</Description>
          </WithAnchorButton>
        </div>
      );
    }

    return (
      <div className={cn(isConstructor ? s.constructorNameContainer : s.methodNameContainer)}>
        <Heading as="h4" id={id} className={s.methodName}>
          {isConstructor && 'new '}
          {name}
          {isOptional && '?'}
          {parameters && parameters.length > 0 && (
            <code className={s.paramSignatures}>{getParamsString(parameters)}</code>
          )}
        </Heading>
      </div>
    );
  },
);

Name.displayName = 'Name';

function getParamsString(params: ParameterProps[]) {
  if (!params) return '( )';
  const paramsString = params
    .map((param) => (param?.isOptional === true ? `${param.name}?` : param.name))
    .join(', ');
  return `(${paramsString})`;
}
