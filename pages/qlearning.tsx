import * as S from "../styles/project.styles";
import Head from "next/head";

export const QLearningPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Q-learning Simulator</title>
        <meta name="description" content="Product and Eng" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <S.Container>
          <S.Title>Q-learning Simulator</S.Title>
          <p>
            When I first tried Q-learning, I was surprised how much time the
            agent needed to spend in the exploration phase before it was able to
            make meaningful progress. So I decided to make a very detailed{" "}
            <a href="https://johnqian.com/qlearning">simulation</a> of a
            Q-learning agent in a very simple environment to help build
            intuition on how the agent learns. The environment I chose is called{" "}
            <a href="https://gym.openai.com/envs/NChain-v0/">NChain</a>.
          </p>
          <p>
            I made the simulation at{" "}
            <a href="https://hacklodge.org/">Hack Lodge</a> intending to use it
            in an educational Youtube video, but never got around to making the
            video. If I ever circle back to it, I'll write a more detailed
            explanation of what's going on in †he simulation here.
          </p>
        </S.Container>
      </main>
    </>
  );
};

export default QLearningPage;
