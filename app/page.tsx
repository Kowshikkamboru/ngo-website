import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import SectionHeader from '@/components/SectionHeader';
import styles from './page.module.css';

const focusAreas = [
  {
    icon: '📚',
    title: 'Education & Literacy',
    desc: 'Promoting literacy and quality education for underprivileged children, supporting the Right to Education for all.',
    color: 'terra',
  },
  {
    icon: '🏥',
    title: 'Healthcare Access',
    desc: 'Organizing health camps, awareness campaigns, and medical aid to marginalized communities.',
    color: 'jade',
  },
  {
    icon: '👩',
    title: 'Women Empowerment',
    desc: 'Skill development programs, gender equality advocacy, and protecting women\'s rights.',
    color: 'saffron',
  },
  {
    icon: '🌱',
    title: 'Environment',
    desc: 'Afforestation, waste management, and organic farming awareness for a sustainable future.',
    color: 'terra',
  },
  {
    icon: '⚖️',
    title: 'Human Rights',
    desc: 'RTI activities, legal aid, and combating discrimination based on caste, gender, or religion.',
    color: 'jade',
  },
  {
    icon: '🏘️',
    title: 'Rural Development',
    desc: 'Agricultural development, self-help groups, and microfinance to empower rural communities.',
    color: 'saffron',
  },
];

const stats = [
  { num: '15+', label: 'Program Areas' },
  { num: '3', label: 'Land Assets' },
  { num: '∞', label: 'Community Reach' },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className={styles.hero} aria-label="Hero">
        <div className={styles.orb1} aria-hidden="true" />
        <div className={styles.orb2} aria-hidden="true" />
        <div className={styles.orb3} aria-hidden="true" />

        <div className={styles.heroInner}>
          <FadeIn delay={0}>
            <span className={styles.heroBadge}>Registered NGO · Hyderabad</span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className={styles.heroTitle}>
              Empowering Communities,{' '}
              <span className={styles.heroAccent}>Transforming Lives</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className={styles.heroSub}>
              Working for the social, economic, and cultural upliftment of marginalized
              communities across Telangana.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className={styles.heroActions}>
              <Link href="/programs" className="btn btn-primary">
                Our Programs
              </Link>
              <Link href="/join" className="btn btn-outline-white">
                Become a Member
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className={styles.heroStats}>
              {stats.map(s => (
                <div key={s.label} className={styles.stat}>
                  <div className={styles.statNum}>{s.num}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FOCUS AREAS ─── */}
      <section className={styles.focusSection} aria-label="Focus areas">
        <div className="container">
          <FadeIn>
            <SectionHeader
              label="What We Do"
              title="Our Core Focus Areas"
              subtitle="Holistic community development across multiple dimensions"
            />
          </FadeIn>

          <div className={styles.cardsGrid}>
            {focusAreas.map((area, i) => (
              <FadeIn key={area.title} delay={i * 0.08}>
                <div className={`${styles.focusCard} card-base`}>
                  <div className={`${styles.cardIcon} ${styles[`icon-${area.color}`]}`} aria-hidden="true">
                    {area.icon}
                  </div>
                  <h3 className={styles.cardTitle}>{area.title}</h3>
                  <p className={styles.cardDesc}>{area.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className={styles.ctaBanner}>
              <div>
                <p className={styles.ctaBannerTitle}>Ready to make a difference?</p>
                <p className={styles.ctaBannerSub}>Join us and help uplift communities in need.</p>
              </div>
              <Link href="/join" className="btn btn-terra">
                Support Our Mission →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
