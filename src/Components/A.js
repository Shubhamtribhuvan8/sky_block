 import B from "./B";
import { useState } from "react";
import mycontext from "./Mycontext";
function A(props) {
  const [state, setstate] = useState({
    title: "Masai"
  });
  return (
    <>
      <h1>A Componenet </h1>
      <button
        onClick={() => {
          setstate();
        }}
      >
        Modify data
      </button>
      <mycontext.Provider value={state}>
       <B/>
      </mycontext.Provider>
    </>
  );
}

export default A;
