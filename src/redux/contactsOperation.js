import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

// https://6388d566a4bb27a7f79305ee.mockapi.io/contacts;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://6388d566a4bb27a7f79305ee.mockapi.io/contacts'
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone, id }, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://6388d566a4bb27a7f79305ee.mockapi.io/contacts',
        { name, phone, id: nanoid() }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await axios.delete(
        `https://6388d566a4bb27a7f79305ee.mockapi.io/contacts/${id}`
      );
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
