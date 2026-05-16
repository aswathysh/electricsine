"use client";
import { useState, useEffect, useMemo } from "react";
import "./QuizPage.css";
import Image from "next/image";

import { useSampleQuestionSections } from "@/services/PracticeQueris";

const KEYS = ["A", "B", "C", "D"];
const TOTAL_SECS = 30 * 60;

export default function QuizPageNew({ params }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [skipped, setSkipped] = useState(new Set());
  const [secs, setSecs] = useState(TOTAL_SECS);
  const {
    data: data,
    isLoading,
    error,
  } = useSampleQuestionSections({ subjectId: params.id });
  const samplequestions = useMemo(() => {
    if (!data?.questions) return [];

    const answerMap = { A: 0, B: 1, C: 2, D: 3 };
    const subjectName = (id) => {
      switch (id) {
        case "1":
          return "Electronics and Electronics Communication";
        case "2":
          return "Electrical and Electrical Power Engineering";
        case "3":
          return "Basic Electrical Engineering";
        case "4":
          return "Industrial Instrumentation";

        default:
          return "Industrial Instrumentation";
      }
    };
    return data.questions.map((q) => ({
      id: q.id,
      subject: subjectName(q.subject_id),
      difficulty: q?.hint || q?.image ? "Medium" : "Easy",
      image: q.image,
      text: q.question,
      options: [q.option1, q.option2, q.option3, q.option4].filter(Boolean),
      correct: answerMap[q.answer.trim()] ?? 0,
      explain: q.hint ?? "",
    }));
  }, [data]);
  useEffect(() => {
    const t = setInterval(() => setSecs((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);

  const mm = String(Math.floor(secs / 60)).padStart(2, "0");
  const ss = String(secs % 60).padStart(2, "0");

  const q = samplequestions?.[current];
  console.log(samplequestions, "ll");
  const sel = answers[current] ?? null;

  const correct = Object.keys(answers).filter(
    (k) => answers[k] === samplequestions?.[k]?.correct,
  ).length;
  const wrong = Object.keys(answers).length - correct;
  const pct = Math.round((correct / samplequestions?.length) * 100);
  const progress = Math.round(((current + 1) / samplequestions?.length) * 100);

  const handleSelect = (i) => {
    if (sel !== null) return;
    setAnswers((prev) => ({ ...prev, [current]: i }));
    setSkipped((prev) => {
      const s = new Set(prev);
      s.delete(current);
      return s;
    });
  };

  const handleSkip = () => {
    setSkipped((prev) => new Set(prev).add(current));
    if (current < samplequestions?.length - 1) setCurrent((c) => c + 1);
  };

  const diffBadgeClass = (d) => {
    if (d === "Easy") return "badge-green";
    if (d === "Hard") return "badge-purple";
    return "badge-orange";
  };

  return (
    <div className="qz-root">
      <div className="qz-main">
        <div className="qz-topbar">
          <div className="qz-logo">⚡ ELECTRIC SINE · GATE EE 2025</div>
          <div className="qz-topright">
            <div className="qz-marks-badge">Mock Test · 10 Marks</div>
            <div className={`qz-timer ${secs < 120 ? "qz-timer--danger" : ""}`}>
              <span className="qz-timer-dot" />
              {mm}:{ss}
            </div>
          </div>
        </div>

        <div className="qz-card">
          <div className="qz-card-inner">
            <div className="qz-qnum">Q{current + 1}</div>
            <div className="qz-card-body">
              <p className="qz-question">{q?.text}</p>
              <div className="qz-badges">
                <span className="badge badge-blue">{q?.subject}</span>
                <span className={`badge ${diffBadgeClass(q?.difficulty)}`}>
                  {q?.difficulty}
                </span>

                <span className="badge badge-purple">2 Marks</span>
                <span className="badge badge-green">Negative: −0.67</span>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: q?.image ? "flex" : "none",
            justifyContent: "center",
          }}
        >
          <Image
            src="/assets/questionImages/samplequstion1.png"
            alt="sample Image"
            width={400}
            height={200}
          />
        </div>
        <div className="qz-options">
          {q?.options?.map((opt, i) => (
            <div
              key={i}
              className={`opt ${sel !== null && i === q.correct ? "opt-correct" : ""} ${sel !== null && sel === i && i !== q.correct ? "opt-wrong" : ""}`}
              onClick={() => handleSelect(i)}
            >
              <div className="opt-key">{KEYS[i]}</div>
              <div className="opt-text">{opt}</div>
              {sel !== null && i === q.correct && (
                <span className="opt-icon">✓</span>
              )}
              {sel !== null && sel === i && i !== q.correct && (
                <span className="opt-icon opt-icon--wrong">✕</span>
              )}
            </div>
          ))}
        </div>

        {q?.explain && (
          <div className="qz-explain">
            <span className="qz-explain-title">💡 Hint</span>
            <span className="qz-explain-text">{q.explain}</span>
          </div>
        )}

        <div className="qz-stats">
          <div className="qz-stat">
            <div className="qz-stat-val qz-stat-val--green">{correct}</div>
            <div className="qz-stat-label">Correct</div>
          </div>
          <div className="qz-stat-divider" />
          <div className="qz-stat">
            <div className="qz-stat-val qz-stat-val--red">{wrong}</div>
            <div className="qz-stat-label">Wrong</div>
          </div>
          <div className="qz-stat-divider" />
          <div className="qz-stat">
            <div className="qz-stat-val qz-stat-val--blue">{pct}%</div>
            <div className="qz-stat-label">Score</div>
          </div>
          <div className="qz-stat-divider" />
          <div className="qz-stat">
            <div className="qz-stat-val qz-stat-val--gray">{skipped.size}</div>
            <div className="qz-stat-label">Skipped</div>
          </div>
        </div>

        <div className="qz-footer">
          <div className="qz-progress-wrap">
            <div className="qz-progress-top">
              <span>
                Question {current + 1} of {samplequestions?.length}
              </span>
              <span>{progress}%</span>
            </div>
            <div className="qz-track">
              <div className="qz-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <div className="qz-actions">
            <button
              className="qz-btn"
              disabled={current === 0}
              onClick={() => setCurrent((c) => c - 1)}
            >
              ← Back
            </button>
            <button className="qz-btn" onClick={handleSkip}>
              Skip
            </button>
            <button
              className="qz-btn qz-btn--primary"
              onClick={() =>
                current < samplequestions?.length - 1 &&
                setCurrent((c) => c + 1)
              }
              disabled={current === samplequestions.length - 1}
            >
              {current === samplequestions.length - 1 ? "Finish ✓" : "Next →"}
            </button>
          </div>
        </div>
      </div>

      <div className="qz-sidebar">
        <div className="qz-sidebar-card">
          <div className="qz-sidebar-title">NAVIGATOR</div>
          <div className="qz-grid">
            {samplequestions.map((_, i) => (
              <div
                key={i}
                className={`qz-gridnum ${
                  i === current
                    ? "qz-gridnum--active"
                    : answers[i] !== undefined
                      ? answers[i] === samplequestions[i].correct
                        ? "qz-gridnum--correct"
                        : "qz-gridnum--wrong"
                      : ""
                }`}
                onClick={() => setCurrent(i)}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <div className="qz-legend">
            <div className="qz-legend-item">
              <div className="qz-legend-dot qz-legend-dot--active" />
              <span>Current</span>
            </div>
            <div className="qz-legend-item">
              <div className="qz-legend-dot qz-legend-dot--correct" />
              <span>Correct</span>
            </div>
            <div className="qz-legend-item">
              <div className="qz-legend-dot qz-legend-dot--wrong" />
              <span>Wrong</span>
            </div>
            <div className="qz-legend-item">
              <div className="qz-legend-dot qz-legend-dot--none" />
              <span>Unattempted</span>
            </div>
          </div>
        </div>

        <div className="qz-score-card">
          <div className="qz-score-title">LIVE SCORE</div>
          <div className="qz-score-big">{pct}%</div>
          <div className="qz-score-sub">
            {correct} / {samplequestions?.length} correct
          </div>
          <div className="qz-score-rows">
            <div className="qz-score-row">
              <span>Correct</span>
              <span>{correct}</span>
            </div>
            <div className="qz-score-row">
              <span>Wrong</span>
              <span>{wrong}</span>
            </div>
            <div className="qz-score-row">
              <span>Skipped</span>
              <span>{skipped.size}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
