import React from "react";

import "./NewGoal.css";

const NewGoal = (props) => {
  const addGoalHandler = (event) => {
    event.preventDefault();
    const newGoal = {
      id: Math.random().toString(),
      text: "New goal",
    };
    props.onAddGoal(newGoal);
  };
  return (
    <form className="add-goal" onSubmit={addGoalHandler}>
      <input type="text" />
      <button type="submit"> Add Goal</button>
    </form>
  );
};

export default NewGoal;
