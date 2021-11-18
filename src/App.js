import React from 'react';
import { render } from 'react-dom'
import  Pet  from './Pet';

const App = () => {
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Boob",
  //     animal: "Dog",
  //     breed: "haveneese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "cat",
  //     animal: "Cat",
  //     breed: "sphinx",
  //   }),
  //   React.createElement(Pet, {
  //     name: "dudit",
  //     animal: "Hen",
  //     breed: "Chicken",
  //   })
  // );
  return(
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Bob" animal="dog" breed="haveneese"/>
      <Pet name="Cat" animal="cat" breed="catter"/>
      <Pet name="doro" animal="hen" breed="checken"/>
    </div>
  )
};

render(<App />, document.getElementById("root"));
