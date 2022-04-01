import { FC } from 'react';

import layout from '../../styles/layout.module.scss';

interface ValueContainerProps {
  value: string;
  inactive?: boolean;
  active?: boolean;
}

const MoneyValueContainer: FC<ValueContainerProps> = ({
  value,
  inactive = false,
  active = false,
}) => (
  <div
    className={[
      layout.moneyContainerListValue,
      inactive && layout.moneyContainerListValueInactive,
      active && layout.moneyContainerListValueActive,
    ].join(' ')}
  >
    <svg viewBox="0 0 376 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M69 20H0M376 20h-69" stroke="#D0D0D8" />
      <path
        d="M90.287.5h195.426c3.413 0 6.649 1.516 8.834 4.138L307.349 20l-12.802 15.362a11.499 11.499 0 0 1-8.834 4.138H90.287a11.5 11.5 0 0 1-8.834-4.138L68.65 20 81.453 4.638A11.5 11.5 0 0 1 90.287.5Z"
        fill="#fff"
        stroke="#D0D0D8"
      />
    </svg>
    <span>{value}</span>
  </div>
);

export default MoneyValueContainer;
