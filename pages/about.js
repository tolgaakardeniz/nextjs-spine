import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <div>About</div>
    </>
  );
}

export const getStaticProps = async (context) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 700);
  });

  return {
    props: {},
  };
};
