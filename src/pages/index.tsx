import React from 'react'
import Layout from '@theme/Layout'
import Hero from '@site/src/components/Hero'
import BackToTopButton from '@theme/BackToTopButton'
import Translate from '@docusaurus/Translate'
import BlogPostItems from '@theme/BlogPostItems'
import BlogListPaginator from '@theme/BlogListPaginator'
import BlogInfo from '@site/src/components/BlogInfo'

export default function Hello() {
  return (
    <Layout wrapperClassName="blog=-list__page">
      <Hero />
      <BackToTopButton />
    </Layout>
  )
}
