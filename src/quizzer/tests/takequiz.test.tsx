import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Quizzer } from "../Quizzer";

describe("TakeQuizView Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
        const takeQuiz = screen.getByTestId("main-take-button");
        takeQuiz.click();
    });
    test("Check that Quiz and Question names are present", () => {
        expect(screen.getByText("New Girl Trivia")).toBeInTheDocument();
        expect(screen.getByText("Schmidt")).toBeInTheDocument();
        expect(screen.getByText("Nick Fandom")).toBeInTheDocument();
        expect(screen.getByText("Drinking Game")).toBeInTheDocument();
    });
    test("Check that quiz starts with unanswered questions and no points", () => {
        expect(screen.getByText("Total points earned: 0")).toBeInTheDocument();
        expect(screen.queryAllByText("Unanswered")).toHaveLength(3);
    });
    test("Check that quiz correctness and points update correctly for short answers", () => {
        const additionTextBox = screen.getByTestId("0-textbox");
        userEvent.type(additionTextBox, "5");
        expect(screen.queryAllByText(/WRONG ❌/i)).toHaveLength(1);
        expect(screen.queryAllByText(/CORRECT ✔️/i)).toHaveLength(0);
        expect(screen.getByText("Total points earned: 0")).toBeInTheDocument();
    });
    test("Check that Reset Answers button works", () => {
        const resetButton = screen.getByTestId("take-clear-button");
        const TextBox = screen.getByTestId("0-textbox");
        const TextBox2 = screen.getByTestId("2-textbox");

        userEvent.type(TextBox, "Winston");
        userEvent.type(TextBox2, "True American");

        expect(screen.getByText("Total points earned: 10")).toBeInTheDocument();

        resetButton.click();
        expect(screen.getByText("Total points earned: 0")).toBeInTheDocument();
    });
    test("Test that Exit Quiz button works", () => {
        const exitButton = screen.getByTestId("take-exit-button");
        exitButton.click();
        expect(screen.getByText("Please select a quiz")).toBeInTheDocument();
    });
});
