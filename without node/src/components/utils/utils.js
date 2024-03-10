import axios from 'axios';

export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const getPagesArray = (totalCount, limit) => {
  let result = [];
  for (let i = 0; i < totalCount; i++) {
    result.push(i + 1);
  }
  return result;
};

export const makeRequest = async (url, config) => {
  try {
    return await axios.get(url, config);
  } catch (error) {
    if (error?.message?.includes?.('CORS')) {
      return axios.get(url, config);
    }

    throw error;
  }
};
