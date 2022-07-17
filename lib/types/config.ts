import { ViewEngine } from "./engine";

export interface ViewConfig {
  dir: string;
  cache: boolean;
  engine: ViewEngine;
  extension: string;
}
