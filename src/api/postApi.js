import api from './index';

export const createPost = (postData) => {
  return api.post('/posts', postData);
};

export const getPosts = () => {
  return api.get('/posts');
};