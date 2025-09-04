import * as React from 'react';
// import { MenuOutlined } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
// import { createStyles, css } from 'antd-style';
import type { SharedProps } from './interface';

// ============================= Theme =============================
// const locales = {
//   cn: {
//     components: '组件',
//   },
//   en: {
//     components: 'Components',
//   },
// };

// ============================= Style =============================
// const useStyle = createStyles(({ token }) => {
//   const { antCls, iconCls, fontFamily, fontSize, headerHeight, colorPrimary } = token;
//
//   return {
//     nav: css`
//       height: 100%;
//       font-size: ${fontSize}px;
//       font-family: Avenir, ${fontFamily}, sans-serif;
//       border: 0 !important;
//
//       &${antCls}-menu-horizontal {
//         border-bottom: none;
//
//         & > ${antCls}-menu-item, & > ${antCls}-menu-submenu {
//           min-width: ${40 + 12 * 2}px;
//           height: ${headerHeight}px;
//           padding-inline-end: ${token.paddingSM}px;
//           padding-inline-start: ${token.paddingSM}px;
//           line-height: ${headerHeight}px;
//         }
//
//         & ${antCls}-menu-submenu-title ${iconCls} {
//           margin: 0;
//         }
//
//         & > ${antCls}-menu-item-selected {
//           a {
//             color: ${colorPrimary};
//           }
//         }
//       }
//
//       & > ${antCls}-menu-item, & > ${antCls}-menu-submenu {
//         text-align: center;
//       }
//     `,
//   };
// });

export interface NavigationProps extends SharedProps {
  isMobile: boolean;
  responsive: null | 'narrow' | 'crowded';
  directionText: string;
  onLangChange: () => void;
  onDirectionChange: () => void;
}

const HeaderNavigation: React.FC<NavigationProps> = () => {
  // const {  isMobile, responsive } = props;
  // let additional: MenuProps['items'] = [];
  //
  // const additionalItems: MenuProps['items'] = [];

  // if (isMobile) {
  //   additional = additionalItems;
  // } else if (responsive === 'crowded') {
  //   additional = [
  //     {
  //       label: <MenuOutlined />,
  //       key: 'additional',
  //       children: [...additionalItems],
  //     },
  //   ];
  // }

  // const items: MenuProps['items'] = [
  //   {
  //     label: (
  //       <Link to={utils.getLocalizedPathname('/docs/react/introduce', isZhCN, search)}>
  //         {locale.development}
  //       </Link>
  //     ),
  //     key: 'docs/react',
  //   },
  //   {
  //     label: (
  //       <Link to={utils.getLocalizedPathname('/components/overview/', isZhCN, search)}>
  //         {locale.components}
  //       </Link>
  //     ),
  //     key: 'components',
  //   },
  //   ...(additional ?? []),
  // ].filter(Boolean);

  return (
    <></>
    // <Menu
    //   mode={menuMode}
    //   selectedKeys={[activeMenuItem]}
    //   className={styles.nav}
    //   disabledOverflow
    //   items={items}
    // />
  );
};

export default HeaderNavigation;
