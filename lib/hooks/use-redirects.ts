import { useRouter } from 'next/router';
import { useCallback } from 'react';

import pageRoutes from '../../constants/page-routes';

const useRedirects = () => {
  const router = useRouter();

  const goToQuiz = useCallback(() => {
    void router.push(pageRoutes.gamePageUrl);
  }, [router]);

  return { goToQuiz };
};

export default useRedirects;
