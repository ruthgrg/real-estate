import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "https://server-homyz.vercel.app/api",
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

export const getAllfav = async (email, token) => {
  if (!token) return;
  try {
    const response = await api.post(
      "/user/getAllfav",
      {
        email: email,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return response.data.favResd["favResidenciesID"];
  } catch (e) {
    toast.error("Something went wrong while fetching, please try again later");
    throw e;
  }
};

export const getAllBookings = async (email, token) => {
  if (!token) return;
  try {
    const response = await api.post(
      "/user/getAllBookings",
      {
        email: email,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data["bookedVisits"];
  } catch (error) {
    toast.error("Something went wrong while Fetching, please try again later");
    throw error;
  }
};

export const createResidency = async (data, token, userEmail) => {
  try {
    const residency = await api.post(
      "/residency/create",
      {
        data,
        userEmail,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return residency.data;
  } catch (error) {
    throw error;
  }
};
