import React from "react";

import "../style/components/button.scss";

function Button(props) {
  const { variant, onClick, children, style, imgLeft, imgRight, type, ...rest } = props;

  const defaultStyle = {
    cursor: "pointer",
    whiteSpace: "nowrap",
    ...style,
  };

  return (
    <div
      className={`${variant}_btn ${variant}_slideEffect`}
      onClick={onClick}
      type={type}
      style={defaultStyle}
      {...rest}
    >
      {children} {imgLeft && imgLeft}
    </div>
  );
}

export default Button;
