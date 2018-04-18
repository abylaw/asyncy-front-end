import React from 'react'
import GatsbyLink from 'gatsby-link'

const Link = ({ to, children }) => (
  to.startsWith('http') ?
    <a href={to}>{children}</a> :
    <GatsbyLink to={to}>{children}</GatsbyLink>
)

export default Link
