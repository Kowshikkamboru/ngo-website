import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import styles from './team.module.css';

export const metadata: Metadata = {
  title: 'Our Team | Bahujana Samaja Seva Sangham',
  description:
    'Meet the leadership and management committee of Bahujana Samaja Seva Sangham driving community change in Telangana.',
};

const management = [
  { title: 'Founder President', name: 'Jangam Ramesh' },
  { title: 'Co-Founder & Founder Working President', name: 'Arpula Chandra Shekar' },
];

const members = [
  { initials: 'JN', name: 'Jangam Narsimlu', role: 'Executive President', color: 'var(--jade)' },
  { initials: 'TR', name: 'Talari Ramulu', role: 'Vice President', color: 'var(--saffron)' },
  { initials: 'JA', name: 'Jangam Anjaneyulu', role: 'General Secretary', color: 'var(--terra)' },
  { initials: 'BM', name: 'Begari Mypal', role: 'Treasurer', color: 'var(--jade)' },
  { initials: 'HA', name: 'Harijan Anjaneyulu', role: 'Executive Member', color: 'var(--muted)' },
  { initials: 'KA', name: 'Kavali Antayya', role: 'Executive Member', color: 'var(--muted)' },
];

export default function Team() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHero}>
        <FadeIn>
          <p className="section-label">Leadership</p>
          <h1 className={styles.pageTitle}>Our Team</h1>
        </FadeIn>
      </div>

      <div className={styles.content}>
        {/* Management Committee */}
        <FadeIn>
          <div className={styles.mgmtBox}>
            <p className={styles.mgmtLabel}>Management Committee</p>
            <div className={styles.mgmtGrid}>
              {management.map(m => (
                <div key={m.name} className={styles.mgmtCard}>
                  <div className={styles.mgmtAvatar} aria-hidden="true">
                    {m.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <p className={styles.mgmtTitle}>{m.title}</p>
                  <p className={styles.mgmtName}>{m.name}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Team Grid */}
        <div className={styles.teamGrid}>
          {members.map((m, i) => (
            <FadeIn key={m.name} delay={i * 0.07}>
              <div className={styles.teamCard}>
                <div
                  className={styles.avatar}
                  style={{ background: m.color }}
                  aria-hidden="true"
                >
                  {m.initials}
                </div>
                <p className={styles.memberName}>{m.name}</p>
                <p className={styles.memberRole}>{m.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Legal Advisor */}
        <FadeIn delay={0.2}>
          <div className="highlight-box" style={{ marginTop: '2.5rem' }}>
            <p>
              <strong>Legal Advisor:</strong> Addanki Anandam, MA, LLB — Senior Advocate,
              City Civil Court, West Marredpally, Hyderabad
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
