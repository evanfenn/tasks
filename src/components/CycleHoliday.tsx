import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "New Year" | "Halloween" | "Thanksgiving" | "Valentine's Day" | "Christmas";

const holidayEmojis: Record<Holiday, string> = {
    "New Year": "🎉",
    "Halloween": "🎃",
    "Thanksgiving": "🦃",
    "Valentine's Day": "❤️",
    "Christmas": "🎄",
};

const nextAlphabetical: Record<Holiday, Holiday> = {
    "Christmas": "Halloween",
    "Halloween": "New Year",
    "New Year": "Thanksgiving",
    "Thanksgiving": "Valentine's Day",
    "Valentine's Day": "Christmas",
};

const nextInYear: Record<Holiday, Holiday> = {
    "New Year": "Valentine's Day",
    "Valentine's Day": "Halloween",
    "Halloween": "Thanksgiving",
    "Thanksgiving": "Christmas",
    "Christmas": "New Year",
};

export function CycleHoliday(): React.JSX.Element {
    const [current, setCurrent] = useState<Holiday>("New Year");

    return (
        <div>
            <p>Holiday: {holidayEmojis[current]}</p>
            <Button onClick={() => {setCurrent(nextAlphabetical[current])}}>
                Advance by Alphabet
                </Button>{" "}
                <Button onClick={() => {setCurrent(nextInYear[current])}}>
                    Advance by Year
                </Button>
        </div>
    );
}
