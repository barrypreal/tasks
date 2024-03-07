import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEdit, changeMode] = useState<boolean>(false);
    const [userName, changeName] = useState<string>("Your Name");
    const [isStudent, changeStatus] = useState<boolean>(true);

    function setName(event: React.ChangeEvent<HTMLInputElement>) {
        changeName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        changeStatus(event.target.checked);
    }

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        changeMode(event.target.checked);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="is-edit-mode"
                label="Edit"
                checked={isEdit}
                onChange={updateEdit}
            />
            {!isEdit ? (
                `${userName} is ${!isStudent ? "not" : ""} a student`
            ) : (
                <div>
                    <Form.Group controlId="formUserName">
                        <Form.Label>Enter your name:</Form.Label>
                        <Form.Control value={userName} onChange={setName} />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student"
                        label="Student"
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                </div>
            )}
        </div>
    );
}
