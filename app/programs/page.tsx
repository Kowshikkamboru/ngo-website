import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import styles from './programs.module.css';

export const metadata: Metadata = {
  title: 'Programs & Initiatives | Bahujana Samaja Seva Sangham',
  description:
    'Explore our 15+ programs across education, healthcare, women empowerment, rural development, human rights, environment, and more.',
};

const programs = [
  {
    num: '01', tag: 'Education', tagClass: 'tag-terra',
    title: 'Literacy & Right to Education',
    desc: 'Promoting literacy, supporting underprivileged children, RTI activities, and Children\'s Parks for learning-friendly environments.',
  },
  {
    num: '02', tag: 'Healthcare', tagClass: 'tag-jade',
    title: 'Health Camps & Awareness',
    desc: 'Regular health camps combating TB, malaria, HIV/AIDS, and hygiene programs for rural and urban slum areas.',
  },
  {
    num: '03', tag: 'Women', tagClass: 'tag-saffron',
    title: 'Women Empowerment',
    desc: 'Skill development, gender equality advocacy, and supporting SC/ST/BC women entrepreneurs.',
  },
  {
    num: '04', tag: 'Rural', tagClass: 'tag-jade',
    title: 'Rural & Agricultural Development',
    desc: 'Organic farming awareness, SHG promotion, microfinance, and access to government schemes for below-poverty-line families.',
  },
  {
    num: '05', tag: 'Rights', tagClass: 'tag-terra',
    title: 'Human Rights & Legal Aid',
    desc: 'RTI advocacy, legal support for marginalized groups, anti-discrimination campaigns, and government lease activities.',
  },
  {
    num: '06', tag: 'Environment', tagClass: 'tag-saffron',
    title: 'Environment Conservation',
    desc: 'Afforestation drives, waste management, environmental protection awareness, and sustainable development programs.',
  },
  {
    num: '07', tag: 'Culture', tagClass: 'tag-terra',
    title: 'Cultural Preservation & Monuments',
    desc: 'Supporting folk arts and artists, establishing statues of freedom fighters and social reformers, and preserving ancient traditions.',
  },
  {
    num: '08', tag: 'Disaster', tagClass: 'tag-jade',
    title: 'Disaster Relief',
    desc: 'Immediate relief during floods, earthquakes, or cyclones and long-term rehabilitation for affected communities.',
  },
  {
    num: '09', tag: 'Skills', tagClass: 'tag-saffron',
    title: 'Skill Development & Employment',
    desc: 'Vocational training, helping educated youth find employment, and supporting entrepreneurship and small-scale industries.',
  },
];

export default function Programs() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHero}>
        <FadeIn>
          <p className="section-label">Our Work</p>
          <h1 className={styles.pageTitle}>Programs &amp; Initiatives</h1>
          <p className={styles.pageSub}>Comprehensive action across 15 development areas</p>
        </FadeIn>
      </div>

      <div className={styles.content}>
        <div className={styles.grid}>
          {programs.map((prog, i) => (
            <FadeIn key={prog.num} delay={(i % 3) * 0.08}>
              <article className={`${styles.progCard} card-base`}>
                <span className={styles.progNum} aria-hidden="true">{prog.num}</span>
                <span className={`tag ${prog.tagClass} ${styles.progTag}`}>{prog.tag}</span>
                <h2 className={styles.progTitle}>{prog.title}</h2>
                <p className={styles.progDesc}>{prog.desc}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
