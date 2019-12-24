import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: hsla(210.5, 100%, 12.4%, 0.8);
  height: 100%;

  .content {
    margin-top: -20%;
    text-align: center;
  }

  h1 {
    font-size: 6rem;
  }

  p {
    font-size: 2rem;
  }

  img {
    border: none;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    margin 20px 0;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Container>
      <div className="content">
        <h1>NOT FOUND</h1>
        <img
          alt="Two StarWars droids shaking their head puzzled"
          src="https://media.giphy.com/media/l3fZXTZdS6Ofi7U6A/giphy.gif"
        />
        <p>
          These are not the pages you're looking for... Everything seems to be
          in order...
        </p>
      </div>
    </Container>
  </Layout>
)

export default NotFoundPage
