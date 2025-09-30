import { useEffect, useState } from "react";
import { peliculasApi } from "../api/api";

const usePeliculas = (limit = 20) => {
    const [Peliculas, setPeliculas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPeliculas = async () => {
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
        fetchPeliculas();
    }, [limit]);

    return { Peliculas, loading, error };
};

export default usePeliculas;



