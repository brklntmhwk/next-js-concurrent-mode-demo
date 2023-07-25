import useData from "@/hooks/use-data";
import fetchData from "@/utils/fetch-data";

type DataLoaderProps = {
  cacheKey: string;
};

const DataLoader = ({ cacheKey }: DataLoaderProps) => {
  const data = useData(cacheKey, fetchData);

  return (
    <p>
      お客様のキャッシュキー{cacheKey} のデータは {data} になります💁
    </p>
  );
};

export default DataLoader;
