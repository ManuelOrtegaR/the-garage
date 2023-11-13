import useSWR from 'swr';

import { getQuestions } from '../api/contact';

export const useQuestions = () => {
  const { data, error, isLoading } = useSWR(`/consultas`, () => getQuestions());
  return { data, isLoading, error };
};
