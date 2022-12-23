import React from "react";
import MyNavbar from "../commons/MyNavbar";

const CommonLayout = ({ children, isNavbar }) => {
  return (
    <div className="bg-light" style={{ minHeight: "100vh" }}>
      {isNavbar ? <MyNavbar /> : null}
      {children}
    </div>
  );
};

export default CommonLayout;
