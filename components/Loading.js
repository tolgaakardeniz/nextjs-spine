import React from "react";

export const Loading = () => {
  return (
    <div className="z-50 fixed h-full w-full flex justify-center items-center bg-white">
      <img className="w-20 h-20" src="/loading.svg" />
    </div>
  );
};
