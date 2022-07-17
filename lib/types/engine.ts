import { LocalObject, RenderOptions } from "./view";

export interface ViewEngine {
  compileFile(template: string, options?: RenderOptions & any): FileRenderer;
}

export type FileRenderer = (values?: LocalObject) => string;
