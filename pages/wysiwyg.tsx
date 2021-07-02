import * as S from "../styles/project.styles";
import Head from "next/head";

export const WYSIWYGPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>WYSIWYG Reports</title>
        <meta name="description" content="Product and Eng" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <S.Container>
          <S.Title>WYSIWYG Reports</S.Title>
          <p>
            At Weights &amp; Biases, I led the Reports project, a mission to
            make it easy to share your machine learning research with your team
            and the world. After you log your training data to W&amp;B, you can
            create a report that pulls in that data and presents it via
            interactive visualizations. As of June 2021, X reports are written
            every day.{" "}
            <a href="https://wandb.ai/wandb/alors%20on%20danse/reports/A-New-Way-to-Create-Reports--VmlldzozOTg0OTg"></a>
          </p>
          <p>
            Reports existed before I joined the company, but they looked and
            behaved very differently than they do now. Here's a screenshot of a
            report from 2019:
          </p>
          <p>And here's a report from 2021:</p>
          <p>
            The path between these two versions was long and iterative. The
            compressed history is:
            <ul>
              <li>
                Reports were ugly. Anyone viewing a report would see all the
                knobs and widgets used for editing it. So I made a separate
                "read view" that was heavily cleaned up.
              </li>
              <li>
                Read view now looked very edit from edit view, which was
                disorienting for authors. So I made edit view look closer to
                read view.
              </li>
              <li>
                Only the author of a report could edit it, making collaboration
                virtually impossible. So I designed and implemented a
                draft-based architecture enabling multiple authors to work on
                the same report, with conflict resolution in case of
                simultaneous edits.
              </li>
              <li>
                The text editing experience in reports was awful because all
                text had to be inside panels, but panels were designed for
                charts and visualizations. So I re-architected reports to allow
                text outside of panels.
              </li>
              <li>
                Text editing was better now but still had fundamental
                limitations due to being Markdown-based. It isn't possible to
                seamlessly intersperse Markdown text with React components,
                which is what we wanted to do. So I led a project to make
                reports WYSIWYG.
              </li>
            </ul>
          </p>
        </S.Container>
      </main>
    </>
  );
};

export default WYSIWYGPage;
