import { BasePage } from './base';
import { Page, test } from '@playwright/test';
import { navigationLocator } from 'theme/components/Navigation/locators';

export class OnPremPage extends BasePage {
  constructor(page: Page) {
    super(page, '/on-premise');
  }

  readonly navigationMenu = this.page.getByTestId(navigationLocator.wrapper);
}

export const onPremPageTest = test.extend<{ onPremPage: OnPremPage }>({
  onPremPage: async ({ page }, use) => {
    const onPremPage = new OnPremPage(page);

    /* eslint-disable react-hooks/rules-of-hooks */
    await use(onPremPage);
  },
});
