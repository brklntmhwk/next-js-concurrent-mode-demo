import timeout from "./timeout";

const fetchData = async (): Promise<string> => {
  await timeout(2000);
  return `${(Math.random() * 1000).toFixed(0)}`;
};

export default fetchData;
