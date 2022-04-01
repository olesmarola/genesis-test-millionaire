import { FC } from 'react';

import layout from '../../styles/layout.module.scss';

const Hamburger: FC = () => (
  <>
    <span className={layout.moneyContainerHamburger} />
    <span className={layout.moneyContainerHamburger} />
    <span className={layout.moneyContainerHamburger} />
  </>
);

export default Hamburger;
