import * as S from "../styles/index.styles";

import Head from "next/head";
import Image from "next/image";
import moment from "moment";

const projects = [
  {
    name: "Spatial Video Chat",
    publishedAt: new Date("May 2021"),
    imageSrc: "/harbor.png",
    imageSize: { width: 984, height: 674 },
    href: "harbor",
    size: 2,
  },
  {
    name: "WYSIWYG Document Editor",
    publishedAt: new Date("March 2021"),
    imageSrc:
      "https://storage.googleapis.com/john-portfolio/wysiwyg/thumbnail.mp4",
    imageSize: { width: 984, height: 610 },
    href: "wysiwyg",
    size: 2,
  },
  {
    name: "Vega Platformer",
    publishedAt: new Date("November 2020"),
    imageSrc: "https://storage.googleapis.com/john-portfolio/platformer.mp4",
    imageSize: { width: 460, height: 277 },
    href: "platformer",
    size: 1,
  },
  {
    name: "Vega Visualization Editor",
    publishedAt: new Date("November 2020"),
    imageSrc: "/vega.png",
    imageSize: { width: 984, height: 646 },
    href: "vega",
    size: 2,
  },
  {
    name: "Multiplayer Tetris",
    publishedAt: new Date("February 2020"),
    imageSrc: "/tetris.png",
    imageSize: { width: 460, height: 262 },
    href: "tetris",
    size: 1,
  },
  {
    name: "Interactive Comments",
    publishedAt: new Date("June 2020"),
    imageSrc: "/comments.png",
    imageSize: { width: 984, height: 482 },
    href: "comments",
    size: 2,
  },
  {
    name: "Procedural Voxel World",
    publishedAt: new Date("December 2020"),
    imageSrc: "https://storage.googleapis.com/john-portfolio/voxels.mp4",
    imageSize: { width: 984, height: 553 },
    href: "voxels",
    size: 2,
  },
  {
    name: "Q-Learning Simulator",
    publishedAt: new Date("December 2019"),
    imageSrc: "https://storage.googleapis.com/john-portfolio/qlearning.mp4",
    imageSize: { width: 460, height: 338 },
    href: "qlearning",
    size: 1,
  },
  {
    name: "AI Snake",
    publishedAt: new Date("February 2019"),
    imageSrc: "/snake.png",
    imageSize: { width: 460, height: 431 },
    href: "snake",
    size: 1,
  },
  {
    name: "Halite III Bot",
    publishedAt: new Date("January 2019"),
    imageSrc: "https://storage.googleapis.com/john-portfolio/halite.mp4",
    imageSize: { width: 460, height: 460 },
    href: "halite",
    size: 1,
  },
  {
    name: "Pre-University",
    publishedAt: new Date("September 2017"),
    imageSrc: "/highschool.png",
    imageSize: { width: 460, height: 256 },
    href: "highschool",
    size: 1,
  },
];

const rows: any[][] = [];
let currentRow: any[] = [];
let currentRowSize = 0;

while (projects.length > 0) {
  for (let i = 0; i < projects.length; i++) {
    console.log("checking", i, projects[i].size);
    if (currentRowSize + projects[i].size <= 4) {
      console.log(currentRowSize);
      currentRowSize += projects[i].size;
      currentRow.push(...projects.splice(i, 1));
      break;
    }
  }
  if (currentRowSize === 4) {
    rows.push(currentRow);
    currentRow = [];
    currentRowSize = 0;
  }
}

export const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>John Qian</title>
        <meta name="description" content="Product and Eng" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <S.Intro>
          <S.Container>
            <S.IntroContent>
              <S.Title>Projects</S.Title>
              <S.Description>
                This is a mix of things I was paid to work on and things I
                worked on for fun.
              </S.Description>
              <S.Divider />
            </S.IntroContent>
          </S.Container>
        </S.Intro>
        <S.Container>
          <S.Projects>
            {rows.map((row, i) => {
              return (
                <S.ProjectsRow key={i}>
                  {row.map((project, j) => {
                    return (
                      <S.Project
                        href={project.href}
                        key={project.name}
                        size={project.size}
                        changeOrder={
                          row.length === 3 && project.size === 2 && j === 1
                        }
                      >
                        <S.ProjectImage>
                          {project.imageSrc.substr(-3) === "mp4" ? (
                            <video src={project.imageSrc} autoPlay muted loop />
                          ) : (
                            <Image
                              src={project.imageSrc}
                              width={project.imageSize.width}
                              height={project.imageSize.height}
                            />
                          )}
                        </S.ProjectImage>
                        <S.ProjectText>
                          <S.ProjectTitle>{project.name}</S.ProjectTitle>
                          <S.ProjectDate>
                            {moment(project.publishedAt).format("MMM 'YY")}
                          </S.ProjectDate>
                        </S.ProjectText>
                      </S.Project>
                    );
                  })}
                </S.ProjectsRow>
              );
            })}
          </S.Projects>
        </S.Container>
      </main>
    </>
  );
};

export default Home;
