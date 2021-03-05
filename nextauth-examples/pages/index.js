import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [session, loading] = useSession();

  console.log(session)
  return (
    <div className={styles.container}>
      <Head>
        <title>Auth Examples</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!session && (
          <>
            Not signed in <br />
            <button onClick={signIn}>Sign In</button>
          </>
        )}
        {session && (
          <>
            Signed in as {session.user.email} <br />
            <div>You can now access our super secret pages</div>
            <button>
              <Link href="/secret">To the secret</Link>
            </button>
            <button onClick={signOut}>sign out</button>
          </>
        )}
      </main>
    </div>
  )
}