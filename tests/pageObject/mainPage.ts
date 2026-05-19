import { BasePage } from './base';
import { Page, test } from '@playwright/test';
import { navigationLocator } from 'theme/components/Navigation/locators';
import { aboutLocator } from 'theme/components/Hero/locators';

export class MainPage extends BasePage {
  constructor(page: Page) {
    super(page, '/');
  }

  readonly navigationMenu = this.page.getByTestId(navigationLocator.wrapper);
  readonly mainSearchButton = this.page.getByTestId(aboutLocator.mainSearchButton);

  async openSearch() {
    await this.mainSearchButton.click();
  }
}

export const mainPageTest = test.extend<{ mainPage: MainPage }>({
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);

    /* eslint-disable react-hooks/rules-of-hooks */
    await use(mainPage);
  },
});
