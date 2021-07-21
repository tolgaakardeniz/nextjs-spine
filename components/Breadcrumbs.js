import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const convertBreadcrumb = (string) => {
  return string
    .replace(/-/g, " ")
    .replace(/oe/g, "ö")
    .replace(/ae/g, "ä")
    .replace(/ue/g, "ü")
    .capitalizeFirstLetter();
};

const Breadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.pathname.split("/");
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        path = path.replace("[", "").replace("]", "");
        if (typeof router.query[path] != "undefined") {
          path = router.query[path];

          return {
            breadcrumb: path,
            href: "/" + linkPath.slice(0, i).join("/") + "/" + path,
          };
        } else {
          return {
            breadcrumb: path,
            href: "/" + linkPath.slice(0, i + 1).join("/"),
          };
        }
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav
      className="p-2 border-b-2 dark:bg-gray-800 bg-white shadow-xl"
      aria-label="breadcrumbs"
    >
      <div className="flex items-center">
        <div>
          <Link href="/">
            <a className="dark:text-gray-600 dark:hover:text-indigo-400">
              Home
            </a>
          </Link>
        </div>
        {breadcrumbs[0].breadcrumb != ""
          ? breadcrumbs.map((breadcrumb, i) => {
              return (
                <div className="flex items-center" key={breadcrumb.href}>
                  <div className="dark:text-gray-600 px-3">{">"}</div>
                  <Link href={breadcrumb.href}>
                    <a className="dark:text-gray-600 dark:hover:text-indigo-400">
                      {convertBreadcrumb(breadcrumb.breadcrumb)}
                    </a>
                  </Link>
                </div>
              );
            })
          : ""}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
