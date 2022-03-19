import { Question } from "./question";

export interface Quiz {
    id: number;
    title: string;
    description: string;
    max_question_id: number;
    questions: Question[];
}
