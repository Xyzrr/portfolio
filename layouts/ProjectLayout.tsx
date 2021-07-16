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
      {children}
    </>
  );
};

export default ProjectLayout;
