// app.js for first 2 videos

import React from "react";
import ReactDOM from "react-dom/client";

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
    
    // app.js for first 2 videos


    // index.html first 2 videos
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>My First Parcel App</title>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <div id="header">
      <h1>Chetan is here</h1>
    </div>
    <h1>Hello top of root</h1>
    <div id="root">
      <h1>hello inside root</h1>
    </div>
    <h1>Hello below of root</h1>
    <!-- <script>
      const heading = document.createElement("h1");
      heading.innerHTML = "Hello World"

      const root = document.getElementById("root");
      root.appendChild(heading);
    </script> -->
    <!-- <script src="app.js"></script> -->
    <!-- <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script> -->
    <script type="module" src="/App.js"></script>
    <!-- order of CDN files should always before app.js file -->
  </body>
</html>
// index.js first 2 videos