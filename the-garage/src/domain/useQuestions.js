import { getQuestions } from '../api/contact';
import useSWR from 'swr';

export const useQuestions = () => {
  const { data, error, isLoading } = useSWR(`/consultas`, () => getQuestions());
  return { data, isLoading, error };
};
