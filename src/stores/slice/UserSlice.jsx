import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      // console.log(action.payload);
    },
    removeUser(state, action) {
      // console.log('hi ' + action.payload);
      state.splice(action.payload, 1);
      // splice method will delete perticuler element from an array. Here first parameter is id which we are getting from store (i,e action.payload) and second parameter is how many elements has to be deleted. (if we pass 3 then three elements will get deleted ) 
    },
    deleteUsers(state, action) {
      //to delete all users
    },
  },
});
// console.log(userSlice);
// console.log(userSlice.actions);
export default userSlice.reducer;
export const { addUser, removeUser, deleteUsers } = userSlice.actions ;
