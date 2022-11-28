import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { COLORS } from "../Components/colors";
import "../App.css";
import { getData } from "../Utils/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../Redux/AppReducer/actions";
import TaskItem from "../Components/TaskItem";

const AllTasks = () => {
  const token = getData("todoApp_token");
  const todos = useSelector((store) => store.AppReducer.todos);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleGetTodos = () => {
    dispatch(getTodo(token));
  };
  const handleSearchTask = (e) => {
    if (e.key === "Enter") {
      let searchResult = todos.filter((todo) => todo.title === searchText);
      console.log(searchResult);
    }
  };

  useEffect(() => {
    handleGetTodos();
  }, [todos.length]);
  const [searchBox, setSearchBox] = useState(false);
  return (
    <Box
      backgroundImage={
        "linear-gradient(to right , rgba(112, 190, 81, 0.2), rgba(112, 190, 81, 0.5))"
      }
      h={"100vh"}
      pt={"20px"}
    >
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={[2, 6]}
        w={["100%", "80%"]}
        justifyContent={"center"}
        m={"auto"}
        p={"5px"}
        bgColor={"white"}
        boxShadow={
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        }
      >
        <GridItem justifyContent={"center"} m={"auto"}>
          <Image
            borderRadius="full"
            boxSize="50px"
            src="https://cdn.pixabay.com/photo/2015/10/18/20/15/woman-995164_1280.png"
            alt="DP"
          />
        </GridItem>

        <GridItem justifyContent={"center"} m={"auto"}>
          <Heading color={COLORS.purple}>My Tasks</Heading>
        </GridItem>
        <GridItem justifyContent={"center"} m={"auto"}>
          <HStack h={"100%"}>
            <Box
              onClick={() => {
                setSearchBox(!searchBox);
              }}
              cursor={"pointer"}
            >
              <FaSearch />
            </Box>
            <Box>
              {searchBox && (
                <Input
                  variant="flushed"
                  placeholder="Serach Task"
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyUp={(e) => handleSearchTask(e)}
                />
              )}
            </Box>
          </HStack>
        </GridItem>
      </Grid>

      <Box w={"80%"} justifyContent={"center"} m={"auto"} mt={"50px"}>
        {todos.length > 0 && (
          <Grid
            templateColumns={["repeat(2, 1fr)", "repeat(4,1fr)"]}
            gap={[6, 6]}
            w={["100%", "80%"]}
            justifyContent={"center"}
            m={"auto"}
          >
            {todos.map((todo) => (
              <div key={todo._id}>
                <TaskItem todo={todo} />
              </div>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default AllTasks;
