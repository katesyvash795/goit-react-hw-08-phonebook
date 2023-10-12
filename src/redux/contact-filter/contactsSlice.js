import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { logOut } from 'redux/auth/operations';
import { fetchContacts, addContact, deleteContact } from './operation';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const { createSlice } = require('@reduxjs/toolkit');
const { nanoid } = require('nanoid');

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    id: nanoid(),
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      state.id=nanoid();
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
      state.id=nanoid();
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.id=nanoid();
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [logOut.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
      state.id= nanoid();
    },
  },
});

export const contactsReducer= ContactsSlice.reducer;

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['token'],
  stateReconciler: autoMergeLevel2, // Позволяет объединять сохраненное состояние и текущее состояние
};


export const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);