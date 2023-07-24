import { use } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const NoSleep = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5"
  );
  if (res.ok) {
    const posts = (await res.json()) as Post[];

    return (
      <article className="grid gap-4">
        {posts.map((post) => (
          <div key={post.id} className="border border-zinc-400 py-5 px-6">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </article>
    );
  }

  return <></>;
};

export default NoSleep;
