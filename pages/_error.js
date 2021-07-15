import Head from "next/head";

import BootstrapStyles from "bootstrap/dist/css/bootstrap.min.css";
import HomeStyles from "../styles/Home.module.css";

function Error({ statusCode }) {
  var message;

  switch (statusCode) {
    case 404:
      message = `Your url is not found on this server...`;
      break;

    default:
      message = `other error from server to error code {statusCode}`;
      break;
  }

  return (
    <div className={HomeStyles.container}>
      <Head>
        <title>Server error {statusCode}</title>
      </Head>

      {message}
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
