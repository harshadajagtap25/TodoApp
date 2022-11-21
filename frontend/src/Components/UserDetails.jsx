import { Box } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../Redux/AuthReducer/actions";
import { getData } from "../Utils/localStorage";

const UserDetails = () => {
  const dispatch = useDispatch();
  const UserEmail = getData("UserEmail");
  const token = getData("todoApp_token");
  const details = useSelector((state) => state.AuthReducer.details);

  const handleGetDetails = () => {
    dispatch(userDetails(UserEmail, token));
  };

  useEffect(() => {
    handleGetDetails();
  }, []);

  return <Box></Box>;
};

export default UserDetails;
