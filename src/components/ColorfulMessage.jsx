import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  return (
    <>
      <p style={{ color }}>{children}</p>
    </>
  );
};

export default ColorfulMessage;
