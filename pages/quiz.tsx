import { useState } from 'react';
import { NextPage } from 'next';

import Layout from '../components/elements/layout';
import MoneyContainer from '../components/blocks/money-container';
import Quiz from '../components/quiz';
import { QuizContext } from '../lib/context/quiz-context';

import questionsList from '../api/game-config/questions-list.json';

const QuizPage: NextPage = () => {
  const [start, setStart] = useState<boolean>(true);
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);

  return (
    <QuizContext.Provider
      value={{
        start,
        setStart,
        currentQuestion,
        setCurrentQuestion,
      }}
    >
      <Layout>
        <Quiz questions={questionsList} />
        <MoneyContainer />
      </Layout>
    </QuizContext.Provider>
  );
};

export default QuizPage;
