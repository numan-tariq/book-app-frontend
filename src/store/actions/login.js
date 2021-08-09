import { apis } from "../../services";

export const login = async ({ values, success, failure }) => {
  try {
    const { email, password } = values;
    const { data } = await apis.login({ email, password });
    success(data);
  } catch (e) {
    failure(e.message);
  }
};
