import React, { useState } from "react";
import { Form } from "react-bootstrap";
const COLORS = [
    "lavender",
    "palegreen",
    "teal",
    "lightcyan",
    "skyblue",
    "bisque",
    "mistyrose",
    "lightcoral",
    "hotpink",
    "gold"
];
export function ChangeColor(): JSX.Element {
    const [chosen, setChosen] = useState<string>("red");
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((colorElement: string) => (
                <Form.Check
                    key={colorElement}
                    inline
                    type="radio"
                    name="colors"
                    onChange={(event) => setChosen(event.target.value)}
                    id={"color-" + colorElement}
                    label={colorElement}
                    value={colorElement}
                    style={{ backgroundColor: colorElement }}
                    checked={chosen === colorElement}
                />
            ))}
            <div>
                <span>
                    The current color is
                    <span
                        style={{ backgroundColor: chosen }}
                        data-testid="colored-box"
                    >
                        {chosen}
                    </span>
                    !
                </span>
            </div>
        </div>
    );
}
