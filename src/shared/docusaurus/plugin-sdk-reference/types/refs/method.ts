import type { Ref } from './_anyRef';

export type MethodType = 'method';

export interface MethodRef {
  type: MethodType;
  props: MethodProps;
}

export interface MethodProps {
  /**
   * Формальное имя функции
   */
  name: string;

  /**
   * Список параметров, принимаемых функцией
   */
  parameters?: ParameterProps[];

  /**
   * Описание возвращаемого функцией значения.
   */
  result?: ResultProps;

  /**
   * Описание функции
   */
  description?: string;

  /**
   * Является ли функция конструктором. Передавать true если
   * необходим префикс "new" перед имененем функции
   */
  isConstructor?: boolean;

  /**
   * Функция является опциональной, т.е. может как присутствовать,
   * так и отсутствовать в некоторой структуре
   */
  isOptional?: boolean;

  /**
   * Сигнатура вызова функции.
   * Если не передана, то будет сформирована автоматически на основе name и parameters
   * Если передано, то имя функции и параметры берутся из этого поля. Допускается маркдаун.
   */
  paramsSignature?: string;
}

export interface ParameterProps {
  /**
   * Имя параметра
   */
  name: string;

  /**
   * Список возможных типов параметра
   */
  types: Ref[];

  /**
   * Описание параметра
   */
  description?: string;

  /**
   * Параметр является опциональным, т.е. его можно не передовать при вызове функции
   */
  isOptional?: boolean;
}

export interface ResultProps {
  /**
   * Список возможных типов возвращаемого значения
   */
  types: Ref[];

  /**
   * Описание возвращаемого значения
   */
  description?: string;
}

export interface PreparedMethodProps extends MethodProps {
  metaType: MethodType;
}
