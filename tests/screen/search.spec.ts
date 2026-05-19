import { test } from '@tests/fixtures/tests';

test(`Страница с открытым поиском из главной странице`, async ({ mainPage }) => {
  await test.step('Перейти на главную страницу', async () => {
    await mainPage.goto();
  });

  await test.step('Нажать на поле поиска', async () => {
    await mainPage.openSearch();
  });

  await test.step('Тогда страница должна соответствовать снимку', async () => {
    await mainPage.toHaveScreenshot({ fullPage: false, visibleElement: mainPage.searchModal });
  });
});
