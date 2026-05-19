import { type AnchorHTMLAttributes, memo } from 'react';
import Link from '@docusaurus/Link';
import { Button, type ButtonProps } from '@shared/uiKit/Button';
import { useBrand } from '@shared/hooks/useBrand';
import { getServiceUrl, type ServiceKey } from '@shared/utils';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import s from './CtaButton.module.css';

type CtaButtonLinkProps =
  | {
      href: string;
      service?: never;
      to?: never;
    }
  | {
      to: string;
      service?: ServiceKey;
      href?: never;
    };

export type CtaButtonProps = Omit<ButtonProps, 'asChild'> &
  CtaButtonLinkProps & {
    children: string;
    target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
    rel?: AnchorHTMLAttributes<HTMLAnchorElement>['rel'];
  };

export const CtaButton = memo<CtaButtonProps>(
  ({
    children,
    size = 40,
    appearance = 'primary',
    href,
    to,
    service,
    target = '_blank',
    rel,
    ...buttonProps
  }) => {
    const brand = useBrand();
    const context = useDocusaurusContext();
    const lang = context.i18n.currentLocale;

    const serviceOrigin = service ? getServiceUrl(brand.id, service) : '';
    const localizedOrigin =
      serviceOrigin && lang === 'en' && !serviceOrigin.endsWith('/en')
        ? `${serviceOrigin}/en`
        : serviceOrigin;

    const link = localizedOrigin ? `${localizedOrigin}${to ?? ''}` : to || href || '';

    const isTargetBlank = target === '_blank';
    const linkProps = to || localizedOrigin ? { to: link } : { href: link };

    return (
      <Link
        {...linkProps}
        target={target}
        rel={isTargetBlank ? (rel ?? 'noopener noreferrer') : rel}
      >
        <Button className={s.button} size={size} appearance={appearance} {...buttonProps}>
          {children}
        </Button>
      </Link>
    );
  },
);

CtaButton.displayName = 'CtaButton';
