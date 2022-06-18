import Head from 'next/head';
import Header from '../components/Header/Header';
import PrimaryArt from '../components/PrimaryArt/PrimaryArt';
import styles from '../styles/index.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Noorain Inam</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <PrimaryArt />
    </div>
  );
}
