import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";

const Avatar = ({ size, className = "" }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ryan_alaska.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div
      className={`${className} rounded-full shadow-lg h-${size} w-${size} overflow-hidden`}
    >
      <Img
        fadeIn
        objectFit="cover"
        objectPosition="center"
        className="w-full h-full"
        alt="Ryan Macy"
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </div>
  );
};

export default Avatar;
