import { BasePage } from './base';
import { Page, test } from '@playwright/test';

export class ArticlePage extends BasePage {
  constructor(page: Page) {
    super(page, '/test/overview');
  }

  readonly articleContent = this.page.getByRole('article');
}

export const articlePageTest = test.extend<{ articlePage: ArticlePage }>({
  articlePage: async ({ page }, use) => {
    const articlePage = new ArticlePage(page);

    /* eslint-disable react-hooks/rules-of-hooks */
    await use(articlePage);
  },
});
