import * as S from "../styles/project.styles";
import Head from "next/head";

export const HarborPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Harbor</title>
        <meta name="description" content="Product and Eng" />
        <link rel="icon" href="/favicon.ico" />
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
          <S.Image
            wide
            src="https://storage.googleapis.com/john-portfolio/harbor/preview.png"
          />
          <p>
            For a full list of features, see the{" "}
            <a href="https://harbor.chat">marketing site</a>.
          </p>
          <h2>Hardest decisions</h2>
          <h3>Moving the map to the menu bar</h3>
          <p>
            In my initial prototype, the map view and the user tiles (the
            rectangles on the right containing camera feeds) were always in the
            same window.
          </p>
          <S.VideoWrapper>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/AEOU3Z9p8oM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </S.VideoWrapper>
          <p>
            This was simple and easy to understand. The problem was that most of
            the time, user tiles were much more important to see than the map.
            You don't need to see where everyone is located all the time.
            They're a background status, like available wifi connections. So I
            decided put the map view in the same location as the wifi status: in
            the menu bar.
          </p>
          <h3>Animated avatars → Profile pictures</h3>
          <S.ImageGallery>
            <div>
              <img src="https://storage.googleapis.com/john-portfolio/harbor/avatars.png"></img>
            </div>
            <div>
              <img src="https://storage.googleapis.com/john-portfolio/harbor/propics.png"></img>
            </div>
          </S.ImageGallery>
          <p>
            I had originally planned on using animated avatars to represent
            people, as seen on the left, because it opens up possibilities for
            body language. But when I decided to tuck the space inside the Tray,
            I realized that an avatar based design is too cluttered for the tiny
            window. Profile pictures, though more stilted and less flexible,
            convey identity much more efficiently.
          </p>
          <h3>Remote vs. Local</h3>
          <p>
            Electron's security practices are confusing because they're
            constantly evolving. Slack wrote a{" "}
            <a href="https://slack.engineering/interops-labyrinth-sharing-code-between-web-electron-apps/">
              very helpful article
            </a>{" "}
            explaining why your Electron app shouldn't just be a browser into
            your web app (Path 1: The Shortcut and Path 2: Remote Isolation).
            However, many startups are doing exactly that because it's much
            easier and faster than the alternatives. Moreover, many Electron
            features like{" "}
            <a href="https://www.electronjs.org/docs/tutorial/context-isolation">
              context isolation
            </a>{" "}
            are being added that make Path 2 easier to pull off. I opted to go
            the recommended way (Path 3: Local Resources) but it's still unclear
            whether it was worth the cost in development velocity.
          </p>
          <h2>Key Learnings</h2>
          <h3>
            When using Electron, you can almost always use the native
            capabilities you need, but they may be finicky and undocumented.
          </h3>
          <p>
            For Harbor, we used multi-window management, screen recording,
            notifications, the Tray API, the powerMonitor API, process forking,
            AppleScript, and more. Virtually every feature required diving deep
            into Github issues and other forums to unravel obscure behaviors. I
            would have greatly benefitted from having a friend with deep
            Electron experience, so if you need me to be that friend now, let me
            know.
          </p>
          <h3>
            Desktop app design has an important difference from web app design:
            you have complete control over the screen space.
          </h3>
          <p>
            Desktop apps can open multiple windows, control their sizes and
            positions, and even make them non-rectangular. Web apps, on the
            other hand, need to fill the browser, which is sized and positioned
            solely by the user.
          </p>
          <p>
            We made extensive use of this control in Harbor. The most obvious
            example is the way a user's video slides in from the right side of
            your screen when they get close to you.
          </p>
          <p>[gif]</p>
          <p>
            But window control affected our design of every part of the UI.
            Every page is only as large as it needs to be. For instance, the
            home page has more content than the auth page, so the window grows
            wider after you sign in.
          </p>
          <S.ImageGallery>
            <div>
              <img src="https://storage.googleapis.com/john-portfolio/harbor/auth.png"></img>
            </div>
            <div>
              <img src="https://storage.googleapis.com/john-portfolio/harbor/home.png"></img>
            </div>
          </S.ImageGallery>
        </S.Container>
      </main>
    </>
  );
};

export default HarborPage;
