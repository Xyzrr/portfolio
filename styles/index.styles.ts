import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
`;

export const Intro = styled.div`
  margin-bottom: 48px;
`;

export const IntroContent = styled.div`
  margin: 0 32px;
  padding: 64px 0 32px;
  border-bottom: 1px solid #e6e6e6;
`;

export const Title = styled.h1`
  font-weight: 300;
  font-size: 28px;
  margin-top: 0;
`;

export const Description = styled.div`
  color: #555;
`;

export const Projects = styled.div`
  padding: 0 32px;
`;
export const ProjectsRow = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  margin-bottom: 48px;
`;

export const ProjectImage = styled.div`
  border-radius: 4px;
  overflow: hidden;
  & > div {
    display: block !important;
  }
`;

export const ProjectText = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
`;

export const ProjectTitle = styled.h2`
  font-weight: 400;
  color: #444;
  margin: 0;
  font-size: 15px;
`;

export const ProjectDate = styled.span`
  color: #999;
  font-size: 15px;
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
