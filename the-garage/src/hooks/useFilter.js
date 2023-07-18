import { useState } from "react";

export const useFilter = (initialFilter = []) => {
  const [selectedFilters, setSelectedFilters] = useState(initialFilter);

  const addFilter = (filter) => {
    setSelectedFilters([filter, ...selectedFilters]);
  };

  const deleteFilter = (filter) => {
    const aux = [...selectedFilters];
    setSelectedFilters(aux.filter((element) => element != filter));
  };

  const clean = () => {
    setSelectedFilters([]);
  };
  return {
    selectedFilters: selectedFilters,
    setSelectedFilters: selectedFilters,
    addFilter,
    deleteFilter,
    clean,
  };
};
