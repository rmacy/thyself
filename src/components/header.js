import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 100%;
  font-size: 2.4rem;

  & > * {
    margin-right: 36px;
  }

  a {
    color: hsla(210.5, 100%, 12.4%, 0.5);
  }

  a:hover {
    color: hsla(210.5, 100%, 12.4%, 0.8);
    border-bottom: 2px solid #0480ff;
    margin-top: 2px;
  }
`

const Header = () => (
  <Container>
    <Link to="/uses">Uses</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/about">About</Link>
    <Link to="/">./~</Link>
  </Container>
)

export default Header
