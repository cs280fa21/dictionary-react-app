import React from "react";

function App() {
  const elm = React.createElement("div", null, "Hello React!");
  console.log(elm);
  return elm;
}

export default App;