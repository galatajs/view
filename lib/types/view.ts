import { Middleware } from "@galatajs/http";
import { ViewEngine } from "./engine";

export type ViewOptions = {
  /**
   * @default "views"
   * @description The directory path where the view files are located.
   * @type {string}
   * @memberof ViewConfig
   * @example "views"
   * @example "./views"
   * @since 0.0.1
   * @author Sami Salih İbrahimbaş
   */
  dir?: string;

  /**
   * @default true
   * @description It asks if you are using cache. By default, it is true. This means that each view will be cached. If set to false, the dir option is ignored.
   * @type {string}
   * @memberof ViewConfig
   * @since 0.0.1
   * @author Sami Salih İbrahimbaş
   */
  cache?: boolean;

  /**
   * @default "pug"
   * @description The view engine to use.
   * @type {string}
   * @memberof ViewConfig
   * @since 0.0.1
   * @author Sami Salih İbrahimbaş
   */
  engine?: ViewEngine;

  /**
   * @default "pug"
   * @description The view engine to use.
   * @type {string}
   * @memberof ViewConfig
   * @since 0.0.1
   * @author Sami Salih İbrahimbaş
   */
  extension?: string;
};

export type RenderOptions = {
  /**
   * @default true
   * @description It asks if you are using cache. By default, it is true. This means that each view will be cached. If set to false, the dir option is ignored.
   * @type {string}
   * @memberof ViewConfig
   * @since 0.0.1
   * @author Sami Salih İbrahimbaş
   */
  cache?: boolean;
};

export type LocalObject<T = any> = {
  [key: string]: T;
};

export interface ViewResponse {
  render<V = any>(
    file: string,
    values?: LocalObject<V>,
    callback?: RenderOptions
  ): void;
}

declare module "@galatajs/http" {
  interface Http1Response extends ViewResponse {}
  interface Http2Response extends ViewResponse {}
}

export type ViewCreator = (options?: ViewOptions) => Middleware;
