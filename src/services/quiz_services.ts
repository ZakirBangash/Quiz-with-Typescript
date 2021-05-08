import {QuizType} from '../Types/quiz_types'
import {QuestionType} from '../Types/quiz_types'


const shuffleArray = (array : string[]) =>
    [...array].sort(() => Math.random() - 0.5)

export const getQuizDetails = async (totalQuestions : number , level : string)  => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`)
    const {results} = await res.json();
    const quiz : QuestionType[] = results.map((questionObj : QuizType) => (
        {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            option: shuffleArray([...questionObj.incorrect_answers, questionObj.correct_answer]),
        }
    ))
    return quiz;
}

