import { useCallback, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '../components/elements/layout';
import BtnArmContainer from '../components/blocks/btn-arm-container';
import useRedirects from '../lib/hooks/use-redirects';

import questionsList from '../api/game-config/questions-list.json';
import moneyList from '../api/game-config/money-list.json';

import layout from '../styles/layout.module.scss';
import titles from '../styles/titles.module.scss';

// to avoid repetition
const title = `Who wants to be \na millionaire?`;

const StartPage: NextPage = () => {
  const [error, setError] = useState<string>('');
  const { goToQuiz } = useRedirects();

  const validateQuestions = useCallback(() => {
    if (questionsList.length !== moneyList.length) {
      setError(
        'Questions and Money count need to be the same! Do corrections with config and reload page in order to continue.'
      );

      return;
    }

    if (moneyList.some((el) => typeof el !== 'string')) {
      setError('Please, use correct type of money value. It need to be `string` type.');

      return;
    }

    if (
      questionsList.some(
        // @ts-ignore
        (el) => el.answerSelectionType !== 'single' || el.answerSelectionType !== 'multiple'
      )
    ) {
      setError('Answer type of question need to be `single` or `multiple`');

      return;
    }

    // and many others validations...

    goToQuiz();
  }, [goToQuiz]);

  return (
    <Layout additionalClasses={[layout.containerGradientBg, layout.containerCenter]}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Head>
      <BtnArmContainer error={error} buttonLabel="Start" onBtnClick={validateQuestions}>
        <h1 className={[titles.title, titles.titleMain].join(' ')}>{title}</h1>
      </BtnArmContainer>
    </Layout>
  );
};

export default StartPage;
