import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AppWrapper } from "@/styles/app-wrapper";
import GlobalStyle from "@/styles/global-styles";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/services/graphql/apolloClient";
import { PageLayout } from "@/components/page-layout/page-layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Head>
          <title>PLNTY - Discover Your Perfect Plant Companion</title>
        </Head>
        <AppWrapper>
          <GlobalStyle />
          <QueryClientProvider client={queryClient}>
            <PageLayout>
              <Component {...pageProps} />
            </PageLayout>
          </QueryClientProvider>
        </AppWrapper>
      </ApolloProvider>
    </>
  );
}
