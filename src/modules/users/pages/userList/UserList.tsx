import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../../../store/slices/user.slice";

const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>UserList</h1>
    </div>
  );
};

export default UserList;
