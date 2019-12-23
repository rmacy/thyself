import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import "destyle.css"
import "../fonts/fonts.css"

import Header from "./header"

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

const globalStyles = css`
  html {
    font-size: 62.5%;
    background: hsla(210.5, 100%, 12.4%, 0.02);
  }

  body {
    font-family: Metropolis, Arial;
  }
`

const Layout = ({ children }) => (
  <>
    <Global styles={globalStyles} />
    <LayoutContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>

      <MainContainer>{children}</MainContainer>
    </LayoutContainer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
