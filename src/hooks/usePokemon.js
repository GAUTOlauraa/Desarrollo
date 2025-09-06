import { useEffect, useState } from "react"

const usePokemons = (limit = 20) => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                setLoading(true);
                const response = await api.get(`/pokemon?limit=${limit}`);
                setPokemons(response.data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchPokemons();
    }, [limit]);

    return { pokemons, loading, error };
};

export default usePokemons;