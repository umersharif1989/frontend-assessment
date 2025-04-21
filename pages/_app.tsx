import React from "react";
import Head from "next/head";
import { NextComponentType, NextPageContext } from "next";
import "bootstrap/dist/css/bootstrap.min.css";

const App = ({
  Component,
}: {
  Component: NextComponentType<NextPageContext>;
}) => {
  return (
    <div>
      <Head>
        <title>Profile List!</title>
      </Head>
      <Component />
    </div>
  );
};

export default App;
