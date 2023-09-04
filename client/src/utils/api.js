import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "https://localhost:8000",
});

export const getAllProperties = async () => {
  try {
    const response = await api.get("/residency/allresd");
    if (response.data === 400 || response.data === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};
