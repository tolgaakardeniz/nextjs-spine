import Head from "next/head";

import { PostList } from "../components/PostList";

export default function Messages({ getPosts, getCount }) {
  return (
    <div>
      <Head>
        <title>Messages</title>
        <meta name="description" content="Messages" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostList getPosts={getPosts} getCount={getCount} />

      <br />
      <br />
      <br />
    </div>
  );
}

export const getStaticProps = async () => {
  const getPosts = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));

  /*   const getPosts = await getResult.json(); */

  const getCount = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .catch((error) => console.log(error));

  /*   const getCount = await getCountResult.json(); */

  return {
    props: {
      getPosts,
      getCount,
    },
  };
};
