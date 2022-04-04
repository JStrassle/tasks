import React, { useState } from "react";
import { Question, QuestionType } from "../interfaces/question";
import { Quiz } from "../interfaces/quiz";
import quizData from "./examplequiz.json";
import { TakeQuizView } from "./takequiz";
import { MainQuizView } from "./viewquiz";
import { EditQuizView } from "./editquiz";

declare module "*.png";
import pic from "./quizzer.png";
import { NewQuizView } from "./newquiz";
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

const NEW_QUIZ: Quiz = {
    id: 10,
    title: "New Quiz",
    description: "Sample Description",
    max_question_id: -1,
    questions: []
};

function CurrentView({
    mode,
    setMode,
    quizzes,
    setQuizzes,
    selectedQuiz,
    setSelectedQuiz,
    newQuizId,
    setNewQuizId
}: {
    mode: string;
    setMode: (newMode: string) => void;
    quizzes: Quiz[];
    setQuizzes: (newQuizzes: Quiz[]) => void;
    selectedQuiz: Quiz;
    setSelectedQuiz: (newQuiz: Quiz) => void;
    newQuizId: number;
    setNewQuizId: (newId: number) => void;
}): JSX.Element {
    // Wouldn't it be nice if the linter let me use switches? Alas
    if (mode === "edit") {
        return (
            <EditQuizView
                mode={mode}
                setMode={setMode}
                quizzes={quizzes}
                setQuizzes={setQuizzes}
                selectedQuiz={selectedQuiz}
                setSelectedQuiz={setSelectedQuiz}
            />
        );
    } else if (mode === "new") {
        return (
            <NewQuizView
                mode={mode}
                setMode={setMode}
                quizzes={quizzes}
                setQuizzes={setQuizzes}
                selectedQuiz={{ ...NEW_QUIZ }}
                setSelectedQuiz={setSelectedQuiz}
                newQuizId={newQuizId}
                setNewQuizId={setNewQuizId}
            />
        );
    } else if (mode === "take") {
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
    const [newQuizId, setNewQuizId] = useState<number>(
        Math.max(...QUIZZES.map((q: Quiz): number => q.id)) + 1
    );

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
                newQuizId={newQuizId}
                setNewQuizId={setNewQuizId}
            />
            <hr></hr>
            <div>
                <ul>
                    <li>Application is sketched</li>
                    <li>Quizzes are Visible-tested</li>
                    <li>Quizzes have Questions-tested</li>
                    <li>SA and MC-tested</li>
                    <li>Check Correctness-tested</li>
                    <li>Sum Points-tested</li>
                    <li>Clear Answers-tested</li>
                    <li>Publish Questions</li>
                    <li>Filter Questions</li>
                    <li>Edit Questions</li>
                    <li>Add Questions</li>
                    <li>Delete Questions</li>
                    <li>Reorder Questions</li>
                    <li>Edit Questions</li>
                </ul>
            </div>
            <img
                src={pic}
                width="500px"
                height="300px"
                alt="My task 11 sketch"
            />
        </div>
    );
}
