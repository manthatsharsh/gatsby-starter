import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi!</h1>
    <p>Welcome to my Gatsby site.</p>
    <p>This is a test. I want to see how easy it is to deploy using Netlify and Github.</p>
    <p>Thanks for visiting. -Harsh</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
