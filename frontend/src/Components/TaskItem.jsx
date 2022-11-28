import { Box, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { COLORS } from "./colors";

const TaskItem = ({ todo }) => {
  const navigate = useNavigate();
  return (
    <GridItem
      h={"150px"}
      p={"5px"}
      pl={"10px"}
      pr={"10px"}
      boxShadow={
        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
      }
      bgColor={"white"}
    >
      <Box>
        <Text
          fontSize={["20px", "15px"]}
          color={COLORS.purple}
          fontWeight={500}
          onClick={() => {
            console.log("clicked", todo._id);
            navigate(`/task/${todo._id}`);
          }}
        >
          {todo.title}
        </Text>
      </Box>
      <Box
        h={"7px"}
        w={"100%"}
        borderRadius={"20px"}
        className={
          todo.status === "todo"
            ? "bgPink"
            : todo.status === "in-progress"
            ? "bgOrange"
            : "bgGreen"
        }
        justifyContent={"center"}
        m={"auto"}
      ></Box>

      <Box mt={"5px"} h={["50px", "60px"]}>
        <Text textAlign={"left"} fontWeight={500}>
          {todo.description}
        </Text>
      </Box>

      <Box>
        {todo.endDate && (
          <Text
            mb={"-8px"}
            color={COLORS.light_green}
            fontSize={"10px"}
            fontWeight={500}
            textAlign={"left"}
          >
            Complete by {todo.endDate}
          </Text>
        )}
      </Box>
      <Box mt={"5px"}>
        {todo.category.length > 0 &&
          todo.category.map((cat, i) => (
            <Text
              mb={"-5px"}
              color={"gray"}
              fontSize={"10px"}
              textAlign={"left"}
            >
              {cat}
            </Text>
          ))}
      </Box>
    </GridItem>
  );
};

export default TaskItem;
