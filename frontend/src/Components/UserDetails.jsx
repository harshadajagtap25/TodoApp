import {
  Box,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../Redux/AuthReducer/actions";
import { getData } from "../Utils/localStorage";
import { COLORS } from "./colors";
import { FaArrowLeft } from "react-icons/fa";

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

  return (
    <Box
      p={"25px"}
      h={"auto"}
      backgroundImage={
        "linear-gradient(to right , rgba(235, 107, 64, 0.5), rgba(235, 107, 64, 1))"
      }
      borderBottomLeftRadius={"20px"}
      borderBottomRightRadius={"20px"}
    >
      <Box>
        <FaArrowLeft color={COLORS.purple} />
      </Box>
      <Box w={"80%"} m={"auto"}>
        <HStack justifyContent={"space-between"}>
          <Box>
            <Image
              borderRadius="full"
              boxSize="100px"
              src="https://cdn.pixabay.com/photo/2015/10/18/20/15/woman-995164_1280.png"
              alt="DP"
            />
          </Box>
          <Stack>
            <Box>
              <Heading textAlign={"left"} color={COLORS.purple}>
                {details.name}
              </Heading>
            </Box>
            <Box>
              <Text
                textAlign={"left"}
                fontSize={"13px"}
                mt={"-10px"}
                color={"white"}
              >
                {details.email}
              </Text>
            </Box>
          </Stack>
        </HStack>
      </Box>
    </Box>
  );
};

export default UserDetails;
