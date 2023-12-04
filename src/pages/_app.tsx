import PageTransitionAnimations from "@/components/extras/PageTransitionAnimations";
import Layout from "@/components/layouts/Layout";
import { Providers } from "@/store/Provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
NProgress.configure({ easing: "ease", speed: 2000 });
NProgress.configure({ showSpinner: true });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageTransitionAnimations>
      <Providers>
        <Layout title="Mazda Landing Page">
          <Component {...pageProps} />
        </Layout>
      </Providers>
    </PageTransitionAnimations>
  );
}
