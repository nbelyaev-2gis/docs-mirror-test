const numericRegex = /^[0-9]+$/;

/**
 * Сортирует список версий в формате semver от большей к меньшей.
 *
 * @example
 * sortSemverList(['1.0.0', '2.0.0', '1.5.0']); // ['2.0.0', '1.5.0', '1.0.0']
 * sortSemverList(['1.0.0-alpha', '1.0.0-beta.1', '1.0.0-beta.2', '1.0.0']); // ['1.0.0', '1.0.0-beta.2', '1.0.0-beta.1', '1.0.0-alpha']
 */
export const sortSemverList = <T extends { label: string }>(versions: T[]): T[] => {
  return versions.sort((a, b) => {
    const aVersion = a.label;
    const bVersion = b.label;

    // 1. Сортируем по числам в мажоре, миноре и патче.
    const versionA = aVersion.split('.').slice(0, 3).map(Number);
    const versionB = bVersion.split('.').slice(0, 3).map(Number);

    for (let i = 0; i < Math.max(versionA.length, versionB.length); i++) {
      const numA = versionA[i] || 0;
      const numB = versionB[i] || 0;

      if (numA !== numB) {
        return numB - numA;
      }
    }

    // 2. Если версии одинаковые, но присутствует пре-релиз.
    const preReleaseA = aVersion.split('-')[1]?.split('.') as string[] | undefined;
    const preReleaseB = bVersion.split('-')[1]?.split('.') as string[] | undefined;

    // Отсутствие пре-релиза > присутствие пре-релиза.
    if (preReleaseA?.length && !preReleaseB) {
      return 1;
    }
    if (!preReleaseA && preReleaseB?.length) {
      return -1;
    }
    if (!preReleaseA && !preReleaseB) {
      return 0;
    }

    let i = 0;

    do {
      const aElement = preReleaseA?.[i];
      const bElement = preReleaseB?.[i];

      if (aElement === undefined && bElement === undefined) {
        return 0;
      }
      if (bElement === undefined) {
        return -1;
      }
      if (aElement === undefined) {
        return 1;
      }
      if (aElement === bElement) {
        continue;
      } else {
        const isANumber = numericRegex.test(aElement);
        const isBNumber = numericRegex.test(bElement);

        let aNumber: string | number = aElement;
        let bNumber: number | string = bElement;

        if (isANumber && isBNumber) {
          aNumber = +aNumber;
          bNumber = +bNumber;
        }

        /* eslint-disable no-nested-ternary */
        return aNumber === bNumber
          ? 0
          : isANumber && !isBNumber
            ? 1
            : isBNumber && !isANumber
              ? -1
              : aNumber < bNumber
                ? 1
                : -1;
        /* eslint-enable no-nested-ternary */
      }
    } while (++i);

    return 0;
  });
};
