import styled from "@emotion/styled";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Avatar from "../components/avatar";
import Layout from "../components/homeLayout";
import SEO from "../components/seo";

const Content = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 250px 550px;
  grid-template-rows: 60px 1fr 30px;
  grid-template-areas:
    "picture name"
    "picture intro"
    "picture social";
`;

const Picture = styled.div`
  grid-area: picture;
`;

const Name = styled.div`
  grid-area: name;
`;

const Intro = styled.div`
  grid-area: intro;
`;

const Social = styled.div`
  grid-area: social;
`;

const IndexPage = () => (
  <Layout active="index">
    <SEO title="About Me" />

    <div className="flex flex-col -mt-32">
      <Content className="bg-white rounded shadow-lg p-4">
        <Picture className="flex justify-center items-center">
          <Avatar size={64} />
        </Picture>
        <Name className="text-center">
          <h1 className="text-5xl font-medium tracking-wider">
            I'm Ryan Macy{" "}
            <span role="img" aria-label="Victory Sign">
              ✌️
            </span>
          </h1>
        </Name>
        <Intro className="text-3xl tracking-wide text-gray-700 text-center leading-relaxed">
          A software developer{" "}
          <span role="img" aria-label="Keyboard">
            ⌨️
          </span>
          , and entrepreneur{" "}
          <span role="img" aria-label="Man Factory Worker">
            👨‍🏭
          </span>
          . I like to make things others find value in.
        </Intro>
        <Social className="flex justify-center items-end text-4xl text-gray-700">
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
        </Social>
      </Content>
    </div>
  </Layout>
);

export default IndexPage;
