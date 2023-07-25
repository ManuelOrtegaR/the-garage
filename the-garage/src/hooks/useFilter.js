import { useEffect, useState } from "react";

export const useFilter = (initialFilter = [], data) => {
  const [selectedFilters, setSelectedFilters] = useState(initialFilter);
  const [checkFilter, setCheckFilter] = useState({});
  const [dataFiltered, setDataFiltered] = useState(data);

  const addFilter = (filter) => {
    //  setSelectedFilters([filter, ...selectedFilters]);
    setSelectedFilters((prevFilters) => [filter, ...prevFilters]);
    // filterStart();
    console.log(selectedFilters);
  };

  const deleteFilter = (filter) => {
    const aux = [...selectedFilters];
    setSelectedFilters(aux.filter((element) => element != filter));
  };

  const clean = () => {
    setSelectedFilters([]);
    setCheckFilter({});
  };

  const filterStart2 = () => {
    console.log("entre por aqui");
    let provisional = [...dataFiltered];

    const newDataFiltered = provisional.filter((element) => {
      // return element.category === "Lubricantes";
      return selectedFilters.includes(element.category);
    });

    setDataFiltered([...newDataFiltered]);
  };

  //////////////////////////////////////

  let provisional2 = [...data];
  // let newDataFiltered = [];
  useEffect(() => {
    // let provisional = [...dataFiltered];
    let newDataFiltered = [];

    const filterStart = () => {
      console.log("entre por aqui");

      newDataFiltered = provisional2.filter((element) => {
        // return element.category === "Lubricantes";
        return (
          selectedFilters.includes(element.category) ||
          selectedFilters.includes(element.store) ||
          selectedFilters.includes(element.brand) ||
          selectedFilters.includes(element.price.toString()) ||
          selectedFilters.includes(element.rating.toString())
        );
      });
      console.log(selectedFilters);

      setDataFiltered([...newDataFiltered]);
    };
    if (selectedFilters.length < 1) setDataFiltered([...data]);
    if (selectedFilters.length > 0) filterStart();
  }, [selectedFilters]); //Esta advertencia no se porque aparece

  /////////////////////////////////

  return {
    selectedFilters: selectedFilters,
    // setSelectedFilters: selectedFilters,
    addFilter,
    deleteFilter,
    clean,
    checkFilter,
    setCheckFilter,
    dataFiltered,
  };
};
