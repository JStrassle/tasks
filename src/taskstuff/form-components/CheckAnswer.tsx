import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnser">
                <Form.Label>
                    What is the number of the first Afircan-American baseball
                    player?
                </Form.Label>
                <Form.Control
                    value={answer}
                    onChange={updateAnswer}
                    placeholder="Answer"
                />
            </Form.Group>
            <div>
                {answer === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
            </div>
        </div>
    );
}
