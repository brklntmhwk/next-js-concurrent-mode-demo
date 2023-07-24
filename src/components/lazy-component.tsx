import timeout from "@/utils/timeout";

const LazyComponent = async () => {
  await timeout(5000);

  return <div>遅れてごめん！電車が遅延しててサ...</div>;
};

export default LazyComponent;
