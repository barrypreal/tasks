import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [remaining, changeRemaining] = useState<number>(3);
    const [requested, changeRequested] = useState<number>(0);

    function updateRequested(event: React.ChangeEvent<HTMLInputElement>) {
        changeRequested(parseInt(event.target.value));
    }

    function updateRemaining(request: number) {
        if (!isNaN(request)) {
            changeRemaining(remaining + request);
            changeRequested(0);
            /*
            if (remaining + request < 0) {
                changeRemaining(0);
            }
            */
        }
    }

    return (
        <div>
            Attempts left:
            <div>{remaining}</div>
            <Form.Group controlId="formUserAttempts">
                <Form.Label>Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        updateRequested(event)
                    }
                />
            </Form.Group>
            <Button
                onClick={() => updateRemaining(-1)}
                disabled={remaining == 0}
            >
                use
            </Button>
            <Button onClick={() => updateRemaining(requested)}>gain</Button>
        </div>
    );
}
