import React from "react";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  
  return (
    <div css={{
      background: 'white',
      color: 'black',
      width: '100vw',
      marginLeft: '-25px',
      padding: '50px 25px',
    }}>
      <div style={{
        maxWidth: '650px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '3em',
        }}>
          <h1>{frontmatter.title}</h1>
        </div>
        <div css={{
          '& p': {
            'marginBottom': '3.2em',
          }
        }} dangerouslySetInnerHTML={{__html: html}}></div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query ContentByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;