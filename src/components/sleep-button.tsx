"use client";

import { useState, startTransition } from "react";
import OneSecond from "./1s-component";

const SleepButton = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <button
        className="p-3 border border-zinc-400 hover:bg-slate-200"
        onClick={() => {
          startTransition(() => {
            setIsShown(true);
          });
        }}
      >
        {isShown && <OneSecond />} を燃やせ!!!🔥
      </button>
    </>
  );
};

export default SleepButton;
