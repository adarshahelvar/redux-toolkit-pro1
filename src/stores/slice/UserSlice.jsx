import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {},
    removeUser(state, action) {},
    deleteUsers(state, action) {
      //to delete all users
    },
  },
});

export  { users };