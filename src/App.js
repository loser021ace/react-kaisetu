import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColorfulMessage color="blue">Are you fine?</ColorfulMessage>
      <ColorfulMessage color="pink">I'm fine!</ColorfulMessage>
      <button onClick={onClickCountUp}>Button</button>
      <p>{num}</p>
      <button onClick={onClickSwitchShowFlag}>switch</button>
      {faceShowFlag && <p>(^q^)</p>}
    </>
  );
};

export default App;
