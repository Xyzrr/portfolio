import Head from "next/head";
import React from "react";
import ProjectStyles from "../styles/project.styles";

interface ProjectLayoutProps {
  title: string;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Made by John Qian." />
      </Head>
      <ProjectStyles />
      <nav>
        <a href="/">Projects /</a>
      </nav>
      <h1>{title}</h1>
      {children}
    </>
  );
};

export default ProjectLayout;
