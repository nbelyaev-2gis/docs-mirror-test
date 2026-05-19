import { memo } from 'react';
import Link from '@docusaurus/Link';

import s from './Card.module.css';

interface Props {
  href?: string;
  title: string;
  description: string;
  onClick?: () => void;
}

export const Card = memo<Props>(({ href, title, description, onClick }) => (
  <Link className={s.card} href={href} onClick={onClick}>
    <span className={s.title}>{title}</span>
    <span className={s.description}>{description}</span>
  </Link>
));
Card.displayName = 'Card';
