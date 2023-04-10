---
slug: how-the-react-className-variable-is-used
title: react className变量使用方式
date: 2023-4-9 10:46:29
authors: zhangqh22
tags: [Sass,CSS 布局,CSS]
keywords: [Sass,CSS 布局,CSS]
---

![react-class-name-banner](@site/static/img/thumbnail/react-class-name-banner.png)

这种命名规范主要是避免 class 作用域相互影响，在新版的 React 中命名为 xxx.module.scss 自动开启。

<!-- truncate -->

```scss title='index.module.scss'
.select {
display: flex;
width: 148px;
height: 26px;
border-radius: 4px;
border: 1px solid #ffffff;
.active {
background-color: #ffffff;
color: #ac1d1d;
}
}
.select_item {
flex: 1;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;

font-size: 13px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
  .select {
    display: flex;
    width: 148px;
    height: 26px;
    border: 1px solid #ffffff;
    border-radius: 4px;
    .active {
      color: #ac1d1d;
      background-color: #ffffff;
    }
  }

  .select_item {
    font-family: PingFangSC-Regular, PingFang SC;
    font-size: 13px;
    font-weight: 400;
    display: flex;
    overflow: hidden;

    align-items: center;
    flex: 1;
    justify-content: center;
    color: #ffffff;
  }color: #ffffff;
}
```

```typescript title='在 typescript 里是这样的'
declare module '*.module.scss' {
  export const style: any
}
```
         
 
```javascript title='index.tsx'
import styles from './index.module.scss'

class Demo extends Component {
   return (
      <div className={styles.select}>
        <div className={`${styles.select_item} ${styles.active}`}>航班</div>
        <div className={styles.select_item}>关注</div>
      </div>
    )
}
```

所有 `class` 直接通过 `styles.xxx` 一级的方式使用

```json title='styles 变量打印内容如下'
{
  active: "airList_active__G9PFh",
  select: "airList_select__1T2lI",
  select_item: "airList_select_item__1_MHW"
}
```

```html title='最终在浏览器里的组合结果'
<div class="airList_select__1T2lI">
  <div class="airList_select_item__1_MHW airList_active__G9PFh">航班</div>
  <div class="airList_select_item__1_MHW">关注</div>
</div>
```

从上可以看出 `index.module.scss` 里的样式，会被处理成一个一维 `json` 对象，然后通过层级组合添加到 `class` 里，从而实现最终样式效果，而且样式不会冲突，这个类似于 `vue` 的 [scoped](https://vue-loader.vuejs.org/zh/guide/scoped-css.html)

```html title='className多个值'
<div className={`${styles.foo} ${styles.bar}`}></div>
```

```html title='或者'
import classnames from 'classnames';

<div className={classnames('hero hero--primary', styles.heroBanner)}></div>
```

```html title='或者'
import clsx from 'clsx';

<div className={clsx('hero hero--primary', styles.heroBanner)}></div>
```