import Head from "next/head";
/**
 * Get browser url info
 */
import { useRouter } from "next/router";

import { PostList } from "../components/PostList";

export default function Messages({ getPosts, getCount }) {
  /**
   * Get browser url information
   */
  const router = useRouter();

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
  const result = await fetch(
    "http://localhost:3000/api/messages?limit=50&start=45"
  ).then((response) => response.json());

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
