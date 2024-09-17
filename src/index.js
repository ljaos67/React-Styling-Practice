//Create a React app from scratch.
import React from "react";
import ReactDom from "react-dom";

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
const d = new Date("September 16, 2024 19:03:00");

const hour = d.getHours();

let greeting = "blank";

const greetingColor = {
  color: "black",
};

if (hour >= 0 && hour < 12) {
  greeting = "Good Morning";
  greetingColor.color = "red";
} else if (hour >= 12 && hour < 18) {
  greeting = "Good Afternoon";
  greetingColor.color = "green";
} else {
  greeting = "Good Night";
  greetingColor.color = "blue";
}
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
ReactDom.render(
  <h1 className="heading" style={greetingColor}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
