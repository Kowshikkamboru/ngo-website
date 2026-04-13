import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import SectionHeader from '@/components/SectionHeader';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About Us | Bahujana Samaja Seva Sangham',
  description:
    'Learn about Bahujana Samaja Seva Sangham — a community-driven NGO committed to holistic development of underprivileged communities in Telangana.',
};

const values = [
  {
    title: 'Inclusivity',
    desc: 'Serving all communities regardless of caste, religion, or background',
  },
  {
    title: 'Transparency',
    desc: 'Open financial management and accountability to all stakeholders',
  },
  {
    title: 'Community First',
    desc: 'Every decision is guided by the needs of the communities we serve',
  },
  {
    title: 'Cultural Heritage',
    desc: 'Preserving folk arts, ancient traditions, and establishing monuments',
  },
  {
    title: 'Empowerment',
    desc: 'Building capacity so communities can lead their own development',
  },
];

export default function About() {
  return (
    <div className={styles.page}>
      {/* Page Hero */}
      <div className={styles.pageHero}>
        <FadeIn>
          <p className="section-label">Who We Are</p>
          <h1 className={styles.pageTitle}>About Bahujana Samaja<br />Seva Sangham</h1>
        </FadeIn>
      </div>

      <div className={styles.content}>
        <div className={styles.split}>
          {/* Left: Mission */}
          <FadeIn direction="left">
            <div className={styles.missionCol}>
              <p className={styles.para}>
                Bahujana Samaja Seva Sangham is a community-driven NGO committed to the
                holistic development of underprivileged, vulnerable, and economically backward
                communities — irrespective of caste or religion.
              </p>

              <div className="highlight-box">
                <p>
                  &ldquo;To improve the economic, moral, cultural, physical, and social standards
                  of the poor, the vulnerable, and the youth — fostering mutual co-operation
                  and unity in society.&rdquo;
                </p>
              </div>

              <p className={styles.para}>
                We bridge the gap between government efforts and grassroots needs, ensuring
                inclusive and sustainable development through programs, advocacy, and community
                mobilization.
              </p>

              <p className={styles.para}>
                The organization owns assets including open land near Hanuman Mandir, land near
                Maisamma Temple, and Dasari Gutta — to be developed for community benefit
                including Bahujana Vignana Kendram and Ambedkar Bhavan.
              </p>

              {/* Asset Cards */}
              <div className={styles.assetCards}>
                {['Land near Hanuman Mandir', 'Land near Maisamma Temple', 'Dasari Gutta'].map(
                  asset => (
                    <div key={asset} className={styles.assetCard}>
                      <span className={styles.assetDot} aria-hidden="true" />
                      <span>{asset}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </FadeIn>

          {/* Right: Values */}
          <FadeIn direction="right" delay={0.1}>
            <div className={styles.valuesCol}>
              <p className={styles.valuesTitle}>Our Core Values</p>
              <ul className={styles.valuesList}>
                {values.map((v, i) => (
                  <li key={v.title} className={styles.valueItem}>
                    <span className={styles.valueDot} aria-hidden="true" />
                    <div>
                      <h3 className={styles.valueName}>{v.title}</h3>
                      <p className={styles.valueDesc}>{v.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
