import React from "react";
import TaskDetails from "../Components/TaskDetails";
import UserDetails from "../Components/UserDetails";

const Home = () => {
  return (
    <div>
      <UserDetails />
      <TaskDetails />
    </div>
  );
};

export default Home;
