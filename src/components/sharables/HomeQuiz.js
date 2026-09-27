"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    text: "In a series RLC circuit at resonance, which statement is true?",
    options: [
      { id: "A", text: "Impedance is maximum" },
      { id: "B", text: "Impedance is minimum and purely resistive" },
      { id: "C", text: "Current is minimum" },
      { id: "D", text: "Voltage across R equals source voltage squared" },
    ],
    correct: "B",
  },
  {
    text: "The Thevenin equivalent resistance is found by:",
    options: [
      { id: "A", text: "Shorting voltage sources and opening current sources" },
      { id: "B", text: "Opening voltage sources and shorting current sources" },
      { id: "C", text: "Replacing sources with their internal resistances" },
      { id: "D", text: "Removing all resistors" },
    ],
    correct: "A",
  },
  {
    text: "A transformer has a turns ratio of 2:1 and a 240 V primary. What is the secondary voltage?",
    options: [
      { id: "A", text: "480 V" },
      { id: "B", text: "240 V" },
      { id: "C", text: "120 V" },
      { id: "D", text: "60 V" },
    ],
    correct: "C",
  },
  {
    text: "What is the SI unit of magnetic flux density?",
    options: [
      { id: "A", text: "Weber (Wb)" },
      { id: "B", text: "Tesla (T)" },
      { id: "C", text: "Henry (H)" },
      { id: "D", text: "Farad (F)" },
    ],
    correct: "B",
  },
];

export default function HomeQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const question = questions[currentIndex];
  const selected = answers[currentIndex];
  const progress = Math.round(((currentIndex + 1) / questions.length) * 100);

  const chooseAnswer = (answer) => {
    if (selected) return;
    setAnswers((previous) => ({ ...previous, [currentIndex]: answer }));
  };

  return (
    <aside className="quiz-wrap" aria-label="Sample GATE electrical engineering question">
      <div className="quiz-header">
        <div className="quiz-badge">GATE — ELECTRICAL ENGG.</div>
      </div>

      <div className="quiz-qnum" aria-hidden="true">SAMPLE QUESTION {currentIndex + 1}</div>
      <p className="quiz-question">{question.text}</p>

      <fieldset className="home-quiz-options">
        <legend className="visually-hidden">Choose an answer</legend>
        {question.options.map((option) => (
          <div
            key={option.id}
            role="radio"
            aria-checked={selected === option.id}
            tabIndex={0}
            className={`option${selected === option.id ? " selected" : ""}${selected && option.id === question.correct ? " correct" : ""}${selected === option.id && option.id !== question.correct ? " wrong" : ""}`}
            onClick={() => chooseAnswer(option.id)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                chooseAnswer(option.id);
              }
            }}
          >
            <span className="opt-letter" aria-hidden="true">{option.id}</span>
            <span className="opt-text">{option.text}</span>
          </div>
        ))}
      </fieldset>

      <hr className="quiz-divider" aria-hidden="true" />

      <div className="progress-row">
        <span className="progress-label">Progress</span>
        <span className="progress-count">Question {currentIndex + 1} of {questions.length}</span>
      </div>
      <div
        className="progress-bar-bg"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Quiz progress ${progress} percent`}
      >
        <div className={`progress-bar-fill ims-progress-width-${progress}`} />
      </div>

      <div className="nav-btn-grid">
        <button
          type="button"
          className={`nav-btn nav-btn-back${currentIndex === 0 ? " nav-btn-disabled" : ""}`}
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((index) => Math.max(0, index - 1))}
        >
          <span className="nav-btn-label">← Back</span>
        </button>
        {currentIndex === questions.length - 1 ? (
          <Link className="nav-btn nav-btn-next-more" href="/sample_questions/2">
            <span className="nav-btn-label">More →</span>
          </Link>
        ) : (
          <button
            type="button"
            className="nav-btn nav-btn-next"
            onClick={() => setCurrentIndex((index) => index + 1)}
          >
            <span className="nav-btn-label">Next →</span>
          </button>
        )}
      </div>
    </aside>
  );
}