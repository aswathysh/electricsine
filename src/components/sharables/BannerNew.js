"use client";
import { useState } from "react";
import "./bannerNew.css";

export const BannerNew = () => {
  const [selected, setSelected] = useState();
  const options = [
    { id: "A", text: "Impedance is maximum" },
    { id: "B", text: "Impedance is minimum and purely resistive" },
    { id: "C", text: "Current is minimum" },
    { id: "D", text: "Voltage across R equals source voltage squared" },
  ];
  const cards = [
    {
      num: "01 · Mission",
      title: "Empowering Engineers",
      desc: "Empower the next generation of engineers with exam-ready knowledge that bridges theory and practical application, building confidence from first principles to final paper.",
      icon: (
        <svg viewBox="0 0 24 24" className="card-svg">
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="12" r="7" />
          <line x1="12" y1="2" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="22" />
          <line x1="2" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="22" y2="12" />
        </svg>
      ),
    },
    {
      num: "02 · Vision",
      title: "World's Most Trusted",
      desc: "Become the world's most trusted platform for Electrical, Electronics, and Instrumentation engineering — helping every engineer succeed in exams, interviews, and real-world projects.",
      icon: (
        <svg viewBox="0 0 24 24" className="card-svg">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      num: "03 · Goal",
      title: "Leading Provider",
      desc: "To become the leading provider of innovative, accessible, and affordable online assessment solutions that set a new standard for engineering education globally.",
      icon: (
        <svg viewBox="0 0 24 24" className="card-svg">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
  ];

  const features = [
    "Automated Grading — instant results after every test",
    "Detailed Reports — topic-wise breakdowns and weak area flags",
    "Real-Time Results — live rankings updated as you complete tests",
    "Progress Tracking — monitor improvement over time",
  ];

  const subjects = [
    { label: "Circuits", pct: 88, color: "#4a9eff" },
    { label: "Machines", pct: 74, color: "#f5a623" },
    { label: "Control Sys.", pct: 62, color: "#1db976" },
    { label: "Power Sys.", pct: 81, color: "#a855f7" },
    { label: "Measurements", pct: 55, color: "#ef4444" },
  ];
  const feature = [
    {
      num: "01",
      title: "Solved Question Papers",
      desc: "Solved papers help users understand exam patterns, build confidence, and improve problem-solving speed for timed tests and interviews in Electrical, Electronics, Communication, and Instrumentation engineering.",
    },
    {
      num: "02",
      title: "Objective MCQs",
      desc: "For students preparing for exams and job seekers preparing for interviews — directly improves test-taking skills and knowledge recall in all four core engineering streams.",
    },
    {
      num: "03",
      title: "Industry-Relevant Know-How",
      desc: "Covers practical applications, case studies, and modern technologies like AI and automation — essential for becoming a competent professional in the field.",
    },
    {
      num: "04",
      title: "Mock Tests",
      desc: "Full-length mock tests familiarize you with exam format and difficulty — crucial for competitive exams like Diploma, B.Tech, GATE, or IES in Electrical and Instrumentation engineering.",
    },
  ];

  const cardsSecure = [
    {
      badge: "SECURITY",
      title: "Encryption",
      desc: "All exam data is encrypted during transmission and storage, protecting sensitive information from unauthorized access.",
      icon: (
        <svg viewBox="0 0 24 24" className="sec-svg">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      badge: "RELIABILITY",
      title: "Redundancy",
      desc: "Servers designed with full redundancy ensure uninterrupted service even in case of hardware failures or surges.",
      icon: (
        <svg viewBox="0 0 24 24" className="sec-svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      badge: "ACCESS",
      title: "Authentication",
      desc: "Multi-factor authentication verifies every user identity, ensuring only authorized individuals access the platform.",
      icon: (
        <svg viewBox="0 0 24 24" className="sec-svg">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        </svg>
      ),
    },
  ];

  const contacts = [
    {
      badge: "CALL US",
      title: "Phone",
      value: "+91 7560884560",
      icon: (
        <svg viewBox="0 0 24 24" className="ct-svg">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l1.91-1.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 15.17z" />
        </svg>
      ),
    },
    {
      badge: "WRITE TO US",
      title: "Email",
      value: "electricsine2024@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" className="ct-svg">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <polyline points="2,4 12,13 22,4" />
        </svg>
      ),
    },
    {
      badge: "VISIT US",
      title: "Website",
      value: "electricsine.com",
      icon: (
        <svg viewBox="0 0 24 24" className="ct-svg">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className="container">
        <div>
          <div className="leftSection">
            <div>
              <div className="tagPill">
                <span className="tagDot" />
                ELECTRICAL · ELECTRONICS · INSTRUMENTATION
              </div>
            </div>

            <h1 className="heroTitle">
              <span className="textWhite">Master Your{"\n"}</span>
              <span className="textBlue">Engineering{"\n"}</span>
              <span className="textAmber">Exams </span>
              <span className="textWhite">Online</span>
            </h1>

            <div className="heroDesc">
              Solved question papers, adaptive MCQs, timed mock tests, and
              industry know-how — everything engineers need to excel in GATE,
              IES, and beyond.
            </div>

            <div className="btnRow">
              <button className="btnPrimary">Start Practicing </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="statsWrapper">
            <hr className="divider" />
            <div className="statsRow">
              <div>
                <div className="statNum statNumBlue">
                  50<span className="statSuffix">K+</span>
                </div>
                <div className="statLabel">Students Trained</div>
              </div>
              <div>
                <div className="statNum statNumBlue">
                  10<span className="statSuffix">K+</span>
                </div>
                <div className="statLabel">Questions & Solutions</div>
              </div>
              <div>
                <div className="statNum statNumAmber">
                  99<span className="statNumBlue">%</span>
                </div>
                <div className="statLabel">Pass Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="quiz-wrap">
          {/* Header */}
          <div className="quiz-header">
            <div className="quiz-badge">GATE — ELECTRICAL ENGG.</div>
          </div>

          {/* Question */}
          <div className="quiz-qnum">QUESTION</div>
          <div className="quiz-question">
            In a series RLC circuit at resonance, which of the following is
            true?
          </div>

          {/* Options */}
          {options.map((opt) => (
            <div
              key={opt.id}
              className={`option 
    ${selected === opt.id ? "selected" : ""}

    ${selected && opt.id === "B" ? "correct" : ""}

    ${selected && selected === opt.id && opt.id !== "B" ? "wrong" : ""}
  `}
              onClick={() => !selected && setSelected(opt.id)}
            >
              <div className="opt-letter">{opt.id}</div>
              <div className="opt-text">{opt.text}</div>
            </div>
          ))}

          <hr className="quiz-divider" />

          {/* Progress */}
          <div className="progress-row">
            <span className="progress-label">Progress</span>
            <span className="progress-count">Sample Question</span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: "35%" }} />
          </div>

          {/* Stats */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-card-label">ACCURACY</div>
              <div className="stat-card-val val-green">86%</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-label">RANKING SYSTEM</div>
              <div className="stat-card-val val-blue">#238</div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-wrap">
        <div className="about-header">
          <div className="about-tag">WHO WE ARE</div>
          <h2 className="about-title">About Electric Sine</h2>
          <p className="about-desc">
            A team of passionate educators and tech experts dedicated to
            revolutionizing online assessments for engineers.
          </p>
        </div>

        <div className="cards-grid">
          {cards.map((card) => (
            <div className="card" key={card.num}>
              <div className="card-num">{card.num}</div>
              <div className="card-icon">{card.icon}</div>
              <div className="card-title">{card.title}</div>
              <p className="card-text">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pf-wrap">
        <div className="pf-header">
          <div className="pf-tag">PLATFORM FEATURES</div>
          <h2 className="pf-title">Everything You Need to Succeed</h2>
          <p className="pf-desc">
            Our system is packed with features designed to enhance the exam
            experience for both educators and students.
          </p>
        </div>

        <div className="pf-grid">
          {feature.map((f) => (
            <div className="pf-card" key={f.num}>
              <div className="pf-card-top">
                <div className="pf-num">{f.num}</div>
                <h3 className="pf-card-title">{f.title}</h3>
              </div>
              <p className="pf-card-text">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="sec-wrap">
        {/* Left */}
        <div className="sec-left">
          <div className="sec-tag">PLATFORM SECURITY</div>
          <h2 className="sec-title">Secure Exam Delivery</h2>
          <p className="sec-desc">
            Our platform utilizes advanced security measures to ensure data
            integrity and prevent unauthorized access at every level of the
            examination process.
          </p>
          <div className="sec-line" />
        </div>

        {/* Cards */}
        <div className="sec-cards">
          {cardsSecure.map((c) => (
            <div className="sec-card" key={c.badge}>
              <div className="sec-icon">{c.icon}</div>
              <div className="sec-badge">{c.badge}</div>
              <div className="sec-card-title">{c.title}</div>
              <p className="sec-card-text">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="gr-wrap">
        {/* Left */}
        <div className="gr-left">
          <div className="gr-tag">RESULTS & INSIGHTS</div>
          <h2 className="gr-title">Grading and Reporting</h2>
          <p className="gr-desc">
            Our system automates grading and provides comprehensive reporting
            features, saving time while offering valuable insights into student
            progress.
          </p>
          <ul className="gr-list">
            {features.map((f) => (
              <li key={f}>
                <span className="gr-dot" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Card */}
        <div className="gr-right">
          <div className="perf-title">SUBJECT PERFORMANCE</div>

          {subjects.map((s) => (
            <div className="perf-row" key={s.label}>
              <div className="perf-label">{s.label}</div>
              <div className="perf-bar-bg">
                <div
                  className="perf-bar"
                  style={{ width: `${s.pct}%`, background: s.color }}
                />
              </div>
              <div className="perf-pct">{s.pct}%</div>
            </div>
          ))}

          <div className="btn-row">
            <button className="btn-primary">Continue</button>
            <div className="badge-v1">
              <span className="dot" />
              24 × 7 Support
            </div>
          </div>
        </div>
      </div>

      <div className="cta-outer">
        <div className="cta-card">
          <div className="cta-left">
            <div className="cta-title">Ready to crack your exam?</div>
            <p className="cta-desc">
              Join 50,000+ engineers who trust Electric Sine for their
              competitive exam preparation. Free forever for basic access.
            </p>
          </div>
          <div className="cta-btns">
            <button className="cta-btn-primary">Get Started Now</button>
          </div>
        </div>
      </div>

      <div className="ct-wrap">
        <div className="ct-header">
          <div className="ct-tag">GET IN TOUCH</div>
          <h2 className="ct-title">Contact Us</h2>
        </div>

        <div className="ct-grid">
          {contacts.map((c) => (
            <div className="ct-card" key={c.badge}>
              <div className="ct-icon-box">{c.icon}</div>
              <div className="ct-badge">{c.badge}</div>
              <div className="ct-card-title">{c.title}</div>
              <p className="ct-card-value">{c.value}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
