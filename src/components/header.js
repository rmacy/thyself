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
`

const A = styled(Link)`
  ${props =>
    props.active &&
    `
  border-bottom: 2px solid #0480ff;
  margin-top: 2px 
  `}
`

const Header = ({ active }) => (
  <Container>
    <A active={active === "uses"} to="/uses">
      Uses
    </A>
    <A active={active === "blog"} to="/blog">
      Blog
    </A>
    <A active={active === "about"} to="/about">
      About
    </A>
    <A active={active === "index"} to="/">
      ./~
    </A>
  </Container>
)

export default Header
