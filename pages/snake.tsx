import * as S from "../styles/project.styles";
import Head from "next/head";

export const SnakePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Snake</title>
        <meta name="description" content="Product and Eng" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <S.Container>
          <S.Title>Reinforcement Learning Snake</S.Title>
          <p>
            I grew interested in reinforcement learning after reading DeepMind's{" "}
            <a href="https://www.cs.toronto.edu/~vmnih/docs/dqn.pdf">paper</a>{" "}
            on how they made a single agent that could learn to competently play
            6 different Atari games using raw video input. Their approach was
            simple but brilliant: they took the standard Q-learning algorithm
            and swapped its lookup table with a convolutional neural network.
            This allowed Q-learning to be applied to an infinite and continous
            state space.
          </p>
          <p>
            To cement my understanding of the algorithm, I applied it to the
            classic Snake game. Here's my{" "}
            <a href="https://github.com/Xyzrr/rl-snake">code</a>. I used Keras
            for the neural net and trained it in a{" "}
            <a href="https://github.com/Xyzrr/rl-snake/blob/master/gym_snake/envs/snake_env.py">
              custom OpenAI Gym environment
            </a>
            . And of course, I used{" "}
            <a href="https://wandb.ai/johnq/snake">Weights & Biases</a> to track
            my experiments.
          </p>
          <p>
            I wasn't able to perfectly solve Snake like I had hoped, but it's
            still pretty cool to watch. I'm now running the trained model in the
            background of my <a href="https://johnqian.com">home page</a>. It's
            actually interactive; you can temporarily override the AI's choices
            using the arrow keys.
          </p>
        </S.Container>
      </main>
    </>
  );
};

export default SnakePage;
