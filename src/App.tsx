import React, { useEffect, useState } from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';
import { getQuizDetails } from './services/quiz_services'
import { QuestionType } from './Types/quiz_types'


function App() {

  const [quiz, setQuiz] = useState<QuestionType[]>([]);
  let [currentState, setCurrentState] = useState(0);
  let [showResult, setShowResult] = useState(false);
  let [score, setScore] = useState(0)

  const nextQuestion = (selectedOption: string) => {


    const currentQuestion: QuestionType = quiz[currentState];

    if (selectedOption === currentQuestion.answer) {
      setScore(++score);
    }

    if (currentState !== quiz.length - 1)
      setCurrentState(++currentState);
    else {
      setShowResult(true);
    }
  }

  useEffect(() => {

    async function fetchData() {
      const questions: QuestionType[] = await getQuizDetails(5, 'easy');
      setQuiz(questions);
    }
    fetchData();
  }, [])

  if (!quiz.length)
    return <h3>Loading.. </h3>

  return (
    <div className="App">
      <QuestionCard question={quiz[currentState]?.question}
        options={quiz[currentState]?.option}
        callback={nextQuestion}
        indexofQuestion={currentState}
        showResult={showResult}
        score={score}
      />
     
    </div>
  );
}

export default App;