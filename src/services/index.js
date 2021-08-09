import api from "./api";
import endPoints from "./endPoints";

export const apis = {
  login: (data) => api(endPoints.login, data),
  getUserProfile: (data) => api(endPoints.getUserProfile, data),
  getBooks: (data) => api(endPoints.getBooks, data),
  getAutherBooks: (data) => api(endPoints.getAutherBooks, data),
};
