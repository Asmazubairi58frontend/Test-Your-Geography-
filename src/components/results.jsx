function Result({ questionBank, userAnswers, restartQuiz }) {

    function getscore() {
        let finalscore = 0;

        userAnswers.forEach((answer, index) => {
            if (answer === questionBank[index].answer) {
                finalscore++;
            }
        });

        return finalscore;
    }

    const score = getscore();
    const totalQuestions = questionBank.length;

    return (
        <div className="result-content">

            <div className="result-icon">🏆</div>

            <h2>Quiz Completed!</h2>

            <p className="score">
                You answered {score} out of {totalQuestions} questions correctly!
            </p>

            <p className="result-message">
                Your Score: {score}/{totalQuestions}
            </p>

            <button
                className="restart-button"
                onClick={restartQuiz}
            >
                Restart Quiz
            </button>

        </div>
    );
}

export default Result;
