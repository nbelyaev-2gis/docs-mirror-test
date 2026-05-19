import React from 'react';
import s from './breadcrumbs.module.css';

type Props = {
  hierarchy: string[];
};

export const Breadcrumbs = ({ hierarchy }: Props) => {
  return (
    <div className={s.breadcrumbs}>
      {hierarchy.slice(0, -1).map((el, i, array) => {
        const key = `${el}-${i}`;
        return (
          <div key={key} className={s.breadcrumbsItem}>
            <div>{el}</div>
            {i < array.length - 1 && <div className={s.breadcrumbsDivider}>{'›'}</div>}
          </div>
        );
      })}
    </div>
  );
};
