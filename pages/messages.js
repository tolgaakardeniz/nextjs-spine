import Head from "next/head";
/**
 * Get browser url information
 */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import { PostList } from "../components/PostList";

export default function Messages() {
  /**
   * Get browser url information
   */
  const router = useRouter();
  /*   var page = 0; */

  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(page);
  const [postsPerPage] = useState(2);

  var currentTimeout;

  useEffect(() => {
    var _page = parseInt(router.query["page"]);
    if (typeof router.query["page"] != "undefined") {
      setPage(_page);
    }

    if (_page > 0) {
      if (currentPage < 0) {
        setCurrentPage(1);
      } else {
        setCurrentPage(_page > 0 ? _page - 1 : 0);
      }
    }

    const fetchPosts = async () => {
      setLoading(true);
      await new Promise((resolve) => {
        setTimeout(resolve, 200);
      });

      const result = await fetch(
        window.location.origin +
          "/api/messages?limit=" +
          postsPerPage +
          "&start=" +
          (currentPage >= 1 ? postsPerPage * currentPage : 0)
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
  }, [router, currentPage, postsPerPage]);

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

      {!loading && posts["totalCount"] > 10 && (
        <>
          <br />
          <div className="flex justify-center items-center">
            <ReactPaginate
              containerClassName="flex justify-center items-center"
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={posts["totalCount"] / postsPerPage}
              breakLinkClassName="m-2 p-2 px-4 bg-green-600 text-white rounded-full inline-block text-center dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-gray-400 hover:bg-green-700"
              pageLinkClassName="m-2 p-2 px-4 bg-green-600 text-white rounded-full inline-block text-center dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-gray-400 hover:bg-green-700"
              previousClassName="m-2 p-2 px-5 bg-green-600 text-white rounded-full inline-block text-center dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-gray-400 hover:bg-green-700"
              nextClassName="m-2 p-2 px-5 bg-green-600 text-white rounded-full inline-block text-center dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-gray-400 hover:bg-green-700"
              activeLinkClassName="dark:bg-pink-900 bg-green-900"
              onPageChange={handlePageClick}
              forcePage={currentPage}
            />
          </div>

          <br />
          <br />
          <br />
        </>
      )}
    </div>
  );

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);

    router.push(
      router.pathname + "/",
      selectedPage >= 1
        ? router.pathname + "/?page=" + (selectedPage + 1)
        : router.pathname + "/",
      { shallow: true }
    );
  }
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
