import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { signup } from "../Redux/AuthReducer/action";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = () => {
    if (name && email && password) {
      const payload = {
        name,
        email,
        password,
      };

      //   dispatch(signup(payload));
    }
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      backgroundImage={
        "linear-gradient(to right , rgba(240, 163, 188, 0.5), rgba(240, 163, 188, 1)        )"
      }
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"} textColor={"#9b45b2"}>
            Sign up Here
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <FormControl id="firstName" isRequired>
                <FormLabel textColor={"#9b45b2"}>Name</FormLabel>
                <Input type="text" onChange={(e) => setName(e.target.value)} />
              </FormControl>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel textColor={"#9b45b2"}>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel textColor={"#9b45b2"}>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"#9b45b2"}
                color={"white"}
                _hover={{
                  bg: "rgba(155, 69, 178, 0.8)",
                }}
                onClick={handleSignup}
              >
                Sign up
              </Button>
            </Stack>
            <HStack pt={6} justifyContent={"center"}>
              <Text align={"center"}>Already a user? </Text>
              <Link to="/login">
                <Text color={"#9b45b2"}>Login</Text>
              </Link>
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Signup;
