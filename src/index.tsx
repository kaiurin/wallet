import * as React from "react";
import * as ReactDOM from "react-dom";

import {Wallets} from "./components/App";

import "./styles/style.scss";


const ROOT = document.querySelector(".container");

ReactDOM.render(<Wallets/>, ROOT);

