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

export function TwoDice(): JSX.Element {
    const [d1State, setd1State] = useState<number>(1);
    const [d2State, setd2State] = useState<number>(2);

    function winFunct(): string {
        let str = "";
        if (d1State === d2State) {
            if (d1State !== 1) {
                str = "Win";
            } else {
                str = "Lose";
            }
        } else {
            str = "Roll Again";
        }
        return str;
    }

    return (
        <div>
            <div>
                {" "}
                <Button onClick={() => setd1State(d6())}>Roll left</Button>
                <span data-testid="left-die">{d1State}</span>
            </div>
            <div>
                <Button onClick={() => setd2State(d6())}>Roll Right</Button>
                <span data-testid="right-die">{d2State}</span>
            </div>
            <div>{winFunct()}</div>
        </div>
    );
}
