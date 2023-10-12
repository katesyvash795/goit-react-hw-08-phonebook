import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// axios.defaults.baseURL = "https://651d3f3644e393af2d597232.mockapi.io/api/v1/";
// axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com';
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (token, thunkAPI) => {
    try {
      // Теперь можно использовать token в запросе
      const response = await axios.get("/contacts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({name,number}, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", { name,number });
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

