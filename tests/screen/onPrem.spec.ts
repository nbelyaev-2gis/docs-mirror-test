import { test } from '@tests/fixtures/tests';

test(`Главная страница он-према`, async ({ onPremPage }) => {
  await test.step('Перейти на главную страницу он-према', async () => {
    await onPremPage.goto();
  });
  await test.step('Тогда страница должна соответствовать снимку', async () => {
    await onPremPage.toHaveScreenshot({ visibleElement: onPremPage.navigationMenu });
  });
});
