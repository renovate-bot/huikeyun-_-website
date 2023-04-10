import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Hero from '@site/src/components/Hero'
import BackToTopButton from '@theme/BackToTopButton'
import styles from './index.module.scss';

const features = [
  {
    title: <>多站点/站群系统</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (<>可创建多站点，站点，后台，用户中心均可绑定独立域名</>),
  },
  {
    title: <>自定义表单/字段</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (<>自定义数据表，支持一对一，一对多自定义字段，可应对复杂的数据内容需求</>),
  },
  {
    title: <>可复用的模板设计</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (<>支持母版页、局部页等公共页面,提高重用性，制作网站模板更高效和便捷</>),
  },
  {
    title: <>前台、后台分离</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (<>http缓存+后台缓存+专业数据优化，大数据、大流量下也能快速响应</>),
  },
  {
    title: <>企业级安全保障</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (<>系统从底层预防Sql注入、CSRF、暴力破解等攻击，可通过公安部三级安全等保测评</>),
  },
  {
    title: <>灵活扩展、支持多终端</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (<>可拆卸的插件式设计，可为小程序、App等终端提供数据接口</>),
  },
];

function Feature({
                   imageUrl,
                   title,
                   description
                 })
{
  const imgUrl = useBaseUrl(imageUrl);
  return (<div className={classnames('col col--4', styles.feature)}>
    {imgUrl && (<div className="text--center">
      <img className={styles.featureImage} src={imgUrl} alt={title}/>
    </div>)}
    <h3>{title}</h3>
    <p>{description}</p>
  </div>);
}

export default function Home()
{
  return (<Layout title="首页" wrapperClassName="abc">
    <Hero/>
    <main>
      {features && features.length && (<section className={styles.features}>
        <div className="container">
          <div className="row">
            {features.map((props, idx) => (<Feature key={idx} {...props} />))}
          </div>
        </div>
      </section>)}
    </main>
    <BackToTopButton/>
  </Layout>);
}
