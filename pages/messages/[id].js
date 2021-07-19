import React from "react";

const PageDetails = ({ getPost }) => {
  return (
    <div className="text-center">
      <h1>{getPost.title}</h1>
      <p>{getPost.body}</p>
    </div>
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
};

export default PageDetails;
