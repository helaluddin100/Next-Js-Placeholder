import React, { useEffect, useState } from "react";
import AppLayout from "../component/Layout/Layout";

import Head from "next/head";
function Home() {
  return (
    <>
      <Head>
        <title>NFT Website Development Services |nft constructer</title>
        <link rel='icon' type='image' href='/favicon.png'></link>
      </Head>

      <h1>Hello World</h1>
    </>
  );
}
Home.layout = AppLayout;

export default Home;
