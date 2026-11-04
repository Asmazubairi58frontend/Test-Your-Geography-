import { useState } from "react";
import Result from "./results";

function Quiz() {

    const questionBank = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "London", "Paris", "Rome"],
            answer: "Paris",
        },
        {
            question: "Which country is famous for the Eiffel Tower?",
            options: ["Italy", "France", "Germany", "Spain"],
            answer: "France",
        },
        {
            question: "What is the capital of Japan?",
            options: ["Seoul", "Beijing", "Bangkok", "Tokyo"],
            answer: "Tokyo",
        }
    ];

    const initialAnswers = [null, null, null];

    const [userAnswers, setUserAnswers] = useState(initialAnswers);
    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [isQuizFinished, setisQuizFinished] = useState(false);

    const selectedAnswer = userAnswers[currentQuestion];

    function handelSelectOption(option) {
        const newUserAnswer = [...userAnswers];

        newUserAnswer[currentQuestion] = option;

        setUserAnswers(newUserAnswer);
    }

    function goToNext() {
        if (currentQuestion === questionBank.length - 1) {
            setisQuizFinished(true);
        } else {
            setcurrentQuestion(currentQuestion + 1);
        }
    }

    function goToPrev() {
        if (currentQuestion > 0) {
            setcurrentQuestion(currentQuestion - 1);
        }
    }

    function restartQuiz() {
        setUserAnswers([...initialAnswers]);
        setcurrentQuestion(0);
        setisQuizFinished(false);
    }

    if (isQuizFinished) {
        return (
            <Result
                userAnswers={userAnswers}
                questionBank={questionBank}
                restartQuiz={restartQuiz}
            />
        );
    }

    return (
        <div className="quiz-content">

            <div className="question-progress">
                Question {currentQuestion + 1} of {questionBank.length}
            </div>

            <h2 className="question">
                {questionBank[currentQuestion].question}
            </h2>

            <div className="options-container">
                {questionBank[currentQuestion].options.map((option) => (
                    <button
                        key={option}
                        className={
                            selectedAnswer === option
                                ? "option selected"
                                : "option"
                        }
                        onClick={() => handelSelectOption(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>

            <div className="nav-buttons">

                <button
                    onClick={goToPrev}
                    disabled={currentQuestion === 0}
                >
                    Previous
                </button>

                <button
                    onClick={goToNext}
                    disabled={!selectedAnswer}
                >
                    {currentQuestion === questionBank.length - 1
                        ? "Finish Quiz"
                        : "Next"}
                </button>

            </div>

        </div>
    );
}

export default Quiz;