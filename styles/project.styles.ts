import styled, { css } from "styled-components";

export const Container = styled.div`
  padding-bottom: 40vh;

  h1,
  h2,
  h3,
  p,
  ul {
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
  }

  h2 {
    font-size: 36px;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 28px;
    margin-bottom: 4px;
  }

  p {
    margin-top: 0;
  }

  a {
    color: #007faf;
    &:hover {
      text-decoration: underline;
    }
  }

  img {
    display: block;
    margin-bottom: 16px;
  }

  li {
    margin-bottom: 12px;
  }

  video {
    display: block;
    border: 1px solid #ddd;
    margin-bottom: 16px;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    h1,
    h2,
    h3,
    p,
    ul,
    video {
      margin-left: auto;
      margin-right: auto;
      width: min(100vw - 64px, 716px);
    }
  }
`;

export const Title = styled.h1`
  font-weight: 300;
  font-size: 28px;
  margin-top: 64px;
`;

export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Gallery = styled.div`
  width: 100%;
  background: pink;
  display: flex;
  overflow: hidden;
  padding: 64px 32px 0;
  margin-bottom: 32px;
  margin-top: 32px;
  video {
    width: min(100vw - 128px, 716px);
    border: none;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    margin: 0 auto -128px;
    border-radius: 4px;
    overflow: hidden;
    padding: 0;
  }
`;

export const Image = styled.img<{ wide?: boolean; bordered?: boolean }>`
  margin-left: auto;
  margin-right: auto;
  width: min(100vw - 128px, 716px);
  ${(props) =>
    props.wide &&
    css`
      width: min(100vw - 64px, 972px);
      @media (max-width: 768px) {
        width: min(100vw - 32px, 972px);
      }
    `}
  ${(props) =>
    props.bordered &&
    css`
      border: 1px solid #ddd;
      border-radius: 4px;
    `}
`;

export const Video = styled.video<{ wide?: boolean; bordered?: boolean }>`
  margin-left: auto;
  margin-right: auto;
  width: min(100vw - 128px, 716px);
  ${(props) =>
    props.wide &&
    css`
      width: min(100vw - 64px, 972px);
      @media (max-width: 768px) {
        width: min(100vw - 32px, 972px);
      }
    `}
  ${(props) =>
    props.bordered &&
    css`
      border: 1px solid #ddd;
      border-radius: 4px;
    `}
`;
