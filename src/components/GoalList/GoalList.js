import React from "react";
import "./GoalList.css";

const Goal = (props) => {
  return (
    <ul className="goal-list">
      {props.goal.map((goal) => {
        return <li key={goal.id}>{goal.text}</li>;
      })}
    </ul>
  );
};

export default Goal;
