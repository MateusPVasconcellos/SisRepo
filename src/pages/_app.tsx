import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SearchContextProvider } from "../contexts/SearchContext";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SearchContextProvider>
      <Head>
        <title>SisRepo</title>
      </Head>
      <Component {...pageProps} />
    </SearchContextProvider>
  );
}
