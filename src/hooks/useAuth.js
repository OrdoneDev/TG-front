import { useState, useEffect } from 'react';
import { loginUser, logoutUser } from '../api/authApi';

export const useAuth = () => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    const response = await loginUser(credentials);
    setUser(response.data.user);
  };

  const logout = async () => {
    await logoutUser();
    setUser(null);
  };

  return { user, login, logout };
};