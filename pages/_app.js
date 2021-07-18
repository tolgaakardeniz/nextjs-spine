/**
 * Get Router
 */
import { Router } from "next/router";

/**
 * useState
 */
import { useState } from "react";
import { Loading } from "../components/Loading";

import { Layout } from "../components/Layout";

import "../styles/globals.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (e) => {
    console.log("routeChangeStart", e);
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (e) => {
    console.log("routeChangeComplete", e);
    setLoading(false);
  });

  return (
    <>
      {loading && <Loading />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
