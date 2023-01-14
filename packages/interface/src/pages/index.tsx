import { ConnectButton } from '@rainbow-me/rainbowkit'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            return <ConnectButton />;
          </div>
        </div>

        <div className={styles.center}></div>
      </main>
    </>
  )
}
