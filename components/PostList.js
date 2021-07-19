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
            className="border-2 border-gray-100 p-4 m-2 mt-7 rounded-lg shadow-lg"
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

export const getStaticProps = async (context) => {
  const result = await fetch("http://localhost:3000/api/messages?limit=6").then(
    (response) => response.json()
  );

  let getPosts = [];
  let getCount = 0;

  if (typeof result["status"] !== "undefined") {
    if (result["status"] == true) {
      getPosts = result.messages;
      getCount = result.totalCount;
    }
  }

  return {
    props: {
      getPosts,
      getCount,
    },
  };
};
