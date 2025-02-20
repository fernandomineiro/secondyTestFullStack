import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 3600, checkperiod: 600 });

export const setCache = (key: string, value: any): boolean => {
  return cache.set(key, value);
};

export const getCache = (key: string): any => {
  return cache.get(key);
};

export const hasCache = (key: string): boolean => {
  return cache.has(key);
};

export const deleteCache = (key: string): boolean => {
  return cache.del(key);
};

export const clearCache = (): void => {
  cache.flushAll();
};