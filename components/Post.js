import Link from "next/link";
import React from "react";

export const Post = ({ getPost }) => {
  return (
    <div>
      <h1>{getPost.title}</h1>
      <p>{getPost.body}</p>
      <Link href={"/messages/" + getPost.id}>
        <a>{getPost.title}</a>
      </Link>
    </div>
  );
};
