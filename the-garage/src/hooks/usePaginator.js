import { useState, useEffect } from "react";

export const usePaginator = (dataFiltered, itempage, initialPage) => {
  const [items, setItems] = useState([...dataFiltered].splice(0, itempage));

  useEffect(() => {
    // Aquí actualizamos 'items' con los nuevos datos filtrados
    setItems([...dataFiltered].splice(0, itempage));
  }, [dataFiltered]);

  //pagina actual
  const [currentPage, setCurrentPage] = useState(initialPage);
  //totalPages
  const totalPages = Math.ceil(dataFiltered.length / itempage);

  //Funciones para paginacion
  const nextHandler = () => {
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * itempage;
    if (firstIndex >= dataFiltered.length) {
      return;
    }
    setItems([...dataFiltered].splice(firstIndex, itempage));
    setCurrentPage(nextPage);
  };
  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;

    const firstIndex = prevPage * itempage;
    setItems([...dataFiltered].splice(firstIndex, itempage));
    setCurrentPage(prevPage);
  };

  const specificHandler = (specificPage) => {
    const firstIndex = (specificPage - 1) * itempage;
    setItems([...dataFiltered].splice(firstIndex, itempage));
    setCurrentPage(specificPage - 1);
  };

  const reset = () => {
    setCurrentPage(0);
  };

  return {
    totalPages,
    nextHandler,
    specificHandler,
    prevHandler,
    items,
    currentPage,
    setCurrentPage,
  };
};
