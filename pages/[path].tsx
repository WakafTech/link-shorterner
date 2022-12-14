import { NextApiRequest, NextPage } from "next";
import Head from "next/head";
import { fetchDestination } from "../services/fetch-destination";

export async function getServerSideProps(request: NextApiRequest) {
    const shortPath = request.query.path as string;
    const destination = await fetchDestination(shortPath)
  
    if (destination) {
      return {
        redirect: {
          destination,
          permanent: false,
        },
      };
    }
  
    return {
      props: {},
    };
  }

  const PathPage: NextPage = () => {
    return (
      <div>
        <Head>
          <title>URL Shortener</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Requested link not found</h1>
      </div>
    );
  };
  
  export default PathPage;