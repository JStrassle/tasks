import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface moveBox {
    move: () => void;
}
function ShoveBoxButton({ move }: moveBox) {
    return <Button onClick={move}>Shove the Box</Button>;
}

function MoveableBox({ position }: { position: number }): JSX.Element {
    //const [position, setPosition] = useState<number>(10);
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px"
            }}
        ></div>
    );
}

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);
    const box = MoveableBox({ position });
    const movebox = () => setPosition(4 + position);
    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton move={movebox}></ShoveBoxButton>
                {box}
            </div>
        </div>
    );
}
