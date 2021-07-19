import Head from "next/head";
/**
 * Get browser url information
 */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { PostList } from "../components/PostList";

export default function Messages() {
  /**
   * Get browser url information
   */
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      await new Promise((resolve) => {
        setTimeout(resolve, 1700);
      });

      const result = await fetch(
        window.location.origin +
          "/api/messages?limit=" +
          postsPerPage +
          "&start=" +
          (currentPage > 1 ? postsPerPage * currentPage : 0)
      )
        .then((result) => {
          if (result.ok) {
            return result.json();
          } else {
            return {
              errors: [result.status, result.statusText, result.url],
              errorCount: 1,
              status: false,
            };
          }
        })
        .catch((result) => {
          return {
            errors: [result.message],
            errorCount: 1,
            status: false,
          };
        });

      setPosts(result);
      setLoading(false);
    };

    fetchPosts();
  }, [router]);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  /*
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  */
  return (
    <div>
      <Head>
        <title>Messages</title>
        <meta name="description" content="Messages" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostList posts={posts} loading={loading} />

      <br />
      <br />
      <br />
    </div>
  );
}

Messages.getInitalProps = async (context) => {
  const { req, query, res, asPath, pathname } = context;
  if (req) {
    let host = req.headers.host; // will give you localhost:3000
  }
};

/**
 * For build time process
 */
/* export const getStaticProps = async (context) => {
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
}; */
