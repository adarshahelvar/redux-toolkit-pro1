import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../stores/slice/UserSlice";

const DeleteAllUsers = () => {
  const dispatch = useDispatch();


    const deleteAll = () => {
      dispatch(deleteUsers());
    };

  return (
    <>
      <button onClick={() => deleteAll()}>Delete All</button>
    </>
  );
};

export default DeleteAllUsers;
