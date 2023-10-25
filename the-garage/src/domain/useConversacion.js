import useSWR from "swr";
import { getConversacion } from "../api/conversacion";

export const useConversacion = ({ id }) => {
  const { data, error, isLoading } = useSWR(
    id ? `/conversaciones/${id}` : null,
    () => getConversacion({ id })
  );

  return { data, loading: isLoading, error };
};
