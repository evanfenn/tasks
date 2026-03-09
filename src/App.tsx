import React from "react";
import "./App.css";
import udelbluehen from "./images/udelbluehen.png";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

 import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
 import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
 import { CycleHoliday } from "./components/CycleHoliday";
 import { Counter } from "./components/Counter";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "green" }}>
                <h1>
                    Hello World Evan Fennemore UD CISC275 with React Hooks and
                    TypeScript
                </h1>
            </header>
            <hr></hr>
            <hr />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <Container>
                <Row>
                    <Col
                        style={{
                            width: "100px",
                            height: "150px",
                            backgroundColor: "red",
                        }}
                    >
                        <ul>
                            <li>Evan</li>
                            <li>Fennemores</li>
                            <li>List</li>
                        </ul>
                    </Col>

                    <Col
                        style={{
                            width: "100px",
                            height: "150px",
                            backgroundColor: "red",
                        }}
                    >
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                    </Col>

                    <Col
                        style={{
                            width: "100px",
                            height: "150px",
                            backgroundColor: "red",
                        }}
                    >
                        <img
                            src={udelbluehen}
                            alt="A picture of Udel Bluehen"
                        />
                    </Col>
                </Row>
            </Container>

            <hr />
            <Counter />
            <hr />
            <RevealAnswer />
            <hr />
            <StartAttempt />
             <hr />
            <TwoDice />
            <hr />
            <ChangeType />
            <hr />
            <CycleHoliday />
        </div>
    );
}

export default App;
