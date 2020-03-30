import React from "react";

import "./styles.css";

const PageContainer = ({ className, children }) => (
  <div className={`page-container ${className}`}>{children}</div>
);

export default PageContainer;
