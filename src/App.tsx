import React from "react";
import "./App.css";
import udelbluehen from "./images/udelbluehen.png";
import Button from "react-bootstrap/Button";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={ { backgroundColor: "green"}}>
                <h1>
                Hello World Evan Fennemore UD CISC275 with React Hooks and TypeScript
                </h1>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div className="columns">
                <div style = {{ width: "100px", height: "150px", backgroundColor: "red"}}></div>
                <div style = {{ width: "100px", height: "150px", backgroundColor: "red"}}></div>
                <div style = {{ width: "100px", height: "150px", backgroundColor: "red"}}></div>
                <ul>
                    <li>Evan</li>
                    <li>Fennemores</li>
                    <li>List</li>
                </ul>
                <Button onClick={ () => {console.log("Hello World!")}}>Log Hello World</Button>
                <img src={udelbluehen} alt ="A picture of Udel Bluehen" />
            </div>
        </div>
    );
}

export default App;
