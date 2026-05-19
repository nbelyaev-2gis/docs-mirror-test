import { test } from '@tests/fixtures/tests';

test('Главная страница', async ({ mainPage }) => {
  await test.step('Перейти на главную страницу', async () => {
    await mainPage.goto();
  });

  await test.step('Тогда страница должна соответствовать снимку', async () => {
    await mainPage.toHaveScreenshot({ visibleElement: mainPage.navigationMenu });
  });
});
