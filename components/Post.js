import Link from "next/link";
import React from "react";

export const Post = ({ post }) => {
  return (
    <>
      <h1 className="font-bold text-4xl text-gray-900 pb-3 block">
        {post.title}
      </h1>
      <hr />
      <p className="py-9">{post.body}</p>
      <div className="text-right">
        <Link href={"/messages/" + post.id}>
          <a className="bg-green-700 text-white hover:bg-indigo-500 rounded-full p-3 px-8 mb-1 inline-block shadow-lg">
            Read More
          </a>
        </Link>
      </div>
    </>
  );
};
