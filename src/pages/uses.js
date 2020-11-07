import React from "react";
import Container from "../components/container";
import Layout from "../components/homeLayout";
import SEO from "../components/seo";

const Uses = () => {
  return (
    <Layout showHomeAvatar>
      <SEO title="What I Use" />

      <Container>
        <div className="">
          <h1>What I use</h1>
        </div>
      </Container>
    </Layout>
  );
};

export default Uses;
