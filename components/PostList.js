import React from "react";
import { Post } from "./Post";
import { Loading } from "./Loading";

export const PostList = ({ posts, loading }) => {
  if (loading) {
    return <Loading isFixed={false} />;
  }

  if (typeof posts["status"] === "boolean") {
    if (posts["status"] == true) {
      return (
        <>
          {posts["items"].map((post) => (
            <article
              className="dark:border-gray-900 border-2 border-gray-100 p-4 m-2 mt-7 rounded-lg shadow-lg"
              key={post.id}
            >
              <Post post={post} readMore={true} />
            </article>
          ))}
        </>
      );
    } else {
      return (
        <>
          {posts["errors"].map((e, x) => (
            <div key={x} className="text-center">
              {e}
            </div>
          ))}
        </>
      );
    }
  } else {
    return "";
  }

  /*   return (
    <div>
      {typeof posts["status"] === "boolean" ? (
        posts["status"] ? (
          posts["items"].map((post) => (
            <article
              className="border-2 border-gray-100 p-4 m-2 mt-7 rounded-lg shadow-lg"
              key={post.id}
            >
              <Post post={post} />
            </article>
          ))
        ) : (
          <div key={1}>
            {posts["errors"].map((e) => (
              <div className="text-center">{e}</div>
            ))}
          </div>
        )
      ) : (
        ""
      )}
    </div>
  ); */
};
