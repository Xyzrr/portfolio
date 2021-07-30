import styled from "styled-components";

export const Group = styled.div`
  display: flex;
  width: min(100vw - 128px, 716px);
  margin: 0 auto 24px;
  gap: 12px;

  @media (max-width: 768px) {
    width: min(100vw - 64px, 716px);
  }
`;

export const Wrapper = styled.a`
  display: flex;
  text-decoration: none;
  gap: 8px;
  align-items: center;
  padding: 8px 16px;
  background: #f2f2f2;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 4px;
  font-size: 14px;
  color: black;
  cursor: pointer;
  .material-icons {
    font-size: 18px;
  }
  &:hover {
    text-decoration: none;
    background: #eee;
  }
`;
