import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function useAttempt(): void {
        setAttemptsLeft(attemptsLeft - 1);
    }

    function gainAttempts(): void {
        const amount = parseInt(requestedAttempts);
        if (!isNaN(amount)) {
            setAttemptsLeft(attemptsLeft + amount);
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>

            <p>Attempts Left: {attemptsLeft}</p>

            <input
                type="number"
                value={requestedAttempts}
                onChange={(event) => {setRequestedAttempts(event.target.value)}}
            />

            <Button onClick={useAttempt} disabled={attemptsLeft === 0}>
                use
            </Button>

            <Button onClick={gainAttempts}>
                gain
            </Button>
        </div>
    );
}
