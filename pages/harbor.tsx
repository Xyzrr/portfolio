import * as S from "../styles/project.styles";
import Head from "next/head";

export const HarborPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Harbor</title>
        <meta name="description" content="Product and Eng" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <S.Container>
          <S.Title>Harbor</S.Title>
          <p>
            I love having my coworkers around when I work. So when pandemic hit,
            I spent a lot of time on video chat. But traditional video chat gets
            uncomfortable with more than 5 people in a room because there's no
            way to naturally break into smaller conversations like in real life.{" "}
            <a href="https://www.harbor.chat/">Harbor</a> was my attempt to
            solve that. It's a desktop app that lives in your menu bar and
            allows you to exist in a virtual 2D space where you can roam around
            with up to 200 coworkers at once.
          </p>
          <img src="https://storage.googleapis.com/john-portfolio/harbor/preview.png" />
          <p>
            You can only see and hear people close to you. When someone is close
            to you, their video slides into the top-right of your screen like a
            notification. It's designed to be as small and low-effort as
            possible, naturally getting out of the way whenever nothing's going
            on.
          </p>
          <p>
            I spent over 3 months on Harbor, and received help from friends
            Carey Phelps, Axel Setyanto, and Brandon Wang. We built lots of
            features, notably interactive screen sharing, whispering, busy mode,
            and work app sharing. I applied to Y Combinator, got an interview
            and sort of almost got in:
          </p>
          <img
            style={{ width: 600 }}
            src="https://storage.googleapis.com/john-portfolio/harbor/email.png"
          />
          <p>
            They clearly saw potential, so all we needed to do was get a few
            users and we'd be in. Sounds promising, right? Unfortunately, that
            was the peak of the story.
          </p>
          <p>
            The longer I worked on Harbor, the more pessimistic I became about
            the project. Every day, new negative thoughts would appear in my
            mind and I would push them aside. Here's some of the thoughts I
            postponed:
          </p>
          <ul>
            <li>
              Post-pandemic, I want to actually be physically with my coworkers.
              Harbor can never truly replicate that. But as long as I'm working
              on Harbor, I'll be leading a remote team, because we have to be
              our own users. It'll be lonely.
            </li>
            <li>
              People like me who really like being around coworkers will return
              to their offices post-pandemic. Meaning that I'm not a
              representative user, so I lack user empathy.
            </li>
            <li>
              Most people who choose to work remotely don't want to spend more
              than a couple hours a week with their coworkers. Staying connected
              all day would be a chore that only their managers would want.
            </li>
            <li>
              Everyone and their dog is building a virtual office app. Even
              though nothing is quite like Harbor, I don't feel like a pioneer.
            </li>
            <li>
              Desktop apps are no fun to build. Inconsistencies between OS
              versions are abundant, and users don't instantly receive updates
              the way they do with web apps.
            </li>
            <li>
              Video chat apps are no fun to build. Audio is particularly painful
              to debug because you can't play music while testing it.
            </li>
            <li>
              Virtual office apps are no fun to build. It's often impractical to
              use the app while developing it. As a result, you don't really get
              to use your own app.
            </li>
          </ul>
          <p>
            As the YC re-interview date approached, I had honestly ask myself
            whether I'd be happy spending my next ~4 years building Harbor. I
            decided I wouldn't be. So I cancelled the re-interview and told my
            friends who helped me that I was giving up. I had never so directly
            let people down before. They were all extremely gracious about it; I
            was lucky.
          </p>
          <p>
            I don't regret taking a swing at Harbor. I lost a lot of money and
            the confidence of some spectators, but I learned a lot about what
            matters to me. That'll be useful for my next attempt.
          </p>
        </S.Container>
      </main>
    </>
  );
};

export default HarborPage;
