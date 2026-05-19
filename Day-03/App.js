import ReactDOM from "react-dom/client";
import React from "react";

/* //React Element(s) - JS Object representation of DOM element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!🚀",
); */

/* JSX- HTML like syntax in JS
JSX is not understood by the browser, it needs to be converted to JS using a transpiler like Babel.
JSX is a syntactic sugar for React.createElement() calls. It is easier to write and read than React.createElement() calls. 
It is also more efficient than React.createElement() calls as it is transpiled to React.createElement() calls by Babel. */
const jsxHeading = <h1 id="jsx-heading">Namaste React using JSX!🚀</h1>;

//React Component - A JS function that returns a React Element (JSX)
const TitleComponent = () => {
  return <h1 id="jsx-title">Namaste React!🚀</h1>;
};

const test=<span>Test</span>;

//Component Composition - A component can be used inside another component.
const HeadingComponent = () => {
  return (
    <div id="heading-component-container">
      {console.log("JavaScript inside JSX!")}
      {test}
      <TitleComponent />
      <h1 id="heading-component">Namaste React Component!🚀</h1>
    </div>
  );
};

//Root
const root = ReactDOM.createRoot(document.getElementById("root"));

//Render
root.render(<HeadingComponent />);
