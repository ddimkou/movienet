import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CircleRatingProps {
  rating: number;
}

const CircleRating = ({ rating }: CircleRatingProps) => {
  let pathColor = "#007acc";

  if (rating >= 8) {
    pathColor = "green";
  } else if (rating >= 7) {
    pathColor = "blue";
  } else {
    pathColor = "red";
  }

  return (
    <div className="circleRating">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={`${rating}`}
        styles={buildStyles({
          textSize: "30px",
          pathColor: pathColor,
          textColor: "black",
        })}
      />
    </div>
  );
};

export default CircleRating;
