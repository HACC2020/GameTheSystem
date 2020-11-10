import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import CallToAction from '../components/Home/CallToAction';
import Navbar from '../components/Global/Navbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GameTheSystem</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="p-5">
        <CallToAction />
      </main>
    </div>
  );
}
