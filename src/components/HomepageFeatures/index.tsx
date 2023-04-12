import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: <>多站点/站群系统</>,
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (<>可创建多站点，站点，后台，用户中心均可绑定独立域名</>),
  },
  {
    title: <>自定义表单/字段</>,
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (<>自定义数据表，支持一对一，一对多自定义字段，可应对复杂的数据内容需求</>),
  },
  {
    title: <>可复用的模板设计</>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (<>支持母版页、局部页等公共页面,提高重用性，制作网站模板更高效和便捷</>),
  },
  {
    title: <>前端、后端分离</>,
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (<>http缓存+后台缓存+专业数据优化，大数据、大流量下也能快速响应</>),
  },
  {
    title: <>企业级安全保障</>,
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (<>自系统从底层预防Sql注入、CSRF、暴力破解等攻击，可通过公安部三级安全等保测评</>),
  },
  {
    title: <>灵活扩展、支持多终端</>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (<>可拆卸的插件式设计，可为小程序、App等终端提供数据接口</>),
  },
];

function Feature({
                   Svg,
                   title,
                   description
                 })
{
  return (<div className={clsx('col col--4')}>
    <div className="text--center">
      <Svg className={styles.featureSvg} role="img"/>
    </div>
    <div className="text--center padding-horiz--md">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>);
}

export default function HomepageFeatures() {
  return (<section className={styles.features}>
    <div className="container">
      <div className="row">
        {FeatureList.map((props, idx) => (<Feature key={idx} {...props} />))}
      </div>
    </div>
  </section>);
}

