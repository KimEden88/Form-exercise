import { useState } from 'react';

export default function Form({ questions }) {
  const [curQuestionIndex, setCurQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (userAnswer) => {
    setAnswer((prevAnswer) => {
      const updatedAnswer = [...prevAnswer];
      updatedAnswer[curQuestionIndex] = {
        questionIndex: curQuestionIndex,
        answer: userAnswer,
      };
      console.log(updatedAnswer);
      return updatedAnswer;
    });
  };

  const handlePreviousButton = () => {
    return setCurQuestionIndex(curQuestionIndex - 1);
  };
  const handleNextButton = (event) => {
    event.preventDefault();

    return (
      answer[curQuestionIndex] &&
      curQuestionIndex + 1 < questions.length &&
      setCurQuestionIndex(curQuestionIndex + 1)
    );
  };
  const handleResult = (e) => {
    e.preventDefault();
    setShowResult(true);
  };

  const printResult = () => {
    return answer.map((a) => (
      <p key={questions[a.questionIndex]}>{`${questions[
        a.questionIndex
      ].text.slice(0, -1)}: ${a.answer}`}</p>
    ));
  };

  return (
    <>
      {showResult ? (
        <div className="resultCard">
          <h3>Thank You for Filling the Form</h3>
          <h4>Results:</h4>
          {printResult(answer)}
        </div>
      ) : (
        <form key={questions[curQuestionIndex].id}>
          <h2> Question {questions[curQuestionIndex].id}</h2>
          <p>{questions[curQuestionIndex].text}</p>
          <input
            type="text"
            value={
              answer[curQuestionIndex] ? answer[curQuestionIndex].answer : ''
            }
            onChange={(e) => handleAnswer(e.target.value)}
          />
          {curQuestionIndex > 0 && (
            <button onClick={handlePreviousButton}>previous</button>
          )}
          {curQuestionIndex + 1 < questions.length ? (
            <button
              type="submit"
              onClick={handleNextButton}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              onClick={handleResult}
            >
              Submit
            </button>
          )}
        </form>
      )}
    </>
  );
}
