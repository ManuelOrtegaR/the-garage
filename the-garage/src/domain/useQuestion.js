import { getQuestionById } from '../api/contact';
import useSWR from 'swr';

export const useQuestion = ({ id }) => {
  const { data, error, isLoading } = useSWR(`/consultas/${id}`, () =>
    getQuestionById({ id }),
  );
  return { data, isLoading, error };
};
