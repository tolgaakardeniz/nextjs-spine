import React from "react";
import Links from "next/link";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";

export const TopNav = () => {
  return (
    <nav className="d-flex ">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};
