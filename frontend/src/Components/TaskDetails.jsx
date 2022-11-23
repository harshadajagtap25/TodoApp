import { Box, Center, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getTodo } from "../Redux/AppReducer/actions";
import { getData } from "../Utils/localStorage";
import { COLORS } from "./colors";

const TaskDetails = () => {
  const token = getData("todoApp_token");
  const todos = useSelector((store) => store.AppReducer.todos);
  const [todoTask, setTodoTask] = useState("");
  const [inProgressTask, setInProgressTask] = useState("");
  const [doneTask, setDoneTask] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleAddTask = () => {
    navigate("/create");
  };

  const handleGetTodos = () => {
    dispatch(getTodo(token));
    console.log(todos);
    if (todos.length > 0) {
      let todo = todos.filter((t) => t.status === "todo");
      todo && setTodoTask(todo);
      let progress = todos.filter((t) => t.status === "in-progress");
      progress && setInProgressTask(progress);
      let done = todos.filter((t) => t.status === "done");
      done && setDoneTask(done);
    }
  };

  useEffect(() => {
    handleGetTodos();
  }, [todos.length]);
  return (
    <Box
      w={"100%"}
      p={"20px"}
      h={"auto"}
      mt={"20px"}
      backgroundImage={
        "linear-gradient(to right , rgba(112, 190, 81, 0.2   ), rgba(112, 190, 81, 0.5))"
      }
      borderRadius={"20px"}
    >
      <HStack justifyContent={"space-between"}>
        <Heading textAlign={"left"} color={COLORS.purple}>
          <Link to="alltasks">My Tasks</Link>
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
              {todoTask.length} tasks left, {doneTask.length} tasks done
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
              {inProgressTask.length} tasks on way
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
              Done Tasks
            </Text>
            <Text fontSize={"12px"} color={"gray"}>
              {doneTask.length} tasks done
            </Text>
          </Box>
        </HStack>
      </Stack>
    </Box>
  );
};

export default TaskDetails;
