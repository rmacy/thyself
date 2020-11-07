import styled from "@emotion/styled";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Avatar from "../components/avatar";
import Container from "../components/container";
import Layout from "../components/homeLayout";
import SEO from "../components/seo";

const Content = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(1fr, min-content));
  grid-template-rows: repeat(auto-fit, minmax(1fr, min-content));
`;

const IndexPage = () => (
  <Layout active="index">
    <SEO title="Home" />

    <Container>
      <Content>
        <div className="flex justify-center items-center col-start-1 col-span-1 md:row-span-3 row-span-1">
          <Avatar size="32" className="lg:w-64 lg:h-64" />
        </div>
        <div className="text-center col-start-1 md:col-start-2 col-span-1 row-span-1">
          <h1 className="whitespace-no-wrap text-3xl lg:text-5xl font-medium tracking-wider">
            I'm Ryan Macy{" "}
            <span role="img" aria-label="Victory Sign">
              ✌️
            </span>
          </h1>
        </div>
        <div className="text-xl lg:text-3xl tracking-wide text-gray-700 text-center leading-relaxed col-start-1 md:col-start-2 col-span-1 row-span-1">
          A software developer{" "}
          <span role="img" aria-label="Keyboard">
            ⌨️
          </span>
          , and entrepreneur{" "}
          <span role="img" aria-label="Man Factory Worker">
            👨‍🏭
          </span>
          .<br /> I like to make things others find value in.
        </div>
        <div className="flex justify-center items-end text-xl lg:text-4xl text-gray-700 col-start-1 md:col-start-2 col-span-1 row-span-1">
          <a href="https://twitter.com/bitr0t_">
            <FontAwesomeIcon
              icon={faTwitter}
              className="mr-4 hover:text-indigo-600 cursor-pointer"
            />
          </a>
          <a href="https://github.com/rmacy">
            <FontAwesomeIcon
              icon={faGithub}
              className="mr-4 hover:text-indigo-600 cursor-pointer"
            />
          </a>
          <a href="https://www.linkedin.com/in/ryanmacy/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="mr-4 hover:text-indigo-600 cursor-pointer"
            />
          </a>
        </div>
      </Content>
    </Container>
  </Layout>
);

export default IndexPage;
