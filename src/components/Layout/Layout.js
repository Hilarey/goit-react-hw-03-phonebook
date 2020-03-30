import React from "react";
import withTheme from "../../HOC/withTheme";
import "./Layout.css";

const Layout = ({ children, night }) => (
  <div className={night ? "NightMode" : "DayMode"}>
    <div className="Layout">{children}</div>
  </div>
);

export default withTheme(Layout);
