import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 key="h2">Namaste React</h1>;
const HeaderComponent = () => {
  return (
    <div>
      <h1>Foodie's App</h1>
      <h2>Welcome here everyone</h2>
    </div>
  );
};
const HeaderComponent2 = () => (
  <div>
    {console.log("any JS code")}
    <h1>Foodie's App</h1>
    <h2>Welcome here everyone</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent2 />);
