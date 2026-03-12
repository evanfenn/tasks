import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    return (
        <div>
            <h3>Check Answer</h3>

            <input
                type="text"
                value={userAnswer}
                onChange={(event) => {setUserAnswer(event.target.value)}}
            />

            <span>{userAnswer === expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}
