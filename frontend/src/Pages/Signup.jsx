import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
  Select,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { signup } from "../Redux/AuthReducer/actions";
import { COLORS } from "../Components/colors";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [alreadyExist, setAlreadyExist] = useState(false);

  const handleSignup = () => {
    if (name && email && password) {
      const payload = {
        name,
        email,
        password,
        role,
      };

      dispatch(signup(payload)).then((r) => {
        if (r === "SIGNIN_FAILURE") setAlreadyExist(true);
      });
    }
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      backgroundImage={
        "linear-gradient(to right , rgba(240, 163, 188, 0.2), rgba(240, 163, 188, 1)        )"
      }
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading
            fontSize={"4xl"}
            textAlign={"center"}
            textColor={COLORS.purple}
          >
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
            {alreadyExist && (
              <HStack>
                <Text textColor={COLORS.purple}>
                  User already exists...
                  <Text>Please login with another Mail Id</Text>
                </Text>
              </HStack>
            )}

            <HStack>
              <FormControl id="firstName" isRequired>
                <FormLabel textColor={COLORS.purple}>Name</FormLabel>
                <Input type="text" onChange={(e) => setName(e.target.value)} />
              </FormControl>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel textColor={COLORS.purple}>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel textColor={COLORS.purple}>Password</FormLabel>
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
            <Stack>
              <Select
                variant="flushed"
                placeholder="Select Role"
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Select>
            </Stack>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={COLORS.purple}
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
                <Text color={COLORS.purple}>Login</Text>
              </Link>
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Signup;
