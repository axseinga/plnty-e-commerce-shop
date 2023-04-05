import type { AppProps } from "next/app";
import Head from "next/head";
import { AppWrapper } from "@/styles/app-wrapper";
import GlobalStyle from "@/styles/global-styles";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/services/graphql/apolloClient";
import { PageLayout } from "@/components/page-layout/page-layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Head>
          <title>PLNTY</title>
        </Head>
        <AppWrapper>
          <GlobalStyle />
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </AppWrapper>
      </ApolloProvider>
    </>
  );
}
