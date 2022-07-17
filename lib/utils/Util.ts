export const Util = {
  getFieldIsExists<T, R>(obj: T | undefined, field: string): R | undefined {
    if (!!obj && obj[field]) return obj[field];
    return undefined;
  },
};
