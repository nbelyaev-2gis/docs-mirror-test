import { test } from '@tests/fixtures/tests';

test(`Тестовая страница статьи`, async ({ articlePage }) => {
  await test.step('Перейти на тестовую страницу статьи', async () => {
    await articlePage.goto();
  });

  await test.step('Тогда страница должна соответствовать снимку', async () => {
    await articlePage.toHaveScreenshot({ visibleElement: articlePage.articleContent });
  });
});
