import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { Link } from "gatsby"

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
    props.current &&
    `
  border-bottom: 2px solid #0480ff;
  margin-top: 2px 
  `}
`

const Header = ({ active = "" }) => (
  <Container>
    <A current={active === "uses"} to="/uses">
      Uses
    </A>
    <A current={active === "blog"} to="/blog">
      Blog
    </A>
    <A current={active === "about"} to="/about">
      About
    </A>
    <A current={active === "index"} to="/">
      ./~
    </A>
  </Container>
)

Header.propTypes = {
  active: PropTypes.string,
}

export default Header
