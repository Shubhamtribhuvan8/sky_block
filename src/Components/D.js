import { useContext } from "react";
import mycontext from "./Mycontext";
function D() {
  const data = useContext(mycontext);
  return (
    <>
      <h1>D Componenet </h1>
      <p>A component Data:{data.title} </p>
    </>
  );
}

export default D;
