import "../styles/globals.ts";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/globals";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer autoClose={1500} position="top-center" />
    </>
  );
}

export default MyApp;
