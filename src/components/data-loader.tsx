import useData from "@/hooks/useData";
import fetchData from "@/utils/fetch-data";

type DataLoaderProps = {
  key: string;
};

const DataLoader = ({ key }: DataLoaderProps) => {
  const data = useData(key, fetchData);

  return <div>{data}</div>;
};

export default DataLoader;
