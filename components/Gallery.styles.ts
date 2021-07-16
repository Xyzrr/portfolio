import styled, { css } from "styled-components";

export const VideoEmbedContainer = styled.div`
  position: relative;
  width: 100%;
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

export const Wrapper = styled.div<{ bordered?: boolean; wide?: boolean }>`
  display: flex;
  margin: 0 auto 16px;
  overflow: hidden;
  gap: 8px;
  align-items: center;
  flex-flow: row nowrap;

  img,
  video {
    max-width: 100%;
    display: block;
  }

  width: min(100vw - 128px, 716px);
  @media (max-width: 768px) {
    width: min(100vw - 64px, 716px);
  }

  ${(props) =>
    props.bordered &&
    css`
      img,
      video {
        border: 1px solid #ddd;
        border-radius: 4px;
      }
    `}

  ${(props) =>
    props.wide &&
    css`
      width: min(100vw - 64px, 972px);
      @media (max-width: 768px) {
        width: min(100vw - 32px, 972px);
      }
    `}
`;
