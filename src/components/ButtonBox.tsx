import React from "react";
import "./ButtonBox.css";

const ButtonBox = ({ children }: { children: React.ReactNode }) => {
  return <div className="buttonBox">{children}</div>;
};

export default ButtonBox;
