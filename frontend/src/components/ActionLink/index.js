import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const ActionLink = ({ to, children }) => (
  <Link to={to} className="action-link">
    {children}
  </Link>
);

export default ActionLink;
