import Axios from "axios";

const getDataIleDeFrance = async () => {
  const { data: dataAll } = await Axios.get(
    `${process.env.NEXT_PUBLIC_API_BACKEND}/city`
  ).catch((error) => error.response);
  return { dataAll };
};

const getInformationRatings = async () => {
  const response = await Axios.get(
    `${process.env.NEXT_PUBLIC_API_BACKEND}/ratings`
  ).catch((error) => error.response);
  return response;
};

const getInformationRatingsPending = async () => {
  const response = await Axios.get(
    `${process.env.NEXT_PUBLIC_API_BACKEND}/ratings/pending`
  ).catch((error) => error.response);
  return response;
};

const createRating = async (data) =>
  await Axios.post(
    `${process.env.NEXT_PUBLIC_API_BACKEND}/add-rating`,
    data
  ).catch((error) => error.response);

const createUser = async (data) =>
  await Axios.post(
    `${process.env.NEXT_PUBLIC_API_BACKEND}/register`,
    data
  ).catch((error) => error.response);

const loginUser = async (data) => {
  const response = await Axios.post(
    `${process.env.NEXT_PUBLIC_API_BACKEND}/login`,
    data
  ).catch((error) => error.response);
  return response;
};

const updateStatus = async (data) => {
  const update = await Axios.put(
    `${process.env.NEXT_PUBLIC_API_BACKEND}/ratings/status`,
    data
  ).catch((error) => error.response);
  return update;
};

const redirectionJwt = async (data) => {
  await Axios.get(
    `${process.env.NEXT_PUBLIC_API_BACKEND}/login/me`,
    data
  ).catch((error) => error.response);
};

export {
  getDataIleDeFrance,
  createRating,
  createUser,
  loginUser,
  redirectionJwt,
  getInformationRatings,
  updateStatus,
  getInformationRatingsPending,
};
