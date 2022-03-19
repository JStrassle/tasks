import React, { useState } from "react";
import { Button } from "react-bootstrap";

type holidays = "📚" | "🤟" | "👴" | "🤲" | "🤓";
// pi day march 14
//rock-n-roll day april 13
//darwin day feb 12
//siblings day april 10
//geek pride day may 25

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<holidays>("👴");
    function alphabet(): void {
        if (holiday === "👴") {
            setHoliday("🤓");
        } else if (holiday === "🤓") {
            setHoliday("📚");
        } else if (holiday === "📚") {
            setHoliday("🤟");
        } else if (holiday === "🤟") {
            setHoliday("🤲");
        } else {
            setHoliday("👴");
        }
    }
    function date(): void {
        if (holiday === "👴") {
            setHoliday("📚");
        } else if (holiday === "📚") {
            setHoliday("🤲");
        } else if (holiday === "🤲") {
            setHoliday("🤟");
        } else if (holiday === "🤟") {
            setHoliday("🤓");
        } else {
            setHoliday("👴");
        }
    }

    return (
        <div>
            <div>
                <Button onClick={() => alphabet()}>Advance by Alphabet</Button>
                <Button onClick={() => date()}>Advance by Year</Button>
            </div>
            <div>Holiday: {holiday}</div>
        </div>
    );
}
