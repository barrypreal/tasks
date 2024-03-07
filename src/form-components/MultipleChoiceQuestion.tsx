import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedAnswer, changeSelect] = useState(options[0]);

    function updateSelect(event: React.ChangeEvent<HTMLSelectElement>) {
        changeSelect(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="multipleChoice">
                <Form.Label>Multiple Choice</Form.Label>
                <Form.Select value={selectedAnswer} onChange={updateSelect}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {selectedAnswer == expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
