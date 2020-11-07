import styled from "@emotion/styled";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

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
`;

export const HeaderLink = ({ name, uri, children }) => (
  <A
    className="text-white text-xl font-semibold tracking-wide px-4 py-2 hover:bg-indigo-400 rounded transition duration-150"
    activeClassName="bg-indigo-400 bg-opacity-25"
    to={uri}
  >
    {children || name}
  </A>
);

export const HeaderLinkMenu = ({ children }) => (
  <ul className="items-center hidden md:flex">
    {React.Children.map(children, (child) => (
      <li className="mr-2">{child}</li>
    ))}
  </ul>
);

const Header = ({ children, center = false }) => (
  <div
    className={`bg-indigo-500 shadow-lg flex justify-${
      center ? "center" : "end"
    } items-center`}
  >
    <HeaderLinkMenu>
      <HeaderLink name="Blog" uri="/blog" />
      <HeaderLink name="About" uri="/blog" />
      <HeaderLink name="Uses" uri="/blog" />
    </HeaderLinkMenu>
    <div>{children}</div>
  </div>
);

Header.propTypes = {
  active: PropTypes.string,
};

export default Header;
