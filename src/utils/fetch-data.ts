import timeout from "./timeout";

const fetchData = async (): Promise<string> => {
  await timeout(3000);
  return `ん、データだよ！ ${(Math.random() * 1000).toFixed(0)}`;
};

export default fetchData;
