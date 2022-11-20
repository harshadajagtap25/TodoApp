import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/AuthReducer/actions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const payload = { email: email, password: password };
    dispatch(login(payload)).then((r) => {
      if (r === "LOGIN_SUCCESS") navigate("/");
    });
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      backgroundImage={
        "linear-gradient(to right , rgba(240, 163, 188, 0.5), rgba(240, 163, 188, 1))"
      }
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textColor={"#9b45b2"}>
            Login to your account
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel textColor={"#9b45b2"}>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel textColor={"#9b45b2"}>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                // size="lg"
                bg={"#9b45b2"}
                color={"white"}
                _hover={{
                  bg: "rgba(155, 69, 178, 0.8)",
                }}
                onClick={handleLogin}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
