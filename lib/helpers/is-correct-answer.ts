import isEqual from 'lodash-es/isEqual';
import sortBy from 'lodash-es/sortBy';

import { AnswerType, AnswerSelectionType } from '../../domain/quiz';

const isCorrectAnswer = (value: string[], correctAnswer: AnswerType, questionType: AnswerSelectionType) =>
  questionType === 'single'
    ? value[0] === correctAnswer
    : isEqual(sortBy(value), sortBy(correctAnswer));

export default isCorrectAnswer;
