import { apis } from "../../services";

export const getBooks = async ({ success, failure }) => {
  try {
    const { data } = await apis.getBooks();
    success(data);
  } catch (e) {
    failure(e.message);
  }
};

export const getAutherBooks = async ({ success, failure }) => {
  try {
    const { data } = await apis.getAutherBooks();
    success(data);
  } catch (e) {
    failure(e.message);
  }
};
