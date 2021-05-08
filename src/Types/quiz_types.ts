export type QuizType = {
    category: string,
    correct_answer: string,
    incorrect_answers: string[]
    difficulty: string,
    question: string
    type: string
};

export type QuestionType = {
    question: string,
    answer: string,
    option: string[],

}

export type QuestionCardProp = {
    question: string,
    options?: string[],
    indexofQuestion: number,
    callback: (selected: string) => void,
    showResult: Boolean,
    score: number,
}