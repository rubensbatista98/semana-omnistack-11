import React from "react";

import "./styles.css";

const SectionInfo = ({ children }) => (
  <section className="section-info">{children}</section>
);

export default React.memo(SectionInfo);
