import React from 'react';
import { render } from 'react-dom'
import  Pet  from './Pet';

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Boob",
      animal: "Dog",
      breed: "haveneese",
    }),
    React.createElement(Pet, {
      name: "cat",
      animal: "Cat",
      breed: "sphinx",
    }),
    React.createElement(Pet, {
      name: "dudit",
      animal: "Hen",
      breed: "Chicken",
    })
  );
};

render(React.createElement(App), document.getElementById("root"));
