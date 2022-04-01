import { FC, MouseEvent } from 'react';

import button from '../../styles/buttons.module.scss';

interface ButtonProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, onClick, disabled = false }) => {
  return (
    <button disabled={disabled} className={button.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
