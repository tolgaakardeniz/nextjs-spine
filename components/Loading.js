import React from "react";
import Image from "next/image";

export const Loading = ({ isFixed }) => {
  return (
    <div
      className={
        (isFixed ? "z-50 fixed h-full w-full " : "") +
        "flex justify-center items-center dark:bg-gray-900 bg-white"
      }
    >
      <Image className="w-20 h-20" src="/loading.svg" alt="Loading" />
    </div>
  );
};
