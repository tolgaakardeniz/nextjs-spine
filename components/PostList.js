import React from "react";
import { Post } from "./Post";

export const PostList = ({ getPosts }) => {
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

  console.log(typeof getPosts === "object");
  console.log(typeof checkedPosts.length);

  return (
    <div>
      {checkedPosts.length > 0
        ? checkedPosts.map((getPost) => (
            <div key={getPost.id}>
              <Post getPost={getPost} />
            </div>
          ))
        : "Error, cant load posts object..."}
    </div>
  );
};
