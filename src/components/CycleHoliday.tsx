import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday = "❄️" | "🌧️" | "🏖️" | "🎃" | "❤️";

export function nextOrdered(current: Holiday): Holiday {
    // christmas - valentines - spring break - summer vacation - halloween
    if (current == "❄️") {
        return "❤️";
    } else if (current == "❤️") {
        return "🌧️";
    } else if (current == "🌧️") {
        return "🏖️";
    } else if (current == "🏖️") {
        return "🎃";
    } else {
        return "❄️";
    }
}

export function nextAlpha(current: Holiday): Holiday {
    // christmas - halloween - spring break - summer vacation - valentines
    if (current == "❄️") {
        return "🎃";
    } else if (current == "🎃") {
        return "🌧️";
    } else if (current == "🌧️") {
        return "🏖️";
    } else if (current == "🏖️") {
        return "❤️";
    } else {
        return "❄️";
    }
}

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("❄️");
    return (
        <div>
            Holiday: {holiday}
            <Button onClick={() => setHoliday(nextOrdered(holiday))}>
                Advance by Year
            </Button>
            <Button onClick={() => setHoliday(nextAlpha(holiday))}>
                Advance by Alphabet
            </Button>
        </div>
    );
}
