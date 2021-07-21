import Head from "next/head";
import Image from "next/image";

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
    <>
      <Head>
        <title>Server error {statusCode}</title>
      </Head>

      {statusCode == 404 ? (
        <div className="flex-grow">
          <Image className="max-h-screen" src="/404.png" alt="404 Not Found" />
        </div>
      ) : (
        <div>{message}</div>
      )}
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
