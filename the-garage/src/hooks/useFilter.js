import { useEffect, useState } from "react";

export const useFilter = (initialFilter = [], data, searchValue) => {
  const [selectedFilters, setSelectedFilters] = useState(initialFilter);
  const [checkFilter, setCheckFilter] = useState({});
  const [dataFiltered, setDataFiltered] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  const [dataSearch2, setDataSearch2] = useState([]);
  //datasearch2=dataBase para la base de los filtros que no cambia.

  useEffect(() => {
    if (searchValue) {
      const dataWithSearchValue = data.filter((element) =>
        element.title.toLowerCase().includes(searchValue.toLowerCase())
      );

      setDataFiltered([...dataWithSearchValue]);
      setDataSearch([...dataWithSearchValue]);
      setDataSearch2([...dataWithSearchValue]);
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

  let provisional2 = searchValue ? [...dataSearch2] : [...data];
  // let provisional2 = searchValue ? [...dataFiltered] : [...data];

  useEffect(() => {
    let newDataFiltered = [];

    const filterStart = () => {
      newDataFiltered = provisional2.filter((element) => {
        return (
          selectedFilters.includes(element.category) ||
          selectedFilters.includes(element.store) ||
          selectedFilters.includes(element.brand) ||
          selectedFilters.includes(element.price.toString()) ||
          selectedFilters.includes(element.rating.toString())
        );
      });

      setDataFiltered([...newDataFiltered]);
      setDataSearch([...newDataFiltered]);
    };
    if (selectedFilters.length < 1) setDataFiltered([...data]);
    setDataSearch([...dataSearch2]);
    if (selectedFilters.length > 0) filterStart();
  }, [selectedFilters, dataSearch2]); //Esta advertencia no se porque aparece

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
  };
};
