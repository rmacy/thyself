import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

const Avatar = ({ size }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ryan.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Container size={size}>
      <div className="wrap">
        <Img
          alt="A Picture of Ryan Macy drinking coffee"
          fixed={data.placeholderImage.childImageSharp.fixed}
        />
      </div>
    </Container>
  )
}

export default Avatar
