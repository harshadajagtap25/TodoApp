import { Box, Center, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { COLORS } from "./colors";

const TaskDetails = () => {
  const navigate = useNavigate();
  const handleAddTask = () => {
    navigate("/create");
  };
  return (
    <Box w={"100%"} p={"20px"} h={"auto"}>
      <HStack justifyContent={"space-between"}>
        <Heading textAlign={"left"} color={COLORS.purple}>
          My Tasks
        </Heading>
        <Center
          bgColor={COLORS.purple}
          h={"auto"}
          w={"auto"}
          justifySelf={"center"}
          pl={"20px"}
          pr={"20px"}
          borderRadius={"20px"}
          onClick={handleAddTask}
          cursor={"pointer"}
        >
          <Text color={"white"} fontSize={"20px"} fontWeight={500}>
            Add Task
          </Text>
        </Center>
      </HStack>
      <Stack mt={"20px"}>
        <HStack h={"auto"}>
          <Center
            bgColor={COLORS.pink}
            h={"50px"}
            w={"50px"}
            justifySelf={"center"}
            borderRadius={"50%"}
          >
            <Text fontSize={"10px"} fontWeight={500}>
              To Do
            </Text>
          </Center>
          <Box textAlign={"left"} h={"100%"}>
            <Text fontSize={"18px"} fontWeight={600} color={COLORS.pink}>
              To Do Tasks
            </Text>
            <Text fontSize={"12px"} color={"gray"}>
              _ tasks left, _ tasks done
            </Text>
          </Box>
        </HStack>
        <HStack h={"auto"}>
          <Center
            bgColor={COLORS.orange}
            h={"50px"}
            w={"50px"}
            justifySelf={"center"}
            borderRadius={"50%"}
          >
            <Text fontSize={"10px"} fontWeight={500}>
              Progress
            </Text>
          </Center>
          <Box textAlign={"left"} h={"100%"}>
            <Text fontSize={"18px"} fontWeight={500} color={COLORS.orange}>
              In Progress Tasks
            </Text>
            <Text fontSize={"12px"} color={"gray"}>
              _ tasks on way{" "}
            </Text>
          </Box>
        </HStack>
        <HStack h={"auto"}>
          <Center
            bgColor={COLORS.light_green}
            h={"50px"}
            w={"50px"}
            justifySelf={"center"}
            borderRadius={"50%"}
          >
            <Text fontSize={"10px"} fontWeight={500}>
              Complete
            </Text>
          </Center>
          <Box textAlign={"left"} h={"100%"}>
            <Text fontSize={"18px"} fontWeight={500} color={COLORS.light_green}>
              To Do Tasks
            </Text>
            <Text fontSize={"12px"} color={"gray"}>
              {" "}
              _ tasks done
            </Text>
          </Box>
        </HStack>
      </Stack>
    </Box>
  );
};

export default TaskDetails;
