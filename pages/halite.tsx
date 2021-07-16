import * as S from "../styles/project.styles";
import Head from "next/head";

export const HalitePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Halite III Bot</title>
        <meta name="description" content="Product and Eng" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <S.Container>
          <S.Title>Halite III Bot</S.Title>
          <p>
            Two Sigma annually runs a very fun AI programming competition called{" "}
            <a href="https://halite.io/">Halite</a>. I competed in the third
            edition and ranked{" "}
            <a href="https://2018.halite.io/user/?user_id=8432">#29</a> of ~4000
            players, putting me at #3 among US university students.
          </p>
          <p>
            I didn't use any machine learning for my bot. Instead I used a
            sloppy heuristic to estimate the value of being in a cell, and made
            each ship greedily move to the highest value adjacent cell each
            turn. The 2 seconds per turn limit turned out to be an obstacle to
            my approach due to the sheer amount of data I was processing each
            turn. So my secret sauce was using{" "}
            <a href="https://numpy.org/">numpy</a> to process 2D data faster.
          </p>
          <p>I'll upload my code here once I find it.</p>
        </S.Container>
      </main>
    </>
  );
};

export default HalitePage;
