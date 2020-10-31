import PropTypes from "prop-types"
import React from "react"
import { HeaderLink, HeaderLinkMenu } from "../header"
import "./index.css"

const Layout = ({ children, active }) => (
  <>
    <nav className="bg-indigo-500 shadow-lg flex flex-col justify-start items-center h-64">
      <div className="mt-12">
        <HeaderLinkMenu>
          <HeaderLink name="Blog" uri="/blog" />
          <HeaderLink name="About" uri="/about" />
          <HeaderLink name="Uses" uri="/uses" />
        </HeaderLinkMenu>
      </div>
    </nav>
    <main className="flex justify-center">{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.string,
}

export default Layout
