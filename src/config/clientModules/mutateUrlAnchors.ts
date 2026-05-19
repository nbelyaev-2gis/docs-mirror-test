/**
 * Клиентские редиректы для якорей формата из старой доки.
 * Почему клиентские? Потому что якоря не передаются на сервер.
 * Как долго держать в проде эти редиректы? Пока в статьях не останется якорей старого формата.
 */

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { getMutatedUrlHash } from './lib/getMutatedUrlHash';
import { oldPatterns } from './model/patterns';

if (ExecutionEnvironment.canUseDOM) {
  function handleHash() {
    window.location.hash = '#' + getMutatedUrlHash(window.location.hash, { patterns: oldPatterns });
  }

  window.addEventListener('hashchange', handleHash);
  window.addEventListener('load', handleHash);
}
