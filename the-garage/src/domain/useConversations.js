import useSWR from "swr";
import { getConversaciones, createConversacion } from "../api/conversacion";

export const useConversaciones = () => {
  const { data, error, isLoading, mutate } = useSWR("/profile/messages", () =>
    getConversaciones()
  );

  async function create(payload) {
    try {
      const conversacion = await createConversacion(payload);

      return conversacion;
    } catch (error) {
      console.log("errorW", error);
      return Promise.reject(error);
    }
  }

  return { data, loading: isLoading, error, actions: { create } };
};
