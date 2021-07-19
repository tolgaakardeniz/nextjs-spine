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
  //.toUpperCase();
};

const Breadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.pathname.split("/");
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav
      className="p-2 border-b-2 bg-gray-300 shadow-xl"
      aria-label="breadcrumbs"
    >
      <div className="flex items-center">
        <div>
          <Link href="/">
            <a href="/">Home</a>
          </Link>
        </div>
        {breadcrumbs[0].breadcrumb != ""
          ? breadcrumbs.map((breadcrumb, i) => {
              return (
                <div className="flex items-center" key={breadcrumb.href}>
                  <div className="px-3">{">"}</div>
                  <Link href={breadcrumb.href}>
                    <a>{convertBreadcrumb(breadcrumb.breadcrumb)}</a>
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
