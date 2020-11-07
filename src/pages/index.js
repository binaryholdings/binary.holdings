import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Hero from '../components/hero';
import Accent from '../components/accent';
import Calculator from '../components/calculator';
import BasicStats from '../components/basic-stats';

const features = [
  {
    title: 'Simple',
    imageUrl: 'img/simple.svg',
    description: (
      <>
        Nominating has never been this easy. Everything you need to join us can
        be found on this site. Just install the{" "}
        <a href="https://polkadot.js.org/extension/">Polkadot JS Extension</a>.
      </>
    ),
  },
  {
    title: 'Safe',
    imageUrl: 'img/safe.svg',
    description: (
      <>
        The number one customer of Binary Holdings is ourselves. We treat your
        funds just like our own.
      </>
    ),
  },
  {
    title: 'Secure',
    imageUrl: 'img/secure.svg',
    description: (
      <>
        Binary Holdings is managed by the engineers who built Kusama, Polkadot
        and Cosmos.
      </>
    ),
  },
];

const team = [
  {
    title: 'Marko Baricevic',
    imageUrl: 'img/marko.png',
    description: (
      <>
        Developer Relations at Interchain
      </>
    ),
    link: 'https://www.linkedin.com/in/marko-baricevic/',
  },
  {
    title: 'Shawn Tabrizi',
    imageUrl: 'img/shawn.jpg',
    description: (
      <>
        Core Developer at Parity Technologies
      </>
    ),
    link: 'https://www.linkedin.com/in/shawn-tabrizi/',
  },
  {
    title: 'Will Pankiewicz',
    imageUrl: 'img/will.jpg',
    description: (
      <>
        Master of Validators at Parity Technologies
      </>
    ),
    link: 'https://www.linkedin.com/in/william-pankiewicz/',
  },
];

function Team({ imageUrl, title, description, link }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4')}>
      {imgUrl && (
        <div className="text--center">
          <a href={link}>
            <img className={styles.teamImage} src={imgUrl} alt={title} />
          </a>
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">
            <Hero>{siteConfig.customFields.heroTitle}</Hero>
          </h1>
          <p className={clsx("hero__subtitle", styles.subtitle)}>
            <Accent>{siteConfig.tagline}</Accent>
          </p>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        {team && team.length > 0 && (
          <section className={styles.team}>
            <div className="container">
              <h2>The Team</h2>
              <div className="row">
                {team.map((props, idx) => (
                  <Team key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <BasicStats />
        <Calculator />
      </main>
    </Layout>
  );
}

export default Home;
