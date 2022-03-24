import * as React from "react";
import { Link } from "gatsby"


import Layout from "../components/layout";

export default function AboutPage() {
  return (
    <Layout
      title="About this site"
      description="More info about us"
    >
      
        <h1>About Page</h1>
        <Link to="/">Home</Link>
      
    </Layout>
  )
}


