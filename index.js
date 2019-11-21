import { render } from "react-dom";
import React from "react";
import App from "./src/components/App";

const containerEl = document.getElementById("container");

render(<App />, containerEl);