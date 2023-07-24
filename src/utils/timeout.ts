const timeout = (duration: number) =>
  new Promise((resolve) => setTimeout(resolve, duration));

export default timeout;
