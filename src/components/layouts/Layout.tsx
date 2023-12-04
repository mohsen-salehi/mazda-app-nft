import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

type Props = { children: React.ReactNode; title: string };
const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main className="container mx-auto overflow-hidden">{children}</main>
      <Footer />
    </>
  );
};

export default dynamic(Promise.resolve(Layout), { ssr: false });
