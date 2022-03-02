import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD

            <h1>This is a different header.</h1>

            <ol className="center">
                <li>Dogs</li>
                <li>Everything Else</li>
                <li>Cats</li>
            </ol>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Joshua Strassle says Hello World.
            </p>
            <Button onClick={() => console.log("Hello World!")}>
                {" "}
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <div
                        style={{
                            backgroundColor: "Red",
                            width: "50%",
                            height: "25%"
                        }}
                    >
                        <Col>This looks horrible </Col>
                    </div>
                    <div
                        style={{
                            backgroundColor: "Red",
                            width: "50%",
                            height: "25%"
                        }}
                    >
                        <Col>
                            <img
                                src="https://dogsbestlife.com/wp-content/uploads/2021/02/Weimaraner-puppies-scaled.jpeg"
                                width={200}
                                height={200}
                                className={"float-right"}
                                alt="Weim Puppies"
                            />
                        </Col>
                    </div>
                </Row>
            </Container>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
