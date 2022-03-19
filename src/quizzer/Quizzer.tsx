import React, { useState } from "react";
import { Question, QuestionType } from "../interfaces/question";
import { Quiz } from "../interfaces/quiz";
import quizData from "./examplequiz.json";
import { TakeQuizView } from "./takequiz";
import { MainQuizView } from "./viewquiz";
declare module "*.png";
import pic from "./quizzer.png";

const QUIZZES: Quiz[] = quizData.map(
    (quiz): Quiz => ({
        ...quiz,
        questions: quiz.questions.map(
            (question): Question => ({
                ...question,
                type: question.type as QuestionType
            })
        )
    })
);

function CurrentView({
    mode,
    setMode,
    quizzes,
    selectedQuiz,
    setSelectedQuiz
}: {
    mode: string;
    setMode: (newMode: string) => void;
    quizzes: Quiz[];
    setQuizzes: (newQuizzes: Quiz[]) => void;
    selectedQuiz: Quiz;
    setSelectedQuiz: (newQuiz: Quiz) => void;
}): JSX.Element {
    if (mode === "take") {
        return <TakeQuizView setMode={setMode} selectedQuiz={selectedQuiz} />;
    }
    return (
        <MainQuizView
            setMode={setMode}
            quizzes={quizzes}
            selectedQuiz={selectedQuiz}
            setSelectedQuiz={setSelectedQuiz}
        />
    );
}

export function Quizzer(): JSX.Element {
    const [mode, setMode] = useState<string>("main");
    const [quizzes, setQuizzes] = useState<Quiz[]>(QUIZZES);
    const [selectedQuiz, setSelectedQuiz] = useState<Quiz>(QUIZZES[0]);

    return (
        <div>
            <h3>Quizzer</h3>
            <CurrentView
                mode={mode}
                setMode={setMode}
                quizzes={quizzes}
                setQuizzes={setQuizzes}
                selectedQuiz={selectedQuiz}
                setSelectedQuiz={setSelectedQuiz}
            />
            <hr></hr>
            <div>
                <h2>Completed</h2>
                <ul>
                    <li>Quizzes are Visible</li>
                    <li>Quizzes have Questions</li>
                    <li>SA and MC</li>
                    <li>Check Correctness</li>
                    <li>Sum Points</li>
                    <li>Clear Answer</li>
                </ul>
            </div>
            <div>
                <img src={pic} alt="The image" width="500" height="400"></img>
            </div>
        </div>
    );
}
