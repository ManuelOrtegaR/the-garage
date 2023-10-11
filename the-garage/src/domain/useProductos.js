import { useEffect, useState } from "react";
import {
  getProducts,
  getProductsFilter,
  getProductsSearch,
} from "../api/products";
import useSWR from "swr";
import {
  generarQueryFiltros,
  objetoEstaVacio,
} from "../thegarage/components/products/utils";
import { useNavigate } from "react-router-dom";

//({ page, selectedFilters, searchValue })

export const useProductos = (
  page,
  searchValue,
  filtrosSeleccionadosAgrupados
) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataMeta, setDataMeta] = useState({});
  const [datosParaFiltros, setDatosParaFiltros] = useState([]);
  const navigate = useNavigate();

  async function cargarProductos() {
    setLoading(true);
    setError("");
    let response = null;
    let responseFiltros = null;

    try {
      if (searchValue) {
        response = await getProductsSearch(10, page, searchValue);
        responseFiltros = await getProductsSearch(100, page, searchValue);
        if (!objetoEstaVacio(filtrosSeleccionadosAgrupados)) {
          const filterquery = generarQueryFiltros(
            filtrosSeleccionadosAgrupados
          );
          navigate(
            `/productos?${filterquery}&limit=10&offset=${page}&search=${searchValue}`
          );
          response = await getProductsFilter(
            `${filterquery}+&search=${searchValue}`,
            10,
            page
          );
        }
      } else if (!objetoEstaVacio(filtrosSeleccionadosAgrupados)) {
        const filterquery = generarQueryFiltros(filtrosSeleccionadosAgrupados);
        navigate(`/productos?${filterquery}&limit=10&offset=${page}`);

        response = await getProductsFilter(filterquery, 10, page);

        // if (!objetoEstaVacio(filtrosSeleccionadosAgrupados)) {
        responseFiltros = await getProducts(100, 0);
        //}
      } else {
        response = await getProducts(10, page);

        responseFiltros = await getProducts(100, 0);
      }

      setData(response.data);
      setDataMeta(response.meta);
      setDatosParaFiltros(responseFiltros.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    cargarProductos();
  }, [page, JSON.stringify(filtrosSeleccionadosAgrupados)]);

  return { data, dataMeta, datosParaFiltros, loading, error };
};
