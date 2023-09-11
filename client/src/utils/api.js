import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const getAllProperties = async () => {
  try {
    const response = await api.get("/residency/allresd", {
      timeout: 20 * 1000,
    });
    if (response.data === 400 || response.data === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const getProperty = async (id) => {
  try {
    const response = await api.get(`/residency/${id}`, {
      timeout: 10 * 1000,
    });
    if (response.data === 400 || response.data === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const createUser = async (email, token) => {
  try {
    await api.post(
      `/user/register`,
      { email: email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error(error);
  }
};

export const bookVisit = async (date, propertyId, email, token) => {
  try {
    await api.post(
      `/user/bookVisit/${propertyId}`,
      {
        email,
        id: propertyId,
        date: dayjs(date).format("DD/MM/YYYY"),
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, please try again");
    throw error;
  }
};

export const removeBooking = async (id, email, token) => {
  console.log("id", id);
  try {
    await api.post(
      `/user/cancelBooking/${id}`,
      {
        email: email,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, please try again later!");
    throw error;
  }
};

export const toFav = async (id, email, token) => {
  try {
    await api.post(
      `/user/addFavourite/${id}`,
      {
        email: email,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, please try again later");
    throw error;
  }
};
