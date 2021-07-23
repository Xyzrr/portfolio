import * as S from "./Gallery.styles";
import { CSSProperties } from "styled-components";

interface GalleryProps {
  className?: string;
  style?: CSSProperties;
  sources: string[];
  bordered?: boolean;
  before?: boolean;
  wide?: boolean;
}

const Gallery: React.FC<GalleryProps> = ({
  className,
  style,
  sources,
  bordered,
  before,
  wide,
}) => {
  return (
    <S.OuterWrapper
      before={before}
      wide={wide}
      className={className}
      style={style}
    >
      {before && <S.BeforeHeader>BEFORE</S.BeforeHeader>}
      <S.Wrapper bordered={bordered}>
        {sources.map((source, i) => {
          if (source.includes("figma.com")) {
            return (
              <S.VideoEmbedContainer key={i}>
                <iframe
                  height="450"
                  width="800"
                  src={`https://www.figma.com/embed?embed_host=astra&url=${source}`}
                  frameBorder="0"
                  allowFullScreen
                />
              </S.VideoEmbedContainer>
            );
          }

          if (source.includes("youtu.be")) {
            return (
              <S.VideoEmbedContainer key={i}>
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${source
                    .split("/")
                    .pop()}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </S.VideoEmbedContainer>
            );
          }

          if (source.endsWith(".mov") || source.endsWith(".mp4")) {
            return (
              <div key={i}>
                <video
                  key={i}
                  src={source}
                  autoPlay
                  muted
                  loop
                  playsInline
                ></video>
              </div>
            );
          }

          return (
            <div key={i}>
              <img src={source} />
            </div>
          );
        })}
      </S.Wrapper>
    </S.OuterWrapper>
  );
};

export default Gallery;
