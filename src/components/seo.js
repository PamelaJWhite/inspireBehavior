import * as React from "react"
import { Helmet } from "react-helmet"
import {useStaticQuery, graphql } from "gatsby"

export function Seo(props) {
  const data = useStaticQuery(graphql`
    query GetSiteMetadata {
      site{
        siteMetadata {
          title
          description  
          image 
          siteUrl 
        }
      }
    }
  `);
  const defaults = data?.site?.siteMetadata;

  const title = props.title || defaults.title;
  const description = props.description || defaults.description;
  const image = new URL(props.image || defaults.image, defaults.siteUrl)
  const url = new URL(props.path || '/', defaults.siteUrl )

  return (
    //Helmet is like a head  tage, but it's got its own API
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url}/>
      {/* this is optional, so we don't put up a broken image (like mine is) */}
      {image && <meta name="image" content={image}/>}

      {/* for facebook */}
      <meta property="og:url" content={url}/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      {image && <meta name="og:image" content={image}/>}

      {/* for Twitter */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>
      {image && <meta name="twitter:image" content={image}/>}


    </Helmet>
  )}