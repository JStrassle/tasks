import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [edit, setEdit] = useState<boolean>(false);
    function updateEditState(event: ChangeEvent) {
        setEdit(event.target.checked);
    }
    function updateIsStudent(event: ChangeEvent) {
        setIsStudent(event.target.checked);
    }
    function updateName(event: ChangeEvent) {
        setName(event.target.value);
    }
    return (
        <div>
            <div>
                <div>
                    <h3>Edit Mode</h3>
                    <Form.Check
                        type="switch"
                        id="is-switch-on"
                        label="Edit Mode?               "
                        checked={edit}
                        onChange={updateEditState}
                    />
                </div>
                <div>
                    {edit && (
                        <Form.Check
                            type="switch"
                            id="is-student"
                            label="Student?"
                            checked={isStudent}
                            onChange={updateIsStudent}
                        />
                    )}
                </div>
                <div>
                    {edit && (
                        <Form.Group controlId="changeTextBox">
                            <Form.Label>Change Name:</Form.Label>
                            <Form.Control
                                type="string"
                                value={name}
                                onChange={updateName}
                            />
                        </Form.Group>
                    )}
                </div>
                <div>
                    {name} {isStudent ? "is a student" : "is not a student"}
                </div>
            </div>
        </div>
    );
}
