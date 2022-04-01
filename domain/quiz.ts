import { Dispatch } from 'react';

export type AnswerType = string | string[];

export type AnswerSelectionType = 'single' | 'multiple';

export interface Question {
  question: string;
  answerSelectionType: string;
  answers: string[];
  correctAnswer: AnswerType;
}

export interface QuizContextProps {
  start: boolean;
  setStart: Dispatch<boolean>;
  currentQuestion: number;
  setCurrentQuestion: Dispatch<number>;
}
