import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [quesType, changeQuestion] = useState<QuestionType>(
        "short_answer_question"
    );

    return (
        <div>
            <Button
                onClick={() =>
                    changeQuestion(
                        quesType == "multiple_choice_question"
                            ? "short_answer_question"
                            : "multiple_choice_question"
                    )
                }
            >
                Change Type
            </Button>
            {
                <div>
                    {" "}
                    {quesType == "short_answer_question"
                        ? "Short Answer"
                        : "Multiple Choice"}{" "}
                </div>
            }
        </div>
    );
}
