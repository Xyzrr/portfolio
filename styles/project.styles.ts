import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 32px 40vh;
  max-width: 760px;

  a {
    color: #007faf;
    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    margin: 0 auto;
    display: block;
  }

  li {
    margin-bottom: 12px;
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
