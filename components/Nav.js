import React from "react";

export const Nav = ({ children }) => {
  return (
    <nav className="w-full dark:bg-gray-900 bg-gray-100 flex justify-center items-center p-3">
      {children}
    </nav>
  );
};
