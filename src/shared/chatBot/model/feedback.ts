import { translate } from '@docusaurus/Translate';
import { ScoreFeedback } from '../types/api';

export const feedbackItems: { type: ScoreFeedback; text: string }[] = [
  {
    type: 'misunderstanding',
    text: translate({ message: 'Не ответил на вопрос' }),
  },
  {
    type: 'wrong_answer',
    text: translate({ message: 'Ответ неверный' }),
  },
  {
    type: 'continuous_thinking',
    text: translate({ message: 'Долго думал над ответом' }),
  },
];
