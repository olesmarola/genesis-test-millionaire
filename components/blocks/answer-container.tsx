import { FC, useMemo, MouseEvent } from 'react';

import getAnswerLetter from '../../lib/helpers/get-answer-letter';
import buttons from '../../styles/buttons.module.scss';

interface AnswerContainerProps {
  index: number;
  selected?: boolean;
  wrong?: boolean;
  correct?: boolean;
  label: string;
  disabled?: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>, index: number) => void;
}

const AnswerContainer: FC<AnswerContainerProps> = ({
  index,
  selected = false,
  wrong = false,
  correct = false,
  disabled = false,
  onClick,
  label,
}) => {
  const answerLetter = useMemo(() => getAnswerLetter(index), [index]);

  return (
    <button
      disabled={disabled}
      className={[
        buttons.answerButton,
        selected && buttons.answerButtonSelected,
        wrong && buttons.answerButtonWrong,
        correct && buttons.answerButtonCorrect,
      ].join(' ')}
      onClick={(e) => onClick(e, index)}
    >
      <svg
        // width="100%"
        // height="100%"
        width="421"
        height="72"
        viewBox="0 0 421 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M404 36h17M0 36h17" stroke="#D0D0D8" />
        <path
          d="M49.012.5h322.976a11.5 11.5 0 0 1 9.198 4.598L404.375 36l-23.189 30.902a11.5 11.5 0 0 1-9.198 4.598H49.012a11.5 11.5 0 0 1-9.198-4.598L16.625 36 39.814 5.098A11.5 11.5 0 0 1 49.012.5Z"
          fill="#fff"
          stroke="#D0D0D8"
        />
      </svg>
      <div className={buttons.answerButtonLabel}>
        <span className={buttons.answerButtonVariant}>{answerLetter}</span>
        <span className={buttons.answerContainerLabelText}>{label}</span>
      </div>
    </button>
  );
};

export default AnswerContainer;
