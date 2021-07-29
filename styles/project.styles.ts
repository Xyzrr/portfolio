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
  ul, ol {
    margin-left: auto;
    margin-right: auto;
    width: min(100vw - 128px, 716px);
  }

  p {
    line-height: 24px;
  }

  h1,
  h2,
  h3 {
    font-weight: 300;
  }

  h1 {
    font-size: 48px;
    margin-bottom: 16px;
    margin-top: 64px;
  }

  h2 {
    font-size: 36px;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 4px;
  }

  p {
    margin-top: 0;
  }

  a {
    color: #666;
    text-decoration: underline;
    &:hover {
      color: black;
    }
  }

  li {
    margin-bottom: 12px;
  }

  @media (max-width: 768px) {
    h1,
    h2,
    h3,
    p,
    ul, ol {
      width: min(100vw - 64px, 716px);
    }
  }
`;

export default ProjectStyles;
