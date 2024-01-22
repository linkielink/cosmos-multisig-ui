import NextHead from "next/head";
import { string } from "prop-types";

const defaultDescription = "The Multisig of the IBC Gangsters Inscription DAO";
const defaultOGURL = "";

interface Props {
  title?: string;
  description?: string;
  url?: string;
}

const Head = (props: Props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ""}</title>
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ""} />
    <meta property="og:description" content={props.description || defaultDescription} />
    <meta property="og:image" content="https://multisig.ibcgangsters.io/assets/banner.jpeg" />
    <meta property="og:url" content="https://multisig.ibcgangsters.io" />
    <meta property="og:site_name" content="IBC Gangsters Multisig" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={props.title || ""} />
    <meta name="twitter:description" content={props.description || defaultDescription} />
    <meta name="twitter:image" content="https://multisig.ibcgangsters.io/assets/banner.jpeg" />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Head;
