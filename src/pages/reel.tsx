import React from 'react';
import Head from "next/head";
import ReelsView from "@/views/ReelsView";

function Reel() {
    return (
        <>
            <Head>
                <title>Landing page</title>
            </Head>
            <ReelsView />
        </>
    );
}

export default Reel;