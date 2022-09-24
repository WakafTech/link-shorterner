import { NextApiRequest, NextPage } from "next";
import Head from "next/head";
import { fetchDestinationUrl } from "../services/fetch-destination-url";

export async function getServerSideProps(request: NextApiRequest) {
    const shortPath = request.query.path as string;
    const destination = await fetchDestinationUrl(shortPath)
  
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