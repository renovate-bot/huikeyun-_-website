import React from 'react'
import Layout from '@theme/Layout'

import Hero from '@site/src/components/Hero'
import BackToTopButton from '@theme/BackToTopButton'

export default function Hello() {
  return (
    <Layout title="首页" wrapperClassName="blog=-list__page">
      <Hero />
      <BackToTopButton />
    </Layout>
  )
}
