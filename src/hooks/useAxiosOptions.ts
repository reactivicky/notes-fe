import { type AxiosRequestConfig } from "axios";
import useAuth from "./useAuth";

const useAxiosOptions = () => {
  const { auth } = useAuth();
  const axiosOptions: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${auth.accessToken}`,
    },
  };
  return axiosOptions;
};

export default useAxiosOptions;
