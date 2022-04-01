import { FC, useMemo } from 'react';
import StepWizard from 'react-step-wizard';

import Result from './result';
import QuestionContainer from './blocks/question-container';

import { Question } from '../domain/quiz';

import { wizardTransitions } from '../constants/step-wizzard';

import layout from '../styles/layout.module.scss';

interface QuizProps {
  questions: Question[];
}

const Quiz: FC<QuizProps> = ({ questions }) => {
  const questionsSteps = useMemo(() => {
    const mappedQuestions = questions.map((question) => (
      <QuestionContainer question={question} key={question.question} />
    ));
    mappedQuestions.push(<Result key="result" />);

    return mappedQuestions;
  }, [questions]);

  return (
    <div className={layout.wizardContainer}>
      <StepWizard transitions={wizardTransitions}>{questionsSteps}</StepWizard>
    </div>
  );
};

export default Quiz;
