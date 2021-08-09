import Axios from "axios";

const api = (endPoint, data) => {
  endPoint.data = data;
  switch (endPoint.type) {
    case "GET":
      return axiosGet(endPoint);
    case "POST":
      return axiosPost(endPoint);
    default:
      break;
  }
};

export default api;

export const axiosGet = async ({
  address: route,
  data,
  guarded: isGuarded,
}) => {
  return await Axios.get(
    route + (data ? data : ""),
    isGuarded
      ? {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      : null
  );
};

export const axiosPost = async ({
  address: route,
  data,
  guarded: isGuarded,
}) => {
  return await Axios.post(
    route,
    data,
    isGuarded
      ? {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      : null
  );
};
