import React from "react";
import { TopNav } from "./TopNav";
import "bootstrap/dist/css/bootstrap.min.css";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="fullHeight">
        <TopNav />

        <main className="d-flex h-100 justify-content-center align-items-center flex-wrap">
          {children}
        </main>
      </div>

      <style jsx>{`
        .fullHeight {
          min-height: 100vh;
          height: 100vh;
        }
      `}</style>
    </>
  );
};
