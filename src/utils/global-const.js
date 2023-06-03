// Based on https://dev.to/yezyilomo/global-state-management-in-react-with-global-variables-and-hooks-state-management-doesn-t-have-to-be-so-hard-2n2c
// Credit also goes to my mate Fülöp.
// https://codesandbox.io/p/sandbox/wonderful-golick-l8tsbm?file=%2Fsrc%2FglobalState.js%3A14%2C1
// 1. Create singletons via createGlobalState()
export const walletAddress = createGlobalState();

// 2. Then in the components: import those states you need there.
//    If you need re-render on state change then employ useGlobalState.
//    If you do not want re-render on state change
//    then use getters & setters directly.

// ##################################

function createGlobalState(initState = null) {
  const prototype = {
    data: { state: initState, reRenderFns: [] },

    get() {
      return this.data.state;
    },

    set(newState) {
      if (newState === this.data.state) return;
      this.data.state = newState;
      this.data.reRenderFns.forEach((reRender) => reRender());
      return this;
    },

    joinReRender(reRender) {
      if (this.data.reRenderFns.includes(reRender)) return;
      this.data.reRenderFns.push(reRender);
    },

    cancelReRender(reRender) {
      this.data.reRenderFns = this.data.reRenderFns.filter(
        (reRenderFn) => reRenderFn !== reRender
      );
    },
  };

  return Object.freeze(Object.create(prototype));
}

// ##################################
import { useState, useEffect } from "react";

export default function useGlobalState(globalState) {
  const initialState = globalState.get();
  const [state, set] = useState(initialState !== null ? initialState : {});
  const reRender = () => set({});

  useEffect(() => {
    globalState.joinReRender(reRender);
    return () => {
      globalState.cancelReRender(reRender);
    };
  }, [globalState]);

  function setState(newState) {
    globalState.set(newState);
  }

  return [state, setState];
}