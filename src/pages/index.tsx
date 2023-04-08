/*******************************************************************************
 * Copyright (c) 2023 慧科云
 * 此源代码根据 MIT 许可证进行许可，该许可证位于此源代码树根目录中的 LICENSE 文件中。
 * 最后修改时间：2023/4/8 上午9:05
 ******************************************************************************/

import React from 'react'
import Layout from '@theme/Layout'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Hero from '@site/src/components/Hero'
import BackToTopButton from '@theme/BackToTopButton'

export default function Hello() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout wrapperClassName="blog=-list__page">
      <Hero />
      <BackToTopButton />
    </Layout>
  )
}
