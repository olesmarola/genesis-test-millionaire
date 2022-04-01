import { FC } from 'react';

import layout from '../../styles/layout.module.scss';

interface LayoutProps {
  additionalClasses?: string[];
}

const Layout: FC<LayoutProps> = ({ children, additionalClasses = [] }) => (
  <div className={[layout.container, ...additionalClasses].join(' ')}>{children}</div>
);

export default Layout;
