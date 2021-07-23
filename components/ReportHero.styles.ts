import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: linear-gradient(to bottom, #db8888 0%, #b96767 100%);
  display: flex;
  overflow: hidden;
  padding: 64px 32px 0;
  margin-bottom: 32px;
  margin-top: 32px;
  height: 480px;
  position: relative;

  video {
    background: white;
    object-position: top;
    margin: 0 auto;
    object-fit: cover;
    width: min(100vw - 128px, 716px);
    height: auto;
    border: none;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    border-radius: 4px 4px 0 0;
    overflow: hidden;
    padding: 0;
  }
  @media (max-width: 768px) {
    height: 240px;
    padding-top: 48px;
    video {
      width: min(100vw - 64px, 716px);
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(185, 103, 103, 40%) 0px,
    transparent 60px
  );
`;
