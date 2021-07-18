import * as S from "./ReportHero.styles";
import React from "react";

export interface ReportHeroProps {
  className?: string;
}

const ReportHero: React.FC<ReportHeroProps> = ({ className }) => {
  return (
    <S.Wrapper className={className}>
      <video
        src="https://storage.googleapis.com/john-portfolio/wysiwyg/long-demo.mov"
        autoPlay
        muted
        loop
        playsInline
      />
    </S.Wrapper>
  );
};

export default ReportHero;
