type LoadingProps = {
  msg?: string;
};

const Loading = ({ msg }: LoadingProps) => {
  return <h2>🌀 {msg && msg}</h2>;
};

export default Loading;
