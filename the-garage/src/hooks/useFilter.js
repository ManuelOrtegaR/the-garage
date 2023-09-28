import { useEffect, useState } from "react";

export const useFilter = (initialFilter = [], data, searchValue) => {
  const [selectedFilters, setSelectedFilters] = useState(initialFilter);
  const [filtrosSeleccionadosAgrupados, setFiltrosSeleccionadosAgrupados] =
    useState({});
  const [checkFilter, setCheckFilter] = useState({});
  const [dataFiltered, setDataFiltered] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  const [dataSearch2, setDataSearch2] = useState([]);

  useEffect(() => {
    if (searchValue) {
      setDataFiltered([...data]);
      setDataSearch([...data]);
      setDataSearch2([...data]);
    } else {
      setDataFiltered([...data]);
    }
  }, [searchValue, data]);

  const addFilter = (filter) => {
    setSelectedFilters((prevFilters) => [filter, ...prevFilters]);
  };

  const deleteFilter = (filter) => {
    const aux = [...selectedFilters];
    setSelectedFilters(aux.filter((element) => element != filter));
  };

  const clean = () => {
    setSelectedFilters([]);
    setCheckFilter({});
  };

  return {
    selectedFilters: selectedFilters,

    addFilter,
    deleteFilter,
    clean,
    checkFilter,
    setCheckFilter,
    dataFiltered,
    dataSearch,
    dataSearch2,
    filtrosSeleccionadosAgrupados,
    setFiltrosSeleccionadosAgrupados,
  };
};
