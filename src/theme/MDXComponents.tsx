import MDXComponents from '@theme-original/MDXComponents';
import { AnyObject } from '@shared/docusaurus/plugin-sdk-reference/ui/RefPage/AnyObject';
import { InheritList } from '@shared/docusaurus/plugin-sdk-reference/ui/RefPage/InheritList';
import { Method } from '@shared/docusaurus/plugin-sdk-reference/ui/RefPage/Method';
import { OpenAPI } from './components/openapi';
import { HtmlExampleWithSrcCode } from './components/HtmlExampleWithSrcCode';
import { TruckMap } from './components/TruckMap';
import { GeocoderMap } from './components/GeocoderMap';
import { Video } from './components/Video';
import { Brand } from './components/Brand';
import { Admonition } from './components/Admonition';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { NoInvert } from './components/NoInvert';
import { CtaButton } from './components/CtaButton';
import { Accordion, AccordionItem } from './components/Accordion';

export default {
  ...MDXComponents,
  OpenAPI,
  HtmlExampleWithSrcCode,
  TruckMap,
  GeocoderMap,
  AnyObject,
  InheritList,
  Method,
  Video,
  admonition: Admonition,
  // С помощью Brand происходит подмена названия бренда в MDX на 2ГИС/Urbi.
  // Не переименовывай его, без изменения текста в документации
  Brand,
  Tabs,
  TabItem,
  NoInvert,
  CtaButton,
  Accordion,
  AccordionItem,
};
