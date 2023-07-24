import timeout from "@/utils/timeout";

const TwoSecond = async () => {
  await timeout(2000);

  return <span className="text-5xl">技</span>;
};

export default TwoSecond;
