import { FC, memo } from 'react';

import MoneyValueContainer from '../elements/money-value-container';
import Hamburger from './hamburger';
import { useQuizContext } from '../../lib/context/quiz-context';

import moneyList from '../../api/game-config/money-list.json';

import layout from '../../styles/layout.module.scss';

const MoneyContainer: FC = () => {
  const { currentQuestion, start } = useQuizContext();

  if (!start) {
    return null;
  }

  return (
    <div className={layout.moneyContainer}>
      <input type="checkbox" />
      <Hamburger />
      <div className={layout.moneyContainerMenu}>
        <ul className={layout.moneyContainerList}>
          {moneyList
            .map((value: string, index: number) => (
              <MoneyValueContainer
                active={index + 1 === currentQuestion}
                inactive={index + 1 < currentQuestion}
                value={value}
                key={value}
              />
            ))
            .reverse()}
        </ul>
      </div>
    </div>
  );
};

export default memo(MoneyContainer);
