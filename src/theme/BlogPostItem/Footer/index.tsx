import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import { ThemeClassNames } from '@docusaurus/theme-common';
import EditMetaRow from '@theme/EditMetaRow';
import TagsListInline from '@theme/TagsListInline';
import ReadMoreLink from '@theme/BlogPostItem/Footer/ReadMoreLink';
import styles from './styles.module.css';

export default function BlogPostItemFooter(): ReactNode {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { tags, title, editUrl, hasTruncateMarker, lastUpdatedBy, lastUpdatedAt } = metadata;

  // A post is truncated if it's in the "list view" and it has a truncate marker
  const truncatedPost = !isBlogPostPage && hasTruncateMarker;

  const tagsExists = tags.length > 0;

  const renderFooter = tagsExists || truncatedPost || editUrl;

  if (!renderFooter) {
    return null;
  }

  // BlogPost footer - details view
  if (isBlogPostPage) {
    const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);

    return (
      <footer className={styles.detailsFooter}>
        {tagsExists && (
          <div
            className={clsx('row', 'margin-top--sm', ThemeClassNames.blog.blogFooterEditMetaRow)}
          >
            <div className="col">
              <TagsListInline tags={tags} />
            </div>
          </div>
        )}
        {canDisplayEditMetaRow && (
          <EditMetaRow
            className={clsx('margin-top--sm', ThemeClassNames.blog.blogFooterEditMetaRow)}
            editUrl={editUrl}
            lastUpdatedAt={lastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
          />
        )}
      </footer>
    );
  }
  // BlogPost footer - list view
  else {
    return (
      <footer className="margin-top--md">
        {truncatedPost && (
          <div className="row">
            <div className="col">
              <ReadMoreLink blogPostTitle={title} to={metadata.permalink} />
            </div>
          </div>
        )}
        {tagsExists && (
          <div className={clsx('row', styles.tagsRow)}>
            <div className="col">
              <TagsListInline tags={tags} />
            </div>
          </div>
        )}
      </footer>
    );
  }
}
