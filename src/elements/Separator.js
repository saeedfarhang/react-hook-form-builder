import React from "react";
import Typography from "./Typography";

const Separator = ({ title, className }) => {
  return (
    <div className={`separator flex-center ${className}`}>
      <div className="sp"></div>
      <Typography
        variant={"p"}
        fontSize={"1.6rem"}
        width={"max-content"}
        color={"#ffffff"}
      >
        {title}
      </Typography>
      <div className="sp"></div>
    </div>
  );
};

export default Separator;
