import api from './index.js';

export const loginUser = (credentials) => {
  return api.post('/auth/login', credentials);
};

export const logoutUser = () => {
  return api.post('/auth/logout');
};