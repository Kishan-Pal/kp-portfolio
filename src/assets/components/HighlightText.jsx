import React from "react";

const HighlightText = ({ children }) => {
  return (
    <span
      className="whitespace-nowrap text-[var(--imp-text-color)] text-shadow-lg "
      style={{ textShadow: "0px 0px 3px rgba(95, 77, 255, 0)" }}
    >
      {children}
    </span>
  );
};

export default HighlightText;
