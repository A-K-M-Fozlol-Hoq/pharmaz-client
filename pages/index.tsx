import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Shared/footer';
import NavBar from '../components/Shared/navBar';
import ReturnHello from '../components/Utils/returnHello';
import Login from '../pages/login';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <Head>
          <title>Pharmaz</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className="bg-slate-600 text-center">Hello world</h1>
          <ReturnHello />
          <Login></Login>
        </main>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
      <Footer />
    </>
  );
};

export default Home;
