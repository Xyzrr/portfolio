import * as S from "../styles/project.styles";
import Head from "next/head";

export const HighSchoolPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pre-university projects</title>
        <meta name="description" content="Product and Eng" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <S.Container>
          <S.Title>Pre-university Projects</S.Title>
          <p>
            I had a lot of free time in middle and early high school. As a
            result, they were my most productive years in terms of side
            projects.
          </p>
          <p>
            This is a montage I used to apply for some colleges, a hackathon,
            and Google. It only worked on Google.
          </p>
          <S.VideoWrapper>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/TdtQmZXPxZ0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </S.VideoWrapper>
        </S.Container>
      </main>
    </>
  );
};

export default HighSchoolPage;
