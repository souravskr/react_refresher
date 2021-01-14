import React, { useState } from "react";
import "./App.css";
import "./components/GoalList/GoalList";
import Goal from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {
  const [goals, setGoals] = useState([
    { id: "cg1", text: "Focus on everything" },
    { id: "cg2", text: "Study well" },
    { id: "cg3", text: "Do all projects" },
  ]);

  const newGoalHandler = (newGoal) => {
    setGoals(goals.concat(newGoal));
  };

  return (
    <div className="course-goal">
      <h1>This is a React App</h1>
      <h3>Course Goals</h3>
      <NewGoal onAddGoal={newGoalHandler} />
      <Goal goal={goals} />
    </div>
  );
};

export default App;
