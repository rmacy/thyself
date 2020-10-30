import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

// const Container = styled.div`
//   width: ${props => props.size}px;
//   height: ${props => props.size}px;
//   border-radius: 50%;
//   overflow: hidden;
//   box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
// `

const Avatar = ({ size }) => {
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
  `)

  return (
    <div
      className={`rounded-full shadow-lg h-${size} w-${size} overflow-hidden`}
    >
      <Img
        fadeIn
        objectFit="cover"
        objectPosition="center"
        className={`w-${size} h-${size}`}
        alt="Ryan Macy"
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </div>
  )
}

export default Avatar
