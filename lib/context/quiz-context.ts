import { createContext, useContext } from 'react';
import { QuizContextProps } from '../../domain/quiz';

export const QuizContext = createContext<QuizContextProps>({
  start: false,
  setStart: () => {},
  currentQuestion: 1,
  setCurrentQuestion: () => {},
});

export const useQuizContext = (): QuizContextProps => useContext(QuizContext);
