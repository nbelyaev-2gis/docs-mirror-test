import { expect, Locator, Page } from '@playwright/test';
import { searchModalLocator } from 'theme/SearchBar/locators';

export abstract class BasePage {
  public searchModal: Locator;

  protected constructor(
    public readonly page: Page,
    public url: string,
  ) {
    this.searchModal = this.page.getByTestId(searchModalLocator.wrapper);
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async toHaveScreenshot(options?: { fullPage?: boolean; visibleElement?: Locator }) {
    if (options?.visibleElement) {
      await expect(options.visibleElement).toBeVisible();
    }

    await expect(this.page).toHaveScreenshot({ fullPage: true, timeout: 15000, ...options });
  }
}
