import useSWR from 'swr';

import { getQuestionById } from '../api/contact';

export const useQuestion = ({ id }) => {
  const { data, error, isLoading } = useSWR(`/consultas/${id}`, () =>
    getQuestionById({ id }),
  );
  return { data, isLoading, error };
};
