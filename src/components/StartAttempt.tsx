import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, changeAttempts] = useState<number>(4);
    const [inProgress, changeState] = useState<boolean>(false);

    function startQuiz(): void {
        changeAttempts(numAttempts - 1);
        changeState(true);
    }

    return (
        <div>
            <span>{numAttempts}</span>
            <Button
                onClick={() => startQuiz()}
                disabled={inProgress || numAttempts == 0}
            >
                Start Quiz
            </Button>
            <Button onClick={() => changeState(false)} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => changeAttempts(numAttempts + 1)}
                disabled={inProgress}
            >
                Mulligan
            </Button>
        </div>
    );
}
