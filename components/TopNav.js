import React from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export const TopNav = () => {
  return (
    <nav className="d-flex flex-row w-100 p-2 bg-dark">
      <ul className="list-group list-group-flush list-group-horizontal align-items-center">
        <li className="list-group-item bg-transparent border-0">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="list-group-item bg-transparent border-0">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
