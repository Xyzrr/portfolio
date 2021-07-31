import styled, { css, createGlobalStyle } from "styled-components";

const ProjectStyles = createGlobalStyle`
  body {
    padding-bottom: 40vh;
  }

  blockquote {
    margin-left: auto;
    margin-right: auto;
    width: min(100vw - 128px, 716px);
    p {
      padding-left: 16px;
      border-left: 4px solid #eee;
      color: #888;
      &:not(:last-child) {
        padding-bottom: 16px;
        margin-bottom: 0;
      }
    }
  }

  code {
    font-family: Inconsolata;
    background: #f6f6f6;
    border: 1px solid #ddd;
  }

  pre {
    margin-left: auto;
    margin-right: auto;
    width: min(100vw - 128px, 716px);
    code {
      display: block;
      background: #f6f6f6;
      border: 1px solid #ddd;
      padding: 12px; 
      font-family: Inconsolata;
    }
  }

  h1,
  h2,
  h3,
  p,
  ul, 
  ol, 
  nav {
    margin-left: auto;
    margin-right: auto;
    width: min(100vw - 128px, 716px);
  }

  h1,
  h2,
  h3 {
    font-weight: 600;
    color: #111;
  }

  p, ul, ol {
    line-height: 30px;
    font-size: 17px;
    color: #333;
    margin-top: 0;
    margin-bottom: 20px;
  }

  li {
    margin-bottom: 10px;
  }

  nav {
    margin-top: 96px;
    line-height: 20px;
    font-size: 17px;
    display: flex;
    align-items: center;
    color: #999;
    a {
      font-weight: normal;
      text-decoration: none;
      color: #999;
      &:hover {
        color: #aaa;
      }
    }
  }

  h1 {
    font-size: 48px;
    margin-bottom: 16px;
    margin-top: 0;
  }

  h2 {
    font-size: 30px;
    margin-bottom: 14px;
    margin-top: 40px;
  }

  h3 {
    font-size: 17px;
    line-height: 30px;
    margin-bottom: 8px;
  }

  a {
    color: #111;
    font-weight: 600;
    text-decoration: underline;
    &:hover {
      color: #444;
    }
  }

  @media (max-width: 768px) {
    h1,
    h2,
    h3,
    p,
    ul, 
    ol, 
    nav {
      width: min(100vw - 64px, 716px);
    }
  }
`;

export default ProjectStyles;
