import { FC, MouseEvent } from 'react';

import Button from '../elements/button';
import ArmImage from '../elements/arm-image';

import layout from '../../styles/layout.module.scss';

interface BtnArmContainerProps {
  buttonLabel: string;
  onBtnClick: (e: MouseEvent<HTMLButtonElement>) => void;
  error?: string;
}

const BtnArmContainer: FC<BtnArmContainerProps> = ({
  children,
  onBtnClick,
  buttonLabel,
  error,
}) => (
  <div className={layout.gridContainer2ColsMd}>
    <ArmImage />
    <div className={layout.flexContainerColCentered}>
      {children}
      <Button disabled={!!error} onClick={onBtnClick}>
        {buttonLabel}
      </Button>
      {error && <div className="error">{error}</div>}
    </div>
  </div>
);

export default BtnArmContainer;
