import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => this creates an JS object
// When we rendered this object over the DOM is becomes HTML
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
console.log(heading);
// JSX (transpiled before it reaches the JS) - PARCEL - Babel
// babel is a JS compiler, it takes JSX and covert the code that browser understand (React Code)
// JSX => React.createElement

const jsxHeading = <h1 className="head">Nameste React using JSX</h1>;
// JSX is not HTML in JS, it's a HTML like syntax
// JSX code transpiled to React.createElement and then this render on DOM as a HTML code
// babel is converting JSX code to React.createElement and then this render on DOM as a HTML code

console.log(jsxHeading);

// React component
const Title = () => <h1>React component</h1>;

const elem = <span>React element 2</span>;

// React element
// const title = (
//     <h1> {elem} <br />React element 1 <br /><HeadingComponent1 /></h1>
// );

let number = 10000;

// React Functional Components
const HeadingComponent1 = () => (
  <div id="container">
    <h1 className="heading">Nameste React Functional components</h1>
    <Title />
    <h2>{number}</h2>
    <h2>{100 + 200}</h2>
    {console.log("hello")}
    {/* {title} */}
  </div>
);
// component composition

const title = (
  <h1>
    {" "}
    {elem} <br />
    React element 1 <br />
    <HeadingComponent1 /> <br />
    <HeadingComponent1 /> <br />
    {HeadingComponent1()}
  </h1>
);

const HeadingComponent2 = () => <h1>Nameste React Functional components</h1>;

// A JS function whicjh return a JSX code is a functional component, JSX is a react Element

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
root.render(jsxHeading);
root.render(<HeadingComponent1 />);
root.render(title);
// to render functional components

// it will replace all the code inside ID root
