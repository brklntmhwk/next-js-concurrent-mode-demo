import timeout from "@/utils/timeout";

const ThreeSecond = async () => {
  await timeout(3000);

  return <span className="text-5xl">体</span>;
};

export default ThreeSecond;
