import { ViewConfig } from "../types/config";
import { ViewEngine } from "../types/engine";
import { ViewOptions } from "../types/view";
import { Util } from "../utils/Util";

const importDefaultEngine = (engine: string): ViewEngine => {
  try {
    return require(engine);
  } catch (e) {
    throw new Error(`Engine ${engine} not found`);
  }
};

export const createConfig = (options?: ViewOptions): ViewConfig => {
  return {
    dir: Util.getFieldIsExists<ViewOptions, string>(options, "dir") || "views",
    cache:
      Util.getFieldIsExists<ViewOptions, boolean>(options, "cache") || true,
    engine: importDefaultEngine(
      Util.getFieldIsExists<ViewOptions, string>(options, "engine") || "pug"
    ),
    extension:
      Util.getFieldIsExists<ViewOptions, string>(options, "extension") || "pug",
  };
};
