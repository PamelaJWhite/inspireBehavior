import * as React from "react"
import { Link } from "gatsby"
import Layout from "./layout.js"

//children gets us anything within Layout(?)
//pageContext specific to Gatsby
export default function PostLayout({ children, pageContext }){

  // pageContext: When you create a page in gatsby... node API called Create Page where you pass in a path, file name, and page context, which is just an object. In the case of MDX, whatever you put in the frontmatter gets put into the page context"
  const { title, description } = pageContext.frontmatter

  return(
    <Layout title = {title} description={description}>
      {/* add our link back */}
      {/* left arrow HTML entity: &larr; */}
      {/* this goes back to the landing page /, as if the blog was initiated on the main landing page */}
      <Link to="/">&larr; back</Link>
    {children}
    </Layout>
  )
  
}