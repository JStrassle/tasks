import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [running, setRunning] = useState<boolean>(false);
    function attempts(): void {
        setAttempt(attempt - 1);
        setRunning(!running);
    }
    const startQuiz = (
        <div>
            {attempt}
            <Button onClick={attempts} disabled={running || attempt === 0}>
                Start Quiz
            </Button>
        </div>
    );
    const stopQuiz = (
        <div>
            <Button onClick={() => setRunning(!running)} disabled={!running}>
                Stop Quiz
            </Button>
        </div>
    );
    const Mulligan = (
        <div>
            <Button onClick={() => setAttempt(attempt + 1)} disabled={running}>
                Mulligan
            </Button>
        </div>
    );
    const allParts = (
        <div>
            {startQuiz} {stopQuiz} {Mulligan}
        </div>
    );
    return allParts;
}
