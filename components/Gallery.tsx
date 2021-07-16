import * as S from "./Gallery.styles";

interface GalleryProps {
  sources: string[];
  bordered?: boolean;
  wide?: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ sources, bordered, wide }) => {
  return (
    <S.Wrapper bordered={bordered} wide={wide}>
      {sources.map((source) => {
        if (source.includes("youtu.be")) {
          return (
            <S.VideoEmbedContainer>
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${source.split("/").pop()}`}
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
            <div>
              <video src={source} autoPlay muted loop></video>
            </div>
          );
        }

        return (
          <div>
            <img src={source} />
          </div>
        );
      })}
    </S.Wrapper>
  );
};

export default Gallery;
