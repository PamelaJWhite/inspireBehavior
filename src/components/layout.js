import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import { Seo } from "./seo"
import "../styles/global.css"
//import the header and content classes specifically from layout.module
import { header, content } from "../styles/layout.module.css"

export default function Layout ({
  //pass children as props; everything insdie the empty HTML tags <>  - fragment - will be passed as children
  children,
  //set all these as false, so that when we check for them, if they're not available, they show up as false instead of falsy
  title = false, 
  description = false, 
  image = false, 
  path = false 
}){
  //tag template literal
  const data = useStaticQuery(graphql`
    query GetSiteTitle{
      site{
        siteMetadata{
          title
          image
        }
      }
    }
  `);
//data?. optional chaining operator - if data is not set, just returns empty
  const meta = data?.site?.siteMetadata ?? {};
  return (
    <>
      {/* set up social sharing tags */}
      <Seo title = {title} image={image} desription={description} path={path}/>
      {/* set up common header  */}
      <header className={header}>
        <Link to="/">{meta.title}</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      {/* container for the content of each page */}
      <main className={content}>
        {children}
      </main>
    </>
  )

}