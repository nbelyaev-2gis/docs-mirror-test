import { mergeTests } from '@playwright/test';
import { mainPageTest } from '@tests/pageObject/mainPage';
import { articlePageTest } from '@tests/pageObject/articlePage';
import { onPremPageTest } from '@tests/pageObject/onPremPage';

export const test = mergeTests(mainPageTest, onPremPageTest, articlePageTest);
