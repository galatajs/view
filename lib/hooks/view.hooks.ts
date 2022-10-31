import { Middleware, NextFunction, Request, Response } from "@galatajs/http";
import {
  LocalObject,
  RenderOptions,
  ViewCreator,
  ViewOptions,
} from "../types/view";
import { ViewConfig } from "../types/config";
import { createConfig } from "./config.hooks";
import * as path from "path";

export const createViewApp: ViewCreator = (
  options?: ViewOptions
): Middleware => {
  const config: ViewConfig = createConfig(options);
  return (req: Request, res: Response, next: NextFunction) => {
    res.render = <V>(
      file: string,
      values?: LocalObject<V>,
      options?: RenderOptions
    ) => {
      file += `.${config.extension}`;
      const cwd = process.cwd();
      const root = path.resolve(cwd, config.dir);
      const _path = path.resolve(root, file);
      const opts = options || {};
      const compile = config.engine.compileFile(
        _path,
        Object.assign({ cache: true }, opts)
      );
      res.done(compile(values));
    };
    next();
  };
};
