import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import type { Props } from '@theme/BlogPostItem/Footer/ReadMoreLink';
import styles from './styles.module.css';

function ReadMoreLabel() {
  return (
    <Translate
      id="theme.blog.post.readMore"
      description="The label used in blog post item excerpts to link to full blog posts"
    >
      Read more
    </Translate>
  );
}

export default function BlogPostItemFooterReadMoreLink(props: Props): ReactNode {
  const { blogPostTitle, className, ...linkProps } = props;
  return (
    <Link
      className={clsx(styles.link, className)}
      aria-label={translate(
        {
          message: 'Read more about {title}',
          id: 'theme.blog.post.readMoreLabel',
          description: 'The ARIA label for the link to full blog posts from excerpts',
        },
        { title: blogPostTitle },
      )}
      {...linkProps}
    >
      <ReadMoreLabel />
    </Link>
  );
}
