import { FC, useCallback, useMemo } from 'react';
import Head from 'next/head';
import { StepWizardChildProps } from 'react-step-wizard';

import BtnArmContainer from './blocks/btn-arm-container';
import Layout from './elements/layout';
import { useQuizContext } from '../lib/context/quiz-context';

import moneyList from '../api/game-config/money-list.json';

import titles from '../styles/titles.module.scss';
import layout from '../styles/layout.module.scss';

const Result: FC<Partial<StepWizardChildProps>> = ({ firstStep }) => {
  const { currentQuestion, setStart, setCurrentQuestion } = useQuizContext();
  const earnedCount = useMemo(() => moneyList[currentQuestion - 2] || '$0', [currentQuestion]);

  const onTryAgainClick = useCallback(() => {
    setStart(true);
    setCurrentQuestion(1);
    firstStep?.();
  }, [firstStep, setCurrentQuestion, setStart]);

  return (
    <Layout additionalClasses={[layout.containerCenter, layout.containerInner]}>
      <Head>
        <title>Quiz Results</title>
        <meta name="description" content="Result page" />
      </Head>
      <BtnArmContainer buttonLabel="Try again" onBtnClick={onTryAgainClick}>
        <h1 className={[titles.title, titles.titleResult].join(' ')}>Total score:</h1>
        <h2 className={[titles.title, titles.titleScore].join(' ')}>{earnedCount} earned</h2>
      </BtnArmContainer>
    </Layout>
  );
};

export default Result;
