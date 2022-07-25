import './App.css';
import React, {useState} from 'react';

function App() {

  const arrayCssQuestion = [
    {
      questionTest:
        "Какое из следующих свойств используется для установки фонового изображения элемента?",
      answerOptions: [
        { answerText: "background-repeat", isCorrect: false },
        { answerText: "background-position", isCorrect: false },
        { answerText: "background-image", isCorrect: true },
        { answerText: "background-color", isCorrect: false },
      ],
    },
    {
      questionTest:
        "Какое из следующих свойств используется для преобразования текста в заглавные или в прописные или строчные буквы?",
      answerOptions: [
        { answerText: "text-decoration", isCorrect: false },
        { answerText: "text-align", isCorrect: false },
        { answerText: "text-indent", isCorrect: false },
        { answerText: "text-transform", isCorrect: true },
      ],
    },
    {
      questionTest:
        "Какое из следующих свойств используется для изменения семейства шрифта?",
      answerOptions: [
        { answerText: "font-variant", isCorrect: false },
        { answerText: "font-family", isCorrect: true },
        { answerText: "font-weight", isCorrect: false },
        { answerText: "font-style", isCorrect: false },
      ],
    },
    {
      questionTest:
        "Какое из следующих свойств используется для увеличения или уменьшения пробелов между словами предложения?",
      answerOptions: [
        { answerText: "word-spacing", isCorrect: true },
        { answerText: "color", isCorrect: false },
        { answerText: "letter-spacing", isCorrect: false },
        { answerText: "direction", isCorrect: false },
      ],
    },
    {
      questionTest:
        "Какое из следующих свойств используется для установки тени вокруг текста?",
      answerOptions: [
        { answerText: "white-space", isCorrect: false },
        { answerText: "text-decoration", isCorrect: false },
        { answerText: "text-transform", isCorrect: false },
        { answerText: "text-shadow", isCorrect: true },
      ],
    }
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }
    const nextQuestion = currentQuestion + 1

    if(nextQuestion < arrayCssQuestion.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true);

    }
  }
  function startOver () {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }

  return (
    <div className="App">
      <div className="main_wrapper">
        {showScore ? (
          <div className="score_wrapper">
            <div className="score">
              score: <span>{score}</span>
            </div>
            <button className="newly_button button" onClick={() => startOver()}>
              start over
            </button>
          </div>
        ) : (
          <div className="quiz_wrapper">
            <div className="question_wrapper">
              <div className="counter_question">
                Question <span className='span1'>{currentQuestion + 1}</span>/  
                <span className='span2'>{arrayCssQuestion.length}</span>
              </div>
              <div className="question_text">
                {arrayCssQuestion[currentQuestion].questionTest}
              </div>
            </div>
            <div className="butons_wrrapper">
              {arrayCssQuestion[currentQuestion].answerOptions.map((item) => {
                return (
                  <button
                    key={arrayCssQuestion[
                      currentQuestion
                    ].answerOptions.indexOf(item)}
                    className="button"
                    onClick={() => handleAnswerOptionClick(item.isCorrect)}
                  >
                    {item.answerText}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
