"use client";
import { useState, useEffect, useMemo, useRef } from "react";
import "./QuizPage.css";
import Image from "next/image";

import { useSampleQuestionSections } from "@/services/PracticeQueris";

const KEYS = ["A", "B", "C", "D"];
const TOTAL_SECS = 30 * 60;
const MAX_GUEST_QUESTIONS = 5;

export default function QuizPageNew({ params }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [skipped, setSkipped] = useState(new Set());
  const [savedAttendedQuestions, setSavedAttendedQuestions] = useState(new Set());
  const [attendanceReady, setAttendanceReady] = useState(false);
  const [secs, setSecs] = useState(TOTAL_SECS);
  const [showAccountPrompt, setShowAccountPrompt] = useState(false);
  const [hasShownAccountPrompt, setHasShownAccountPrompt] = useState(false);
  const accountDialogRef = useRef(null);
  const attendanceStorageKey = `sample_questions_attended_${params.id}`;
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

  useEffect(() => {
    const storedAttendance = JSON.parse(
      sessionStorage.getItem(attendanceStorageKey) || "[]",
    );
    const restoredQuestions = Array.isArray(storedAttendance)
      ? new Set(
          storedAttendance.filter(
            (questionIndex) =>
              Number.isInteger(questionIndex) && questionIndex >= 0,
          ),
        )
      : new Set();

    setSavedAttendedQuestions(restoredQuestions);
    setAttendanceReady(true);
    if (
      restoredQuestions.size >= MAX_GUEST_QUESTIONS &&
      !sessionStorage.getItem("token")
    ) {
      setShowAccountPrompt(true);
      setHasShownAccountPrompt(true);
    }
  }, [attendanceStorageKey]);

  useEffect(() => {
    if (!showAccountPrompt) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Tab") {
        const focusableElements =
          accountDialogRef.current?.querySelectorAll(
            'a[href], button:not([disabled])',
          );
        if (!focusableElements?.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const focusIsOutsideDialog =
          !accountDialogRef.current.contains(document.activeElement);

        if (
          (event.shiftKey &&
            (document.activeElement === firstElement || focusIsOutsideDialog)) ||
          (!event.shiftKey &&
            (document.activeElement === lastElement || focusIsOutsideDialog))
        ) {
          event.preventDefault();
          (event.shiftKey ? lastElement : firstElement).focus();
        }
      }
    };

    const previouslyFocusedElement = document.activeElement;
    document.body.style.overflow = "hidden";
    accountDialogRef.current?.querySelector("a[href]")?.focus();
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedElement?.focus();
    };
  }, [showAccountPrompt]);

  const mm = String(Math.floor(secs / 60)).padStart(2, "0");
  const ss = String(secs % 60).padStart(2, "0");

  const q = samplequestions?.[current];
  const sel = answers[current] ?? null;

  const correct = Object.keys(answers).filter(
    (k) => answers[k] === samplequestions?.[k]?.correct,
  ).length;
  const wrong = Object.keys(answers).length - correct;
  const pct = Math.round((correct / samplequestions?.length) * 100);
  const progress = Math.round(((current + 1) / samplequestions?.length) * 100);
  const attendedQuestions = new Set([
    ...savedAttendedQuestions,
    ...Object.keys(answers).map(Number),
    ...skipped,
  ]);

  const recordAttendance = (questionIndex) => {
    const updatedQuestions = new Set(attendedQuestions);
    updatedQuestions.add(questionIndex);
    setSavedAttendedQuestions(updatedQuestions);
    if (!sessionStorage.getItem("token")) {
      sessionStorage.setItem(
        attendanceStorageKey,
        JSON.stringify([...updatedQuestions]),
      );
    }
    return updatedQuestions.size;
  };

  const handleSelect = (i) => {
    if (!attendanceReady || sel !== null) return;
    const nextAttendedCount = recordAttendance(current);
    setAnswers((prev) => ({ ...prev, [current]: i }));
    if (
      !hasShownAccountPrompt &&
      nextAttendedCount >= MAX_GUEST_QUESTIONS &&
      !sessionStorage.getItem("token")
    ) {
      setShowAccountPrompt(true);
      setHasShownAccountPrompt(true);
    }
    setSkipped((prev) => {
      const s = new Set(prev);
      s.delete(current);
      return s;
    });
  };

  const handleSkip = () => {
    if (!attendanceReady) return;
    const nextAttendedCount = recordAttendance(current);
    if (
      !hasShownAccountPrompt &&
      nextAttendedCount >= MAX_GUEST_QUESTIONS &&
      !sessionStorage.getItem("token")
    ) {
      setShowAccountPrompt(true);
      setHasShownAccountPrompt(true);
    }
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
        <div className={`ims-sample-question-image${q?.image ? "" : " ims-sample-question-image--hidden"}`}>
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
              <div className="opt-text-home">{opt}</div>
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
              <div className={`qz-fill ims-progress-width-${Math.max(0, Math.min(100, progress))}`} />
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

      {showAccountPrompt && (
        <div className="sample-account-overlay">
          <section
            ref={accountDialogRef}
            className="sample-account-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sample-account-title"
            aria-describedby="sample-account-description"
          >
            <div className="sample-account-icon" aria-hidden="true">
              <span>{MAX_GUEST_QUESTIONS}</span>
              <span className="sample-account-icon-check">✓</span>
            </div>
            <p className="sample-account-eyebrow">Free questions completed</p>
            <h2 id="sample-account-title">
              Log in to continue the exam
            </h2>
            <p id="sample-account-description" className="sample-account-copy">
              You&apos;ve attended {MAX_GUEST_QUESTIONS} questions. Create an
              account or log in to answer more questions.
            </p>
            <div className="sample-account-actions">
              <a
                className="sample-account-primary"
                href="/auth/login?tab=register"
              >
                Create a free account
              </a>
              <a className="sample-account-secondary" href="/auth/login">
                I already have an account
              </a>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
