import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Avatar from "../components/avatar"
import SEO from "../components/seo"

const Container = styled.div`
  display: flex;
  height: 90%;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  margin-top: -10%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 250px 550px;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "picture name"
    "picture intro";
`

const Picture = styled.div`
  grid-area: picture;
`

const Name = styled.div`
  grid-area: name;

  h1 {
    font-size: 5rem;
    color: #0480ff;
  }
`

const Intro = styled.div`
  grid-area: intro;
  font-size: 4.8rem;
  color: hsla(210.5, 100%, 12.4%, 0.8);
`

const IndexPage = () => (
  <Layout active="index">
    <SEO title="Home" />

    <Container>
      <Content>
        <Picture>
          <Avatar size={250} />
        </Picture>
        <Name>
          <h1>
            Ryan Macy{" "}
            <span role="img" aria-label="Victory Sign">
              ✌️
            </span>
          </h1>
        </Name>
        <Intro>
          Hi, I'm a developer{" "}
          <span role="img" aria-label="Keyboard">
            ⌨️
          </span>
          , and entrepreneur{" "}
          <span role="img" aria-label="Man Factory Worker">
            👨‍🏭
          </span>
          . I like to make stuff.
        </Intro>
      </Content>
    </Container>
  </Layout>
)

export default IndexPage
