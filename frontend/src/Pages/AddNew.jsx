import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  FormLabel,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../Components/colors";
import { createTodo } from "../Redux/AppReducer/actions";
import { getData } from "../Utils/localStorage";

const AddNew = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = getData("todoApp_token");

  const handleCreateTask = () => {
    const payload = {
      title,
      description,
      status,
      category,
      startDate,
      endDate,
    };
    // console.log(payload);
    dispatch(createTodo(payload, token)).then((r) => {
      if (r === "CREATE_TODO_SUCCESS") navigate("/");
    });
    setStatus("");
    setTitle("");
    setDescription("");
    setCategory([]);
  };

  return (
    <Box>
      <Box
        p={"25px"}
        h={"auto"}
        backgroundImage={
          "linear-gradient(to right , rgba(235, 107, 64, 0.2), rgba(235, 107, 64, 1))"
        }
        borderBottomLeftRadius={"20px"}
        borderBottomRightRadius={"20px"}
      >
        <Box cursor={"pointer"}>
          <FaArrowLeft color={COLORS.purple} />
        </Box>
        <Box w={"80%"} m={"auto"}>
          <Stack justifyContent={"space-between"}>
            <Box>
              <Heading textAlign={"left"} color={COLORS.purple}>
                Create new task
              </Heading>
            </Box>
            <Box mt={"20px"}>
              <FormLabel mb="5px" fontSize={"13px"} color={COLORS.orange}>
                Title
              </FormLabel>
              <Input
                color={"gray"}
                variant="flushed"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Box>
            <Box mt={"20px"}>
              <FormLabel mb="5px" fontSize={"13px"} color={COLORS.orange}>
                Description
              </FormLabel>
              <Textarea
                variant="flushed"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Box>
          </Stack>
        </Box>
      </Box>
      <Box p={"20px"}>
        <Box w={"90%"} justifyContent={"center"} m={"auto"}>
          <HStack justifyContent={"space-between"}>
            <Box>
              <FormLabel mb="5px" fontSize={"13px"} color={COLORS.orange}>
                Start Date
              </FormLabel>
              <Input
                color={"gray"}
                type="date"
                variant="flushed"
                onChange={(e) => setStartDate(e.target.value)}
                w={["150px", "250px"]}
              />
            </Box>
            <Box>
              <FormLabel mb="5px" fontSize={"13px"} color={COLORS.orange}>
                Start Date
              </FormLabel>
              <Input
                color={"gray"}
                type="date"
                variant="flushed"
                onChange={(e) => setEndDate(e.target.value)}
                w={["150px", "250px"]}
              />
            </Box>
          </HStack>

          <Box mt={"30px"}>
            <FormLabel as="legend" fontSize={"13px"} color={COLORS.orange}>
              Status
            </FormLabel>
            <RadioGroup
              value={status}
              onChange={(value) => {
                setStatus(value);
              }}
            >
              <Stack spacing={[5, 5]} direction="row">
                <Radio name="status" value="todo">
                  Todo
                </Radio>
                <Radio name="status" value="in-progress">
                  In-Progress
                </Radio>
                <Radio name="status" value="done">
                  Done
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box mt={"30px"}>
            <FormLabel as="legend" fontSize={"13px"} color={COLORS.orange}>
              Category
            </FormLabel>
            <CheckboxGroup
              colorScheme="green"
              onChange={(value) => {
                setCategory(value);
              }}
              value={category}
            >
              <Stack spacing={[5, 5]} direction={["row"]}>
                <Checkbox value="Officials">Official</Checkbox>
                <Checkbox value="Personal">Personal</Checkbox>
                <Checkbox value="Others">Others</Checkbox>
              </Stack>
            </CheckboxGroup>
          </Box>
        </Box>
      </Box>
      <Box mt={"20px"}>
        <Button
          size="lg"
          w={["100%", "50%"]}
          bg={COLORS.purple}
          color={"white"}
          _hover={{
            bg: "rgba(155, 69, 178, 0.8)",
          }}
          onClick={handleCreateTask}
        >
          Create Task
        </Button>
      </Box>
    </Box>
  );
};

export default AddNew;
