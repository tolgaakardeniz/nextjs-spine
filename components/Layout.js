import React from "react";
import { TopNav } from "./TopNav";

export const Layout = ({ children }) => {
  return (
    <div className="h-screen">
      <div className="flex flex-col h-full">
        <TopNav />

        <main className="flex-grow flex flex-col flex-wrap justify-center items-center">
          {children}
        </main>
      </div>
    </div>

    /*
	<style jsx>{`
        .fullHeight {
          min-height: 100vh;
          height: 100vh;
        }
      `}</style>
*/
  );
};
