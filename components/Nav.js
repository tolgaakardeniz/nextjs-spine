import React from "react";

export const Nav = ({ children }) => {
  return (
    <nav className="w-full bg-gray-900 flex justify-center items-center p-3">
      {children}
    </nav>
  );
};
