import React from "react";
import { Post } from "./Post";

export const PostList = ({ getPosts, getCount }) => {
  let checkedPosts = [];

  try {
    if (
      typeof getPosts === "object" &&
      typeof checkedPosts.length === "number"
    ) {
      checkedPosts = getPosts;
    }
  } catch (e) {
    console.log(e);
  }

  return (
    <>
      {checkedPosts.length > 0 ? (
        checkedPosts.map((getPost) => (
          <article
            className="border-2 border-gray-100 p-4 m-2 mt-4 rounded-lg shadow-lg"
            key={getPost.id}
          >
            <Post getPost={getPost} />
          </article>
        ))
      ) : (
        <div>Error, cant load posts object...</div>
      )}
    </>
  );
};
