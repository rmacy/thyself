import styled from "@emotion/styled"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// const Container = styled.div`
//   display: flex;
//   flex-direction: row-reverse;
//   align-items: center;
//   height: 100%;
//   font-size: 2.4rem;

//   & > * {
//     margin-right: 36px;
//   }
// `

const A = styled(Link)`
  ${(props) =>
    props.current &&
    `
  border-bottom: 2px solid #0480ff;
  margin-top: 2px
  `}
`

export const HeaderLink = ({ name, uri }) => (
  <A className="text-white text-xl font-semibold tracking-wide" to={uri}>
    {name}
  </A>
)

export const HeaderLinkMenu = ({ children }) => (
  <ul className="items-center hidden md:flex">
    {React.Children.map(children, (child) => (
      <li className="mr-2 px-4 py-2 hover:bg-indigo-400 rounded transition duration-150">
        {child}
      </li>
    ))}
  </ul>
)

const Header = ({ children, active = "" }) => (
  <div className="bg-indigo-500 shadow-lg flex flex-col justify-center items-center">
    {/* <Avatar size={12} /> */}
    <HeaderLinkMenu>
      <HeaderLink name="Blog" uri="/blog" />
      <HeaderLink name="About" uri="/blog" />
      <HeaderLink name="Uses" uri="/blog" />
    </HeaderLinkMenu>
    {children}
    {/* <A current={active === "blog"} to="/blog">
      Blog
    </A>
    <A current={active === "about"} to="/about">
      About
    </A>
    <A current={active === "uses"} to="/uses">
      Uses
    </A>
    <A current={active === "index"} to="/">
      ~/
    </A> */}
  </div>
)

Header.propTypes = {
  active: PropTypes.string,
}

export default Header
