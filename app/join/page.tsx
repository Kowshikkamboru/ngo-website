'use client';

import FadeIn from '@/components/FadeIn';
import styles from './join.module.css';

const supportWays = [
  'Individual Donations',
  'Corporate CSR',
  'Government Grants',
  'International Grants',
  'Fundraising Events',
  'Crowdfunding',
  'In-Kind Donations',
  'Endowments',
  'Partnerships',
];

export default function Join() {
  function handleMembership() {
    alert('Thank you for your interest! Please contact us to complete membership enrollment.');
  }

  function handleDonate() {
    alert('Thank you for your generosity! Please contact us to arrange your donation.');
  }

  return (
    <div className={styles.page}>
      <div className={styles.pageHero}>
        <FadeIn>
          <p className="section-label">Get Involved</p>
          <h1 className={styles.pageTitle}>Support the Mission</h1>
          <p className={styles.pageSub}>Join as a member or contribute to uplift communities in need</p>
        </FadeIn>
      </div>

      <div className={styles.content}>
        <div className={styles.joinGrid}>
          {/* Membership Card */}
          <FadeIn direction="left">
            <div className={styles.memberCard}>
              <div className={styles.cardHeader}>
                <span className={styles.memberIcon} aria-hidden="true">🤝</span>
                <h2 className={styles.cardTitle}>Become a Member</h2>
              </div>
              <p className={styles.cardDesc}>
                Open to all who believe in social service and the organization&apos;s
                objectives. Your membership drives community change.
              </p>
              <div className={styles.feeBadge}>₹500 Membership Fee</div>
              <p className={styles.feeNote}>
                One-time, non-refundable entry fee. Join hands with us to create lasting impact.
              </p>
              <button
                id="apply-membership-btn"
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={handleMembership}
              >
                Apply for Membership
              </button>
            </div>
          </FadeIn>

          {/* Donate Card */}
          <FadeIn direction="right" delay={0.1}>
            <div className={styles.donateCard}>
              <div className={styles.cardHeader}>
                <span className={styles.donateIcon} aria-hidden="true">❤️</span>
                <h2 className={`${styles.cardTitle} ${styles.cardTitleWhite}`}>Donate</h2>
              </div>
              <p className={`${styles.cardDesc} ${styles.cardDescLight}`}>
                Your donation funds health camps, education programs, disaster relief,
                and cultural preservation initiatives.
              </p>
              <p className={`${styles.feeNote} ${styles.feeNoteLight}`}>
                We accept individual donations, corporate CSR funds, government grants,
                crowdfunding, and in-kind donations.
              </p>
              <button
                id="make-donation-btn"
                className="btn btn-donate"
                onClick={handleDonate}
              >
                Make a Donation
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Support Ways */}
        <FadeIn delay={0.2}>
          <div className={styles.sourcesBox}>
            <p className={styles.sourcesLabel}>Ways to Support</p>
            <div className={styles.sourcesList}>
              {supportWays.map(way => (
                <span key={way} className="source-pill">{way}</span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
