import React from "react";

const Button = ({ onClick, children, className }) => {
  return (
    <div onClick={onClick} id="button-p" className={`flex-center ${className}`}>
      <p>{children}</p>
    </div>
  );
};

export default Button;
