import React from 'react';
import clsx from 'clsx';
import classnames from 'classnames';

import Layout from '@theme/Layout';
import BackToTopButton from '@theme/BackToTopButton'
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Hero from '@site/src/components/Hero'
import HomepageFeatures from '@site/src/components/HomepageFeatures';


import styles from './index.module.scss';

function HomepageHero() {
  const {siteConfig} = useDocusaurusContext();
  return (<header className={clsx('hero hero--primary', styles.heroBanner)}>
    <div className="container">
      <h1 className="hero__title">{siteConfig.title}</h1>
      <p className="hero__subtitle">{siteConfig.tagline}</p>
      <div className={styles.buttons}>
        <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
          Docusaurus Tutorial - 5min ⏱️
        </Link>
      </div>
    </div>
  </header>);
}

export default function Home() {

  return (<Layout title="首页" wrapperClassName="abc">
    <Hero/>
    {/* S 焦点区 */}
    <HomepageHero/>
    {/* E 焦点区 */}
    <main>
      {/* S 特征 */}
      <HomepageFeatures />
      {/* S 特征 */}
    </main>
    <BackToTopButton/>
  </Layout>);
}
