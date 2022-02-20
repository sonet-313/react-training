import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return (
    <React.Fragment>
      <p style={contentStyle}>{children}</p>
    </React.Fragment>
  );
};

export default ColorfulMessage;
