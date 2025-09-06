import { useState } from "react";
import api from "../app/api/api";
export const useAuth = () => {
    const [error, setError] = useState(null);
    //const [loading, setLoading] = useState(true);

    const register = async (data) => {
        try {
            //setLoading(true)
            setError(null)

            const response = await api.post("/users/register", data);
            if (response.data.msg) router.replace("/login")
        } catch (err) {
            setError(err.response?.data?.error || err.message)
            throw err;
        }
    }

    return{register, error};
}