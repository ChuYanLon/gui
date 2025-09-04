import React, { Suspense } from 'react';
import { theme } from 'antd';

import useLocale from '../../hooks/useLocale';
import Group from './components/Group';
import PreviewBanner from './components/PreviewBanner';

const ComponentsList = React.lazy(() => import('./components/ComponentsList'));

const locales = {
  cn: {
    assetsTitle: '组件丰富，选用自如',
    assetsDesc: '大量实用组件满足你的需求，灵活定制与拓展',
    designTitle: '设计语言与研发框架',
    designDesc: '配套生态，让你快速搭建网站应用',
  },
  en: {
    assetsTitle: 'Rich components',
    assetsDesc: 'Practical components to meet your needs, flexible customization and expansion',
    designTitle: 'Design and framework',
    designDesc: 'Supporting ecology, allowing you to quickly build website applications',
  },
};

const Homepage: React.FC = () => {
  const [locale] = useLocale(locales);
  const { token } = theme.useToken();
  return (
    <section>
      <PreviewBanner></PreviewBanner>
      <div>
        {/* 组件列表 */}
        <Group
          background={token.colorBgElevated}
          collapse
          title={locale.assetsTitle}
          description={locale.assetsDesc}
          id="design"
        >
          <Suspense fallback={null}>
            <ComponentsList />
          </Suspense>
        </Group>
      </div>
    </section>
  );
};

export default Homepage;
