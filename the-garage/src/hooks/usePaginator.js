import { useState } from 'react';

export const usePaginator = (totalData, itempage, initialPage) => {
  //pagina actual
  const [currentPage, setCurrentPage] = useState(initialPage);
  //totalPages
  const totalPages = Math.ceil(totalData / itempage);

  const nextHandler = () => {
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * itempage;
    if (firstIndex >= totalData) {
      return;
    }

    setCurrentPage(nextPage);
  };
  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;

    setCurrentPage(prevPage);
  };

  const specificHandler = (specificPage) => {
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
    currentPage,
    setCurrentPage,
    reset,
  };
};
