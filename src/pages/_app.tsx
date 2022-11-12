import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SearchContextProvider } from "../contexts/SearchContext";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SearchContextProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SisRepo</title>
      </Head>
      <Component {...pageProps} />
    </SearchContextProvider>
  );
}
