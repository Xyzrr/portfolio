import styled from "styled-components";

export const Wrapper = styled.div`
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
