import React from 'react';

import Layout from '@theme/Layout';
import BackToTopButton from '@theme/BackToTopButton'

import HomepageHero from '@site/src/components/HomepageHero'
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Home() {

  return (<Layout wrapperClassName="abc">
    {/* S 焦点区 */}
    <HomepageHero/>
    {/* E 焦点区 */}
    <main>
      {/* S 特征 */}
      <HomepageFeatures/>
      {/* S 特征 */}
    </main>
    <BackToTopButton/>
  </Layout>);
}
