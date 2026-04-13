import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.emblem} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
          </div>
          <div>
            <p className={styles.orgName}>Bahujana Samaja Seva Sangham</p>
            <p className={styles.location}>Hyderabad, Telangana</p>
          </div>
        </div>

        {/* Nav */}
        <nav aria-label="Footer navigation" className={styles.footerNav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/team">Team</Link>
          <Link href="/join">Join Us</Link>
        </nav>

        <div className={styles.divider} />

        {/* Bottom */}
        <div className={styles.bottom}>
          <p>Committed to inclusive and sustainable community development</p>
          <p className={styles.legal}>
            Legal Advisor: Addanki Anandam, MA, LLB · Sr. Advocate, City Civil Court, West Marredpally
          </p>
        </div>
      </div>
    </footer>
  );
}
