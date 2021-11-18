const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h3", {}, breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
