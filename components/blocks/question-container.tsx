import { FC, useCallback, useMemo, useState, memo, MouseEvent } from 'react';
import { AnswerSelectionType, Question } from '../../domain/quiz';
import { StepWizardChildProps } from 'react-step-wizard';

import Button from '../elements/button';
import AnswerContainer from './answer-container';
import { useQuizContext } from '../../lib/context/quiz-context';
import isCorrectAnswer from '../../lib/helpers/is-correct-answer';

import layout from '../../styles/layout.module.scss';
import titles from '../../styles/titles.module.scss';

interface QuestionProps extends Partial<StepWizardChildProps> {
  question: Question;
}

const QuestionContainer: FC<QuestionProps> = ({
  question,
  nextStep,
  currentStep,
  lastStep,
  totalSteps,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const hasSelectedItems = useMemo(() => !!selectedAnswers.length, [selectedAnswers]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const isLastQuestion = useMemo(() => currentStep === totalSteps! - 1, [currentStep, totalSteps]);
  const { setCurrentQuestion, setStart } = useQuizContext();

  const buttonLabel = useMemo(() => {
    if (isCompleted) {
      if (!isLastQuestion && isCorrect) {
        return 'Go to next question!';
      }

      return 'Go to results!';
    }

    return selectedAnswers.length ? 'Check answer' : 'Select answer first';
  }, [isCompleted, isCorrect, isLastQuestion, selectedAnswers.length]);

  const onAnswerClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>, index: number) => {
      const answerSelectionType = question.answerSelectionType as AnswerSelectionType;
      const indexString = String(index);

      if (answerSelectionType === 'single') {
        if (selectedAnswers.includes(indexString)) {
          setSelectedAnswers([]);
        } else {
          setSelectedAnswers([indexString]);
        }
      }

      if (answerSelectionType === 'multiple') {
        if (selectedAnswers.includes(indexString)) {
          setSelectedAnswers(selectedAnswers.filter((a) => a !== indexString));
        } else {
          setSelectedAnswers([...selectedAnswers, indexString]);
        }
      }
    },
    [question.answerSelectionType, selectedAnswers]
  );

  const checkAnswer = useCallback(() => {
    setIsCompleted(true);

    if (
      isCorrectAnswer(
        selectedAnswers.map((a) => String(+a + 1)),
        question.correctAnswer,
        question.answerSelectionType as AnswerSelectionType
      ) &&
      !isLastQuestion
    ) {
      setIsCorrect(true);
    }
  }, [isLastQuestion, question.answerSelectionType, question.correctAnswer, selectedAnswers]);

  const onComplete = useCallback(() => {
    setSelectedAnswers([]);
    setIsCompleted(false);
    setIsCorrect(false);

    if (isCorrect && !isLastQuestion) {
      setCurrentQuestion(currentStep! + 1);
      nextStep?.();

      return;
    }

    setStart(false);
    lastStep?.();
  }, [currentStep, isCorrect, isLastQuestion, lastStep, nextStep, setCurrentQuestion, setStart]);

  return (
    <div className={layout.quizContainer}>
      <h1 className={[titles.title, titles.titleQuestion, layout.quizContainerQuestion].join(' ')}>
        {question.question}
      </h1>

      <div className={layout.quizContainerAnswers}>
        {question.answers.map((answer, index) => (
          <AnswerContainer
            disabled={isCompleted}
            selected={selectedAnswers.includes(String(index))}
            wrong={isCompleted && !question.correctAnswer.includes(String(index + 1))}
            correct={isCompleted && question.correctAnswer.includes(String(index + 1))}
            onClick={onAnswerClick}
            index={index}
            label={answer}
            key={answer}
          />
        ))}
        <div className={layout.quizContainerButtonContainer}>
          <Button disabled={!hasSelectedItems} onClick={isCompleted ? onComplete : checkAnswer}>
            {buttonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(QuestionContainer);
