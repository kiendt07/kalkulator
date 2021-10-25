import React from "react";
import "./Wrapper.css";

const Wrapper = ({ children }: {children: React.ReactNode}) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;
