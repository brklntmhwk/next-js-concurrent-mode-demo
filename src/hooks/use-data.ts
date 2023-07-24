const dataMap: Map<string, unknown> = new Map();

const useData = <T>(cacheKey: string, fetch: () => Promise<T>): T => {
  // Caution: This could be risky in that what type will be applied is unclear beforehand and therefore more than one data of different types with the same cache key might cause a serious problem
  const cachedData = dataMap.get(cacheKey) as T | undefined;
  if (cachedData === undefined)
    throw fetch().then((d) => dataMap.set(cacheKey, d));

  return cachedData;
};

export default useData;
