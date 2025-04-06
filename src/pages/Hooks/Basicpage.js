// Create this file: BasicHooksPage.js
import React from "react";
import { Counter, FuncCounter } from "./hooksdef";

function BasicHooksPage({ Mainpage }) {
  return (
    <div>
      <h3>{Mainpage}</h3>
      <Counter />
      <FuncCounter />
    </div>
  );
}

export default BasicHooksPage;
