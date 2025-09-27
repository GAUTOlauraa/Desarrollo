import { useState } from "react";


export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const register = async (data) => {
    try {
      //setLoading(true)
      setError(null);

      const response = await api.post("/users/register", data);
      if (response.data.msg) router.replace("/login");
    } catch (err) {
      setError(err.response?.data?.error || err.message);
      throw err;
    }
  };

  const login = async (data) => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.post("/users/login", data);
      setUser(response.data.user);
      setToken(response.data.token);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.error || err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return { user, token, loading, error, register, login, logout };
};
