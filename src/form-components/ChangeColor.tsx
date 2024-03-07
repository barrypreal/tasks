import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "purple",
    "red",
    "blue",
    "green",
    "yellow",
    "pink",
    "orange",
    "violet"
];

export function ChangeColor(): JSX.Element {
    const [selectedColor, setColor] = useState<string>("purple");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="colorSelect">
                <Form.Label>Change Color</Form.Label>
                {COLORS.map((color: string) => (
                    <Form.Check
                        style={{ backgroundColor: color }}
                        key={color}
                        inline
                        type="radio"
                        name="color"
                        onChange={updateColor}
                        id="response-color"
                        label={color}
                        value={color}
                        checked={selectedColor === color}
                    />
                ))}
            </Form.Group>
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: selectedColor }}
                >
                    {selectedColor}
                </span>
                .
            </div>
        </div>
    );
}
