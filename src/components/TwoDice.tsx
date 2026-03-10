import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [left, setLeft] = useState<number>(1);
    const [right, setRight] = useState<number>(2);

    const rollLeft = () => {setLeft(d6())};
    const rollRight = () => {setRight(d6())};

    let message = "";
    if (left === right) {
        if (left === 1) {
            message = "Lose! Snake eyes!";
        } else {
            message = "Win! You got a pair!";
        }
    }
    return (
        <div>
            <div>
                Left Die: <span data-testid="left-die">{left}</span>{" "}
                <Button onClick={rollLeft}>Roll Left</Button>
            </div>
            <div>
                Right Die: <span data-testid="right-die">{right}</span>{" "}
                <Button onClick={rollRight}>Roll Right</Button>
            </div>

            {message && <p>{message}</p>}
        </div>
    );
}
