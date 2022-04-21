import Head from 'next/head';
import MainFooter from '../components/main-footer';
import MainHeader from '../components/main-header';
import HomeCard from '../components/home-card';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MainHeader />

        <div className="grid">
          <HomeCard
            href="https://nextjs.org/docs"
            heading="Documentation"
            description="Find in-depth information about Next.js features and API."
          />
          <HomeCard
            href="https://nextjs.org/learn"
            heading="Learn"
            description="Learn about Next.js in an interactive course with quizzes!"
          />
          <HomeCard
            href="https://github.com/vercel/next.js/tree/master/examples"
            heading="Examples"
            description="Discover and deploy boilerplate example Next.js projects."
          />
          <HomeCard
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            heading="Deploy"
            description="Instantly deploy your Next.js site to a public URL with Vercel."
          />
        </div>
      </main>

      <MainFooter />

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
