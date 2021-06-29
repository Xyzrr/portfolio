import styled, { css } from "styled-components";

export const Title = styled.h1`
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 64px;
  margin-top: 16px;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
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

export const Project = styled.div<{ size: number; changeOrder?: boolean }>`
  width: calc(25% - 24px);

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
`;

export const ProjectImage = styled.div``;

export const ProjectText = styled.div`
  margin-top: 6px;
  display: flex;
  justify-content: space-between;
`;

export const ProjectTitle = styled.h2`
  font-weight: 400;
  color: #333;
  margin: 0;
  font-size: 15px;
`;

export const ProjectDate = styled.span`
  color: #999;
  font-size: 15px;
`;
