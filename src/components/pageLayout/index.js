import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"
import Header from "../header"
import "./index.css"

const LayoutContainer = styled.div`
  display: grid;
  grid-template:
    "header" 45px
    "main" 1fr;
  height: 100vh;
`

const MainContainer = styled.main`
  grid-area: "main";
`

const HeaderContainer = styled.nav`
  grid-area: "header";
`

const Layout = ({ children, active }) => (
  <>
    <LayoutContainer>
      <HeaderContainer>
        <Header active={active} />
      </HeaderContainer>

      <MainContainer>{children}</MainContainer>
    </LayoutContainer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.string,
}

export default Layout
