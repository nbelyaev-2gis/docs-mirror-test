import { memo } from 'react';
import s from './properties.module.css';
import { DetailItem } from '@shared/docusaurus/plugin-sdk-reference/ui/RefPage/DetailItem';
import { PropertyProps } from '@shared/docusaurus/plugin-sdk-reference/types/refs/_anyRef';
import { ParameterProps } from '@shared/docusaurus/plugin-sdk-reference/types/refs/method';

type Props = {
  properties?: PropertyProps[] | ParameterProps[];
  parentName: string;
};

export const Properties = memo<Props>(({ properties, parentName }) => {
  if (!properties || !properties.length) return null;

  return (
    <div className={s.propertiesList}>
      <div className={s.sectionHeader}>Properties</div>
      <div className={s.propertiesListInner}>
        {properties.map((property) => (
          <DetailItem key={property.name} {...property} parentName={parentName} />
        ))}
      </div>
    </div>
  );
});

Properties.displayName = 'Properties';
