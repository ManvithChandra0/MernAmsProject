import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: <h1>'Which company owns the following brands: Bentley, Buggati, Lamborghini & Audi?'</h1>,
			answerOptions: [
				{ answerText: 'Volkswagen', isCorrect: true },
				{ answerText: 'Mercedes-Benz', isCorrect: false },
				{ answerText: 'Audi', isCorrect: false },
				{ answerText: 'BMW', isCorrect: false },
			],
		},
		{
			questionText: <h1>'Which amongst the following is a South Korean carmaker?'</h1>,
			answerOptions: [
				{ answerText: 'Mazda', isCorrect: false },
				{ answerText: 'Kia', isCorrect: true },
				{ answerText: 'Dodge', isCorrect: false },
				{ answerText: 'Opel', isCorrect: false },
			],
		},
		{
			questionText: <h1>' The primary responsibility for managing the delayed maintenance file belongs to?'</h1>,
			answerOptions: [
				{ answerText: 'materiel control', isCorrect: false },
				{ answerText: 'the work center supervisor', isCorrect: false },
				{ answerText: 'vehicle management and analysis', isCorrect: true },
				{ answerText: 'the vehicle fleet manager', isCorrect: false },
			],
		},
		{
			questionText: <h1>' How many cells are used in a 12 volt car battery?'</h1>,
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '3', isCorrect: false },
				{ answerText: '5', isCorrect: false },
				{ answerText: '6', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					<h1>You scored {score} out of {questions.length}</h1>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<h1><span>Question {currentQuestion + 1}</span>/{questions.length}</h1>
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}