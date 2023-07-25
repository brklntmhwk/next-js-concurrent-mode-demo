"use client";

import { useState, Suspense, useTransition } from "react";
import Link from "next/link";
import DataLoader from "@/components/data-loader";
import Loading from "@/components/loading";
import useTime from "@/hooks/use-time";

export default function TransitionPage() {
  const [cnt1, setCnt1] = useState(0);
  const [cnt2, setCnt2] = useState(0);
  const time = useTime();
  const [isPending, startTransition] = useTransition();

  return (
    <main className="flex gap-8 min-h-screen flex-col items-center justify-around p-28">
      <h1 className="text-4xl font-bold leading-loose pb-4">Transition</h1>
      <p
        className={`p-3 rounded-full font-semibold tabular-nums ${
          isPending
            ? "text-blue-700 from-amber-200 to-amber-500 bg-gradient-to-r"
            : ""
        }`}
      >
        🕒 {time}
      </p>
      <section className="grid gap-3 justify-center">
        <h2 className="text-3xl font-semibold leading-relaxed pb-3">
          Without Transition
        </h2>
        <Suspense fallback={<Loading />}>
          <DataLoader cacheKey={`${cnt1}`} />
        </Suspense>
        <button
          className="p-3 border border-zinc-400 hover:bg-slate-200"
          onClick={() => setCnt1((c) => c + 1)}
        >
          Cnt1 is {cnt1}
        </button>
      </section>
      <section className="grid gap-3">
        <h2 className="text-3xl font-semibold leading-relaxed pb-3">
          With Transition
        </h2>
        <Suspense fallback={<Loading />}>
          <DataLoader cacheKey={`${cnt2}`} />
        </Suspense>
        <button
          className="p-3 border border-zinc-400 hover:bg-slate-200"
          onClick={() => {
            startTransition(() => setCnt2((c) => c + 1));
          }}
        >
          Cnt2 is {cnt2}
        </button>
      </section>
      <section className="flex justify-between">
        <Link href="/">🏠 Home</Link>
      </section>
    </main>
  );
}
