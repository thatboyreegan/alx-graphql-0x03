import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ErrorBoundary from '@/components/ErrorBoundary';
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
    </ApolloProvider>
  )
}