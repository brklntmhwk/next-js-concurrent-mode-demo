import timeout from "@/utils/timeout";

const OneSecond = async () => {
  await timeout(1000);

  return <span className="text-5xl">心</span>;
};

export default OneSecond;
