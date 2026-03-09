import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz() {
        setInProgress(true);
        setAttempts((prev) => Math.max(prev - 1, 0));
    }

    function stopQuiz() {
        setInProgress(false);
    }

    function mulligan() {
        setAttempts((prev) => prev+1);
    }
    return (
        <div>
            <p>Attempts remaining: {attempts}</p>
            <Button onClick={startQuiz}
            disabled={inProgress || attempts === 0}
            className="me-2"
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress} className="me-2">
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
