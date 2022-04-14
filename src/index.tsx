import ReactDOM from 'react-dom';
import React from 'react'
import {App} from "./App";

const div = document.createElement('div')
document.body.appendChild(div)

ReactDOM.render(<App />, document.body);