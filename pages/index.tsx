import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '../components/elements/layout';
import BtnArmContainer from '../components/blocks/btn-arm-container';
import useRedirects from '../lib/hooks/use-redirects';

import layout from '../styles/layout.module.scss';
import titles from '../styles/titles.module.scss';

// to avoid repetition
const title = `Who wants to be \na millionaire?`;

const StartPage: NextPage = () => {
  const { goToQuiz } = useRedirects();

  return (
    <Layout additionalClasses={[layout.containerGradientBg, layout.containerCenter]}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Head>
      <BtnArmContainer buttonLabel="Start" onBtnClick={() => goToQuiz()}>
        <h1 className={[titles.title, titles.titleMain].join(' ')}>{title}</h1>
      </BtnArmContainer>
    </Layout>
  );
};

export default StartPage;
