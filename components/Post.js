import Link from "next/link";
import React from "react";

export const Post = ({ post, readMore }) => {
  return (
    <>
      <h1 className="font-bold text-4xl text-gray-600 pb-3 block">
        {post.title}
      </h1>
      <hr className="dark:border-gray-900" />
      <p className="py-9 dark:text-gray-500">{post.body}</p>
      {readMore ? (
        <div className="text-right">
          <Link href={"/messages/" + post.id}>
            <a className="dark:bg-gray-900 dark:text-gray-700 dark:hover:bg-gray-600 dark:hover:text-gray-400 bg-green-600 text-white hover:bg-green-700 rounded-full p-3 px-8 mb-1 inline-block shadow-lg">
              Read More
            </a>
          </Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
