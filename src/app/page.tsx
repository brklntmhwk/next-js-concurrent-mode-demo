import { lazy, Suspense } from "react";
import OneSecond from "@/components/1s-component";
import TwoSecond from "@/components/2s-component";
import ThreeSecond from "@/components/3s-component";
import Instant from "@/components/instant-component";
import NoSleep from "@/components/no-sleep-component";
import Loading from "@/components/loading";

export default function Home() {
  const LazyComponent = lazy(() => import("@/components/lazy-component"));

  return (
    <main className="flex gap-8 min-h-screen flex-col items-center justify-around p-28">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-lg lg:flex">
        <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4">
          Next.js Streaming demo
        </h1>
        <div className="fixed bottom-0 left-0 flex w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/brklntmhwk"
            target="_blank"
            rel="noopener noreferrer"
          >
            By brklntmhwk
          </a>
        </div>
      </div>
      <div className="relative flex gap-10 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:lg:h-[360px] z-[-1]">
        {/* setTimeout で秒数をずらして表示 */}
        <Suspense fallback={<Loading msg="1秒お待ちを.." />}>
          <OneSecond />
        </Suspense>
        <Suspense fallback={<Loading msg="2秒お待ちを.." />}>
          <TwoSecond />
        </Suspense>
        <Suspense fallback={<Loading msg="3秒お待ちを.." />}>
          <ThreeSecond />
        </Suspense>
      </div>
      <div>
        <Instant />
      </div>
      {/* React lazy との組み合わせ */}
      <div>
        <Suspense
          fallback={
            <Loading msg="ごめん、今日少し遅れる！もうちょっと待ってて！" />
          }
        >
          <LazyComponent />
        </Suspense>
      </div>
      {/* 外部APIから await fetch */}
      <div>
        <h2 className="text-2xl font-semibold leading-loose pb-4">
          Posts fetched from{" "}
          <a
            href="https://jsonplaceholder.typicode.com/"
            className="underline underline-offset-4"
          >
            jsonplaceholder
          </a>
        </h2>
        <Suspense fallback={<Loading />}>
          <NoSleep />
        </Suspense>
      </div>
    </main>
  );
}
