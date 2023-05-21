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

export const OuterWrapper = styled.div<{
  frame?: "before" | "prototype";
  wide?: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 0 auto 20px;
  ${(props) =>
    props.frame &&
    css`
      background: ${props.frame === "before" ? "rgb(253, 50, 74)" : "#256bdb"};
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
  gap: 20px;
  align-items: center;
  justify-content: center;
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
  text-transform: uppercase;
`;
