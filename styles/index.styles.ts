import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
`;

export const Intro = styled.div`
  margin-bottom: 48px;
`;

export const IntroContent = styled.div`
  margin: 0 auto;
  padding: 64px 32px 0;
`;

export const Title = styled.h1`
  font-weight: 300;
  font-size: 28px;
  margin: 0 auto 16px;
`;

export const Description = styled.div`
  color: #555;
  margin: 0 auto;
`;

export const Divider = styled.div`
  margin-top: 28px;
  border-bottom: 1px solid #e6e6e6;
`;

export const Projects = styled.div`
  padding: 0 32px;
`;
export const ProjectsRow = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  margin-bottom: 48px;
  align-items: flex-end;
`;

export const ProjectImage = styled.div`
  background: #f2f2f2;
  overflow: hidden;
  height: fit-content;
  & > div,
  video {
    display: block !important;
  }
  video {
    width: 100%;
  }
`;

export const ProjectText = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  gap: 2px;
  flex-direction: column;
`;

export const ProjectTitle = styled.h2`
  font-weight: 400;
  color: #444;
  margin: 0;
  font-size: 16px;
`;

export const ProjectDate = styled.span`
  color: #aaa;
  font-size: 16px;
  flex-shrink: 0;
`;

export const Project = styled.a<{ size: number; changeOrder?: boolean }>`
  width: calc(25% - 24px);
  height: fit-content;
  transition: filter 0.15s;

  ${(props) =>
    props.size === 2 &&
    css`
      width: calc(50% - 16px);
    `}

  @media (max-width: 768px) {
    width: calc(50% - 16px);
    ${(props) =>
      props.size === 2 &&
      css`
        width: 100%;
      `}
    ${(props) =>
      props.changeOrder &&
      css`
        order: 1;
      `}
  }

  &:hover {
    cursor: pointer;
    filter: brightness(1.1);
  }
`;
