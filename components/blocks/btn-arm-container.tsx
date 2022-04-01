import { FC, MouseEvent } from 'react';

import Button from '../elements/button';
import ArmImage from '../elements/arm-image';

import layout from '../../styles/layout.module.scss';

interface BtnArmContainerProps {
  buttonLabel: string;
  onBtnClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const BtnArmContainer: FC<BtnArmContainerProps> = ({ children, onBtnClick, buttonLabel }) => (
  <div className={layout.gridContainer2ColsMd}>
    <ArmImage />
    <div className={layout.flexContainerColCentered}>
      {children}
      <Button onClick={onBtnClick}>{buttonLabel}</Button>
    </div>
  </div>
);

export default BtnArmContainer;
