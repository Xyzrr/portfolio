import styled, { css } from "styled-components";
import { redirect } from "next/dist/next-server/server/api-utils";

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

export const OuterWrapper = styled.div<{ before?: boolean; wide?: boolean }>`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 0 auto 16px;
  ${(props) =>
    props.before &&
    css`
      background: rgb(253, 50, 74);
      padding: 4px;
    `};

  width: min(100vw - 128px, 716px);
  @media (max-width: 768px) {
    width: min(100vw - 64px, 716px);
  }

  ${(props) =>
    props.wide &&
    css`
      width: min(100vw - 64px, 972px);
      @media (max-width: 768px) {
        width: min(100vw - 32px, 972px);
      }
    `}
`;

export const Wrapper = styled.div<{
  bordered?: boolean;
}>`
  display: flex;
  overflow: hidden;
  gap: 16px;
  align-items: center;
  flex-flow: row nowrap;

  img,
  video {
    max-width: 100%;
    display: block;
  }

  ${(props) =>
    props.bordered &&
    css`
      iframe,
      img,
      video {
        border: 1px solid #ddd;
        border-radius: 4px;
      }
    `}
`;

export const BeforeHeader = styled.div`
  color: white;
  font-weight: 600;
  margin-bottom: 2px;
  text-align: center;
`;
