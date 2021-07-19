import Head from "next/head";
/**
 * Get browser url information
 */
import { useRouter } from "next/router";
import { useEffect } from "react";

import { PostList } from "../components/PostList";

export default function Messages({ getPosts, getCount }) {
  /**
   * Get browser url information
   */
  const router = useRouter();

  useEffect(() => {
    console.log(window.location.origin, router);
  }, [router]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  } else {
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
}

Messages.getInitalProps = async (context) => {
  const { req, query, res, asPath, pathname } = context;
  if (req) {
    let host = req.headers.host; // will give you localhost:3000
  }
};

export const getStaticProps = async (context) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 700);
  });

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
