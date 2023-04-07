import React from 'react'
import Layout from '@theme/Layout'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Hero from '@site/src/components/Hero'
import BackToTopButton from '@theme/BackToTopButton'

export default function Hello() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      wrapperClassName="blog=-list__page"
    >
      <Hero />
      <BackToTopButton />
    </Layout>
  )
}
