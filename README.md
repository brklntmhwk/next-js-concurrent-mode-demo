# Next.js Concurrent mode demo

- Next.js 13(app directory)
- React Suspense, lazy, useTransition, startTransition
- Tailwind css

## memo

- Overall

  - If rendering suspends, the fact that it was happening in and of itself is ignored as if nothing happened
  - The new transition features like startTransition generates a situation where there are two different parallel worlds: Head world and Tail world (hereinafter called HW and TW, respectively)
    - TW makes changes by referring to the diff between HW and itself, not by handling states on its own

- Suspense

  - when suspension occurs, it passes the content of the fallback prop to the browser to temporarily display it until it finishes
  - Without Suspense, suspension affects all the App and causes a whiteout on the browser forcing it to stop rendering
  - It plays a roll as a boundary for suspension
  - Upon completion of Promise, all components inside the Suspense will be re-rendered with optimization
    - Promise resolved, in this case, can serve as a signal that the component in which the Promise was thrown is ready to be rendered (this is the core point of throwing Promises)
      - This saves you the bother of adding some logic for handling states to the component side, and also helps you separate logic and views

- startTransition

  - It takes a callback function that does change a state object(e.g. setState((sth) => sth + 1))
  - A callback wrapped inside it becomes a lower priority in terms of state renewal and therefore the execution of it might be postponed
  - It's useful in a situation like suspension takes just a moment and the loading component flickers; it can skip the fallback process so the display transition occurs smoothly
  - could affect things outside of Suspenses, for instance, if they are inextricably connected to the state to be changed inside the startTransition
    - Given this fact, they will stay the same with their appearances if the state changing suspends until the end
    - The aim of this behavior is to keep a consistency with the display of HW

- useTransition

  - enables you to know if there are any changes in TW (isPending)
  - gives you two values: isPending and startTransition(this has the exact same effect as above)
  - bridges the gap between HW and TW
