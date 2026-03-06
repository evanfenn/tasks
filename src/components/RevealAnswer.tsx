import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [showAnswer, setShowAnswer] = useState<boolean>(false);

    function toggleAnswer() {
        setShowAnswer(!showAnswer);
    }
    return (
        <div>
            <Button onClick={toggleAnswer}>Reveal Answer</Button>
            {showAnswer && <p>42</p>}
        </div>
    );
}
