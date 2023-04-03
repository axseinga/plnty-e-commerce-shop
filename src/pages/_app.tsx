import type { AppProps } from "next/app";
import Head from "next/head";
import { AppWrapper } from "@/styles/app-wrapper";
import GlobalStyle from "@/styles/global-styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PLNTY</title>
      </Head>
      <AppWrapper>
        <GlobalStyle />
        <Component {...pageProps} />
      </AppWrapper>
    </>
  );
}
