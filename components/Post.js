import Link from "next/link";
import React from "react";

export const Post = ({ getPost }) => {
  return (
    <>
      <h1 className="font-bold text-4xl text-gray-900 pb-3 block">
        {getPost.title}
      </h1>
      <hr />
      <p className="py-9">{getPost.body}</p>
      <div className="text-right">
        <Link href={"/messages/" + getPost.id}>
          <a className="bg-indigo-700 text-white hover:bg-indigo-900 rounded-full p-3 px-8 mb-1 inline-block shadow-lg">
            Read More
          </a>
        </Link>
      </div>
    </>
  );
};
