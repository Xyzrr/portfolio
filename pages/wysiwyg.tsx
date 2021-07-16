import * as S from "../styles/project.styles";
import Head from "next/head";

export const WYSIWYGPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>WYSIWYG Reports</title>
        <meta name="description" content="Product and Eng" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <S.Container>
          <S.Title>WYSIWYG Reports</S.Title>
          <p>
            At Weights &amp; Biases, I led the design and development of the
            Reports project, a mission to make it easy to share your machine
            learning research with your team and the world. As of July 2021,
            more than 500 reports are created each week.
          </p>
          <S.Gallery>
            <video
              src="https://storage.googleapis.com/john-portfolio/wysiwyg/long-demo.mov"
              autoPlay
              muted
              loop
            />
          </S.Gallery>
          <h2>The Problem</h2>
          <p>
            When I joined W&amp;B, reports already existed, but they were
            designed for only one purpose: sharing progress updates internally
            with teammates. As a result, little effort was put into
            presentation; reports were not visually clean or mobile friendly.
          </p>
          <S.Image
            bordered
            src="https://storage.googleapis.com/john-portfolio/wysiwyg/old.png"
          />
          <p>
            Secondly, the text editing experience was an afterthought, since
            generally only short snippets and captions were needed.
          </p>
          <p>
            Lastly, reports weren't designed to be collaborative; only the
            author of a report could edit it.
          </p>
          <p>
            We saw an opportunity to enable researchers to quickly publish their
            research to the world by sharing the reports that they were already
            creating for internal use. But for this to work, we needed to make
            reports presentable, suitable for longform rich text, and
            collaborative.
          </p>
          <h2>Process?</h2>
          <p>
            We iterated on reports for the entire 2+ years I was at W&B. Because
            reports already had many active users, we chose to solve one problem
            at a time and maintain backwards compatibility at each step.
          </p>
          <p>
            Being a startup, we didn't have a consistent process. I would always
            do the design and share it with the Shawn (CTO) and Carey (Head of
            Product) for feedback and approval. I designed some features via
            Figma mocks, others via written specifications. Sometimes I
            implemented the design myself, sometimes I led a team of 3
            engineers. We conducted user interviews as necessary.
          </p>
          <h2>Hardest decisions</h2>
          <h3>Realtime collaboration vs. async collaboration</h3>
          <p>
            Realtime collaboration is now the gold standard for document
            editors, set forth by tools like Google Docs and Notion. But our
            reports architecture wasn't designed for realtime collaboration, so
            implementing it would have required a complete rewrite. Instead, we
            opted for a git-like system. When you edit a report, you create a
            private copy of it which you can then save onto the master report.
          </p>
          <S.Video
            src="https://storage.googleapis.com/john-portfolio/wysiwyg/drafts.mov"
            autoPlay
            muted
            loop
          />
          <p>
            Later on I implemented a proof-of-concept of realtime collaboration.
            It probably won't see production for awhile.
          </p>
          <h3>Default text width</h3>
          <p>
            Text is most readable at less than 70 characters per line. But
            visualizations want to be wider than that. Should we align the text
            to the visualizations, or should we make the text readable at the
            cost of awkward alignment when there's little text?
          </p>
          <S.Video
            src="https://storage.googleapis.com/john-portfolio/wysiwyg/text-width.mov"
            autoPlay
            muted
            loop
          />
          <p>
            We initially opted to default to wide text since longform text was
            uncommon. But as we grew Reports into more of a publishing platform,
            we switched the default text width to be readable.
          </p>
          <h3>Markdown vs. WYSIWYG</h3>
          <p>
            Text editing was initially all markdown based because it was easier
            to implement and the user base is very technical. However, Markdown
            isn't designed to be used for documents with complex interactive
            visualizations. We tried various hacks to get it mostly working, but
            ultimately decided that WYSIWYG was the only way to get the user
            experience we really wanted.
          </p>
        </S.Container>
      </main>
    </>
  );
};

export default WYSIWYGPage;
