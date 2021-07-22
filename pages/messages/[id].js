import React from "react";
import { Post } from "../../components/Post";

const PageDetails = ({ getPost }) => {
  return (
    <article
      className="dark:border-gray-900 border-2 border-gray-100 p-4 m-2 mt-7 rounded-lg shadow-lg"
      key={getPost.id}
    >
      <Post post={getPost} />
    </article>
  );
};
/**
 * For server side process
 */
export const getServerSideProps = async (context) => {
  const getResult = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const getPost = await getResult.json();

  if (!getPost) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      getPost,
    },
  };

  /*       await new Promise((resolve) => {
        setTimeout(resolve, 200);
      });
 */
};

export default PageDetails;
