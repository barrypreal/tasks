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

export function checkEquality(num: number): string {
    if (num == 1) {
        return "Lose";
    } else {
        return "Win";
    }
}

export function TwoDice(): JSX.Element {
    const [diceOne, setOne] = useState<number>(2);
    const [diceTwo, setTwo] = useState<number>(3);
    return (
        <div>
            <span data-testid="left-die">{diceOne}</span>
            <span data-testid="right-die">{diceTwo}</span>
            <Button onClick={() => setOne(d6)}>Roll Left</Button>
            <Button onClick={() => setTwo(d6)}>Roll Right</Button>
            {diceOne == diceTwo ? (
                <div> {checkEquality(diceOne)} </div>
            ) : (
                <div> </div>
            )}
        </div>
    );
}
