/**
 * Get Router
 */
import { Router } from "next/router";

/**
 * useState
 */
import { useState, useEffect } from "react";
import { Loading } from "../components/Loading";

import { Layout } from "../components/Layout";

import "../styles/globals.css";
import "tailwindcss/tailwind.css";

Object.defineProperty(String.prototype, "capitalizeFirstLetter", {
  value: function capitalizeFirstLetter() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  writable: true,
  configurable: true,
});

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (e) => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (e) => {
    setLoading(false);
  });

  /*   useEffect(() => {
    document.querySelector("body").classList.add("home");
  }); */

  return (
    <>
      {loading && <Loading isFixed={true} />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
