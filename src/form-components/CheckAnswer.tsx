import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [givenAnswer, changeAnswer] = useState<string>("");
    const [indicator, changeIndicator] = useState<string>("❌");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        changeAnswer(event.target.value);
        if (event.target.value == expectedAnswer) {
            changeIndicator("✔️");
        } else {
            changeIndicator("❌");
        }
    }

    return (
        <div>
            <Form.Group controlId="formUserAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={givenAnswer} onChange={updateAnswer} />
            </Form.Group>
            <div>{indicator}</div>
        </div>
    );
}
