import * as S from "./Placeholder.styles";

export interface PlaceholderProps {
  className?: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ className, children }) => {
  return (
    <S.Wrapper className={className}>
      <span className="material-icons">construction</span>
      {children}
    </S.Wrapper>
  );
};

export default Placeholder;
