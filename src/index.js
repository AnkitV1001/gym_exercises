// it is the file that we connect to our DOM
import React from "react";
import ReactDOM from "react-dom"; // Corrected import
import App from './App';

const root = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    root
);
