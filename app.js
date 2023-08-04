{
  /* <div id="parent">
    <div id="child">
        <h1>task done</h1>
        <h1>another task</h1>
    </div>
    <div id="child2">
        <h1>task done</h1>
        <h1>another task</h1>
    </div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child1" },
      [React.createElement("h1", {}, "task done 1")],
      [React.createElement("h2", {}, "another task 1")]
    ),
  ],
  [
    React.createElement(
      "div",
      { id: "child2" },
      [React.createElement("h1", {}, "task done 2")],
      [React.createElement("h2", {}, "another task 2")]
    ),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// reatct will only work inside this root id part
root.render(parent);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World"
);

console.log(heading); // object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// React.createElement creats an object and while it is rendering in DOM it convert itself from an object to a HTML DOM.
