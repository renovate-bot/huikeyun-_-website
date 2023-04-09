import React from 'react'
import classnames from 'classnames';

import {animated, useTrail} from '@react-spring/web'
import Translate from '@docusaurus/Translate'
import {useThemeConfig} from '@docusaurus/theme-common'
import {ThemeConfig} from '@docusaurus/preset-classic'

import HeroMain from './img/hero_main.svg'

import {Icon} from '@iconify/react'
import FeishuIcon from '@site/static/svg/feishu.svg'
import GiteeIcon from '@site/static/svg/gitee.svg'
import styles from './hero.module.scss'

function Hero() {
  const trails = useTrail(5, {
    from: {
      opacity: 0, transform: 'translate3d(0px, 2em, 0px)',
    }, to: {
      opacity: 1, transform: 'translate3d(0px, 0px, 0px)',
    }, config: {
      mass: 3, tension: 460, friction: 45,
    },
  })

  return (<animated.header className={classnames('section', styles.hero)}>
    <div className={styles.bloghome__intro}>
      <animated.div style={trails[0]} className={styles.hero_text}>
        <Translate id="homepage.hero.title1">慧科云</Translate>
        <span className={styles.intro__name}>
            <Translate id="homepage.hero.title2">内容管理</Translate>
          </span>
        <Translate id="homepage.hero.title3">框架</Translate>
        <br/>
      </animated.div>
      <animated.p style={trails[1]}>
        <Translate id="homepage.hero.text">
          多模块 &nbsp; 多应用 &nbsp; API接口 &nbsp; 小程序
        </Translate>
      </animated.p>
      <animated.p style={trails[2]}>
        <Translate id="homepage.hero.copyright">
          著作权登记号：2022SR1480776
        </Translate>
        <br/>
      </animated.p>
      <SocialLinks style={trails[3]}/>
      <animated.div className='button__links' style={trails[4]}>
        <a className='button' href={'./docs'}>
          <Translate id="hompage.hero.introduce">详细介绍</Translate>
        </a>
        <a className='button'
           href={'https://cms.13aq.com/%E6%85%A7%E7%A7%91%E4%BA%91CMS-%E5%AE%89%E8%A3%85%E5%8C%85.zip'}
        >
          <Translate id="hompage.hero.down">下载安装包</Translate>
        </a>
      </animated.div>
    </div>
    <div className={styles.bloghome__image}>
      <animated.div style={trails[5]}>
        <HeroMain/>
      </animated.div>
    </div>
  </animated.header>)
}

export function SocialLinks({...prop}) {
  const themeConfig = useThemeConfig() as ThemeConfig

  const socials = themeConfig.socials as {
    github: string
    gitee: string
    feishu: string
    twitter: string
    juejin: string
    csdn: string
    qq: string
    wx: string
    cloudmusic: string
    zhihu: string
  }

  return (<animated.div className={styles.social__links} {...prop}>
    <a href="/blog/rss.xml" target="_blank">
      <Icon icon="ri:rss-line"/>
    </a>
    <a href={socials.github} target="_blank">
      <Icon icon="ri:github-line"/>
    </a>
    <a href={socials.gitee} target="_blank">
      <GiteeIcon/>
    </a>
    <a href={socials.feishu} target="_blank">
      <FeishuIcon/>
    </a>
    {/* <a href={socials.juejin} target="_blank">
        <JuejinIcon />
      </a>*/}
    <a href={socials.qq} target="_blank">
      <Icon icon="ri:qq-line"/>
    </a>
    {/*<a href={socials.twitter} target="_blank">
        <Icon icon="ri:twitter-line" />
      </a>*/}
    {/* <a href={socials.zhihu} target="_blank">
        <Icon icon="ri:zhihu-line" />
      </a>*/}
  </animated.div>)
}

export default Hero
