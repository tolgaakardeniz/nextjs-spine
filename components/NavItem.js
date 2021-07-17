import React from "react";
import Link from "next/link";

export const NavItem = ({ href, active, onItemClick, children }) => {
  const isActive = active === href;
  return (
    <div className="mr-2">
      <Link href={href}>
        <a
          onClick={() => onItemClick(href)}
          className={`inline-block p-3 rounded ${
            isActive ? "bg-indigo-400 text-white" : "text-indigo-400"
          } hover:text-white hover:bg-indigo-400`}
        >
          {children}
        </a>
      </Link>
    </div>
  );
};
