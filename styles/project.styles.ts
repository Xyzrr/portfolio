import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 700px;
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

export const Link = styled.a`
  color: #007faf;
  &:hover {
    text-decoration: underline;
  }
`;
