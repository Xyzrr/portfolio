import * as S from "../styles/index.styles";

import Head from "next/head";
import Image from "next/image";

const projects = [
  {
    name: "Spatial Video Chat",
    publishedAt: new Date("May 2021"),
    imageSrc: "/platformer.png",
    imageSize: { width: 608, height: 400 },
    href: "harbor",
    size: 2,
  },
  {
    name: "WYSIWYG Document Editor",
    publishedAt: new Date("May 2021"),
    imageSrc: "/platformer.png",
    imageSize: { width: 608, height: 400 },
    href: "wysiwyg",
    size: 2,
  },
  {
    name: "Vega Platformer",
    publishedAt: new Date("May 2021"),
    imageSrc: "/platformer.png",
    imageSize: { width: 608, height: 400 },
    href: "platformer",
    size: 1,
  },
  {
    name: "Vega Visualization Editor",
    publishedAt: new Date("May 2021"),
    imageSrc: "/platformer.png",
    imageSize: { width: 608, height: 400 },
    href: "vega",
    size: 2,
  },
  {
    name: "Multiplayer Tetris",
    publishedAt: new Date("May 2021"),
    imageSrc: "/platformer.png",
    imageSize: { width: 608, height: 400 },
    href: "tetris",
    size: 1,
  },
  {
    name: "Interactive Comments",
    publishedAt: new Date("May 2021"),
    imageSrc: "/platformer.png",
    imageSize: { width: 608, height: 400 },
    href: "comments",
    size: 2,
  },
  {
    name: "Voxel World",
    publishedAt: new Date("May 2021"),
    imageSrc: "/platformer.png",
    imageSize: { width: 608, height: 400 },
    href: "voxels",
    size: 2,
  },
  {
    name: "Halite III Bot",
    publishedAt: new Date("May 2021"),
    imageSrc: "/platformer.png",
    imageSize: { width: 608, height: 400 },
    href: "halite",
    size: 1,
  },
  {
    name: "Q-Learning Simulator",
    publishedAt: new Date("May 2021"),
    imageSrc: "/platformer.png",
    imageSize: { width: 608, height: 400 },
    href: "qlearning",
    size: 1,
  },
  {
    name: "AI Snake",
    publishedAt: new Date("May 2021"),
    imageSrc: "/platformer.png",
    imageSize: { width: 608, height: 400 },
    href: "snake",
    size: 1,
  },
  {
    name: "Pre-University",
    publishedAt: new Date("May 2021"),
    imageSrc: "/platformer.png",
    imageSize: { width: 608, height: 400 },
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
      </Head>

      <main>
        <S.Title>John Qian</S.Title>
        <S.Container>
          <S.Projects>
            {rows.map((row, i) => {
              return (
                <S.ProjectsRow key={i}>
                  {row.map((project, j) => {
                    return (
                      <S.Project
                        key={project.name}
                        size={project.size}
                        changeOrder={
                          row.length === 3 && project.size === 2 && j === 1
                        }
                      >
                        <S.ProjectImage>
                          <Image
                            src={project.imageSrc}
                            width={project.imageSize.width}
                            height={project.imageSize.height}
                          />
                        </S.ProjectImage>
                        <S.ProjectTitle>{project.name}</S.ProjectTitle>
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
