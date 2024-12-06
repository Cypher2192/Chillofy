import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chillofy - Your Mental Health Companion</title>
        <meta name="description" content="A mental health app to help you manage stress, anxiety, and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Chillofy
        </h1>

        <p className={styles.description}>
          Your journey to mental well-being starts here.
        </p>

        <div className={styles.grid}>
          <Link href="/features">
            <div className={styles.card}>
              <h3>Explore Features &rarr;</h3>
              <p>Discover tools to help you manage your mental health.</p>
            </div>
          </Link>
          <Link href="/resources">
            <div className={styles.card}>
              <h3>Helpful Resources &rarr;</h3>
              <p>Find resources for support and guidance.</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
