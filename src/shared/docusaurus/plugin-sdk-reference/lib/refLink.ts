import { Reference } from '../types/sdkReference';
import { getUrlFromTemplate } from './getUrlFromTemplate';
import { sanitizeRefNameForUrl } from './sanitizeRefNameForUrl';

export class RefLink {
  private sdkVersion: string;
  private referenceUrlTemplate: string;
  private refToTypeRelation = new Map<string, { type: Reference['type'] }>();
  problematicCrossLinks = new Set<string>();

  constructor({
    referenceUrlTemplate,
    sdkVersion,
  }: {
    referenceUrlTemplate: string;
    sdkVersion: string;
  }) {
    this.referenceUrlTemplate = referenceUrlTemplate;
    this.sdkVersion = sdkVersion;
  }

  setRef({ refName, refType }: { refName: string; refType: Reference['type'] }) {
    this.refToTypeRelation.set(refName, { type: refType });
  }

  getRefLink({ refName }: { refName: string }) {
    const { type } = this.refToTypeRelation.get(refName) ?? {};

    if (!type) {
      this.problematicCrossLinks.add(refName);
      return undefined;
    }

    const basePath = getUrlFromTemplate(this.referenceUrlTemplate, {
      baseUrl: '/',
      refType: type,
      sdkVersion: this.sdkVersion,
    });

    return `${basePath}#${sanitizeRefNameForUrl(refName)}`;
  }
}
