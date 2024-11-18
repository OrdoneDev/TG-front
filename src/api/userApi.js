import api from './index.js';

export const registerUser = (userData) => {
  return api.post('/users', userData);
};

export const updateUserProfile = (userId, profileData) => {
  return api.put(`/users/${userId}`, profileData);
};