import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Avatar from "../avatar";
import { HeaderLink, HeaderLinkMenu } from "../header";
import "./index.css";

const Layout = ({ showHomeAvatar = false, children }) => (
  <>
    <nav className="bg-indigo-500 shadow-lg flex flex-col justify-start items-center h-64">
      <div
        className={`flex ${
          showHomeAvatar ? "justify-between p-4" : "justify-center mt-12"
        } w-full`}
      >
        {showHomeAvatar && (
          <div className="bg-white mr-4 rounded-full p-px">
            <Link to="/">
              <Avatar size={12} />
            </Link>
          </div>
        )}

        <HeaderLinkMenu>
          <HeaderLink name="Blog" uri="/blog" />
          <HeaderLink name="About" uri="/about" />
          <HeaderLink name="Uses" uri="/uses" />
        </HeaderLinkMenu>
      </div>
    </nav>
    <main>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.string,
};

export default Layout;
