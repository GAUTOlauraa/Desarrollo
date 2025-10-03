import { useEffect, useState } from "react";
import { peliculasApi } from "../api/api";

const usePeliculas = (limit = 30) => {
  const [peliculas, setPeliculas] = useState([]);
  const [pelicula, setPelicula] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPeliculas = async () => {
    try {
      setLoading(true);
      const response = await peliculasApi.get("/shows");
      setPeliculas(response.data.slice(0, limit));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const getPeliculaById = async (id) => {
    try {
      setLoading(true);
      const response = await peliculasApi.get(`/shows/${id}`);
      setPelicula(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPeliculas();
  }, [limit]);

  return { pelicula, peliculas, getPeliculaById, loading, error };
};

export default usePeliculas;
