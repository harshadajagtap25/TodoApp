import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Login = () => {
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
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel textColor={"#9b45b2"}>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Button
                // size="lg"
                bg={"#9b45b2"}
                color={"white"}
                _hover={{
                  bg: "rgba(155, 69, 178, 0.8)",
                }}
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
