import { Header } from "@/components/sharables/Header";
import React from "react";

export const metadata = {
  title: "About Electric Sine | Electrical Engineering Learning Platform",
  description:
    "Learn about ElectricSine, an online learning platform for Electrical Engineering, Electronics Engineering and Instrumentation, with MCQs, mock tests, solved papers and interview preparation.",
  keywords: [
    "About Electric Sine",
    "Electrical Engineering",
    "Electronics Engineering",
    "Instrumentation",
    "Communication Engineering",
    "Engineering Courses",
    "Mock Tests",
    "Interview Preparation",
    "Online Learning",
  ],
  alternates: {
    canonical: "https://www.electricsine.com/aboutus",
  },
  openGraph: {
    title:
      "ElectricSine | Electrical & Electronics Engineering Learning Platform",
    description:
      "Learn Electrical, Electronics, Communication and Instrumentation Engineering through MCQs, mock tests, solved papers and interview preparation with ElectricSine.",
    url: "https://www.electricsine.com/aboutus",
    images: [
      "/images/electricsine-electrical-engineering-learning-platform.webp",
    ],

    siteName: "Electric Sine",
    type: "website",
  },
};

const HERO_IMAGE = "/assets/images/aboutpage.png";
const BULB_IMAGE = "/assets/images/aboutbulb.png";

const LEARNER_BG_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/A_wind_turbine_and_a_windmill.jpg";

const heroPillars = [
  { icon: "bolt", title: "Learn", sub: "Concepts & Theories" },
  { icon: "grid", title: "Practice", sub: "MCQs & Questions" },
  { icon: "chart", title: "Grow", sub: "Your Career" },
];

const platformAreasLeft = [
  "Electrical Engineering",
  "Electronics Engineering",
  "Electronics & Communication Engineering",
  "Instrumentation Engineering",
  "Power Systems",
];
const platformAreasRight = [
  "Electrical Machines",
  "Power Electronics",
  "Control Systems",
  "Digital Electronics",
  "Analog Electronics",
];

const subjectCards = [
  {
    icon: "bolt",
    title: "Basic Electrical Engineering",
    body: "Ohm's Law, Kirchhoff's Laws, AC/DC circuits, network theory, resonance, electromagnetics, semiconductors, amplifiers.",
  },
  {
    icon: "gear",
    title: "Electrical Machines & Power Systems",
    body: "Transformers, DC & induction motors, synchronous machines, transmission lines, fault analysis, load flow, protection.",
  },
  {
    icon: "chip",
    title: "Power Electronics & Control Systems",
    body: "Rectifiers, inverters, choppers, converters, PID controllers, stability analysis, state-space, frequency response.",
  },
  {
    icon: "chip",
    title: "Digital & Analog Electronics",
    body: "Diodes, transistors, logic gates, flip-flops, counters, op-amps, amplifiers, oscillators, ADC, DAC.",
  },
  {
    icon: "antenna",
    title: "Electronics & Communication Engineering",
    body: "AM, FM, modulation, demodulation, antennas, transmission lines, analog & digital communication, noise.",
  },
  {
    icon: "gauge",
    title: "Industrial Instrumentation & Control",
    body: "Sensors, transducers, PLCs, SCADA, process control, calibration, automation, monitoring systems.",
  },
];

const examList = [
  "GATE Electrical Engineering",
  "IES",
  "UPSC Engineering Services",
  "University & Entrance Exams",
  "Technical Recruitment Exams",
  "Engineering Job Interviews",
];

const practiceList = [
  "Strengthen fundamental concepts",
  "Practice objective questions & MCQs",
  "Improve speed and accuracy",
  "Identify weak areas",
  "Learn from incorrect answers",
  "Develop problem-solving skills",
  "Practice under time constraints",
  "Build exam confidence",
];

const solvedPapersList = [
  "Improve concept retention",
  "Increase accuracy",
  "Better time management",
  "Build exam confidence",
];

const audiences = [
  {
    icon: "gradCap",
    title: "Students",
    body: "Strengthen your fundamentals and practice Electrical Engineering questions for university exams, competitive exams and assessments.",
  },
  {
    icon: "users",
    title: "Professionals",
    body: "Stay updated with the latest concepts and develop your skills alongside work commitments.",
  },
  {
    icon: "userTie",
    title: "Job Seekers",
    body: "Prepare with Electrical Engineering interview questions and Electronics Engineering interview questions, plus practice resources to build confidence for your next opportunity.",
  },
];

const benefitsLeft = [
  "Comprehensive EEE resources",
  "Thousands of MCQs",
  "Solved question papers",
  "Topic-wise practice",
  "Mock tests",
];
const benefitsRight = [
  "Detailed answers & explanations",
  "Interview preparation",
  "Industry-relevant knowledge",
  "Flexible learning",
  "Conceptual understanding",
];

const ctaPillars = [
  { icon: "book", label: "Learn" },
  { icon: "target", label: "Practice" },
  { icon: "chart", label: "Grow" },
  { icon: "trophy", label: "Succeed" },
];

/* ---------------- icons ---------------- */

function Icon({ name, size = 20 }) {
  const c = {
    width: size,
    height: size,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
  };
  switch (name) {
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" {...c}>
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      );
    case "grid":
      return (
        <svg viewBox="0 0 24 24" {...c}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 24 24" {...c}>
          <path d="M4 20V10M12 20V4M20 20v-7" />
        </svg>
      );
    case "check":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          stroke="#fff"
          strokeWidth="2.6"
        >
          <path d="M4 12l5 5L20 6" />
        </svg>
      );
    case "gear":
      return (
        <svg viewBox="0 0 24 24" {...c}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
      );
    case "chip":
      return (
        <svg viewBox="0 0 24 24" {...c}>
          <rect x="6" y="6" width="12" height="12" rx="1.5" />
          <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
        </svg>
      );
    case "antenna":
      return (
        <svg viewBox="0 0 24 24" {...c}>
          <path d="M12 22v-9M4 8a8 8 0 0 1 16 0M7 8a5 5 0 0 1 10 0" />
          <circle cx="12" cy="10" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      );
    case "gauge":
      return (
        <svg viewBox="0 0 24 24" {...c}>
          <path d="M4 15a8 8 0 1 1 16 0" />
          <path d="M12 15l3-4" />
          <circle cx="12" cy="15" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "gradCap":
      return (
        <svg viewBox="0 0 24 24" {...c}>
          <path d="M2 9l10-5 10 5-10 5-10-5Z" />
          <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
        </svg>
      );
    case "users":
      return (
        <svg viewBox="0 0 24 24" {...c}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.4" />
          <path d="M2 20c0-3 2.5-5 7-5s7 2 7 5M15 20c.3-2 1.5-3.5 4-3.7" />
        </svg>
      );
    case "userTie":
      return (
        <svg viewBox="0 0 24 24" {...c}>
          <circle cx="12" cy="7" r="3.4" />
          <path d="M5 21c0-4 3-6.5 7-6.5s7 2.5 7 6.5" />
          <path d="M12 14v3l-1.2 1.5L12 20l1.2-1.5L12 17" />
        </svg>
      );
    case "target":
      return (
        <svg viewBox="0 0 24 24" {...c}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="0.6" fill="currentColor" />
        </svg>
      );
    case "book":
      return (
        <svg viewBox="0 0 24 24" {...c}>
          <path d="M4 19.5V5a2 2 0 0 1 2-2h11.5v16H6a2 2 0 0 0-2 2Z" />
          <path d="M17.5 19.5H6a2 2 0 0 1 0-4h11.5" />
        </svg>
      );
    case "trophy":
      return (
        <svg viewBox="0 0 24 24" {...c}>
          <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" />
          <path d="M8 5H5a3 3 0 0 0 3 4M16 5h3a3 3 0 0 1-3 4" />
          <path d="M12 12v4M9 20h6M9 20l.5-2h5l.5 2" />
        </svg>
      );
    default:
      return null;
  }
}

function CheckRow({ text, dim }) {
  return (
    <div style={styles.checkRow}>
      <span style={{ ...styles.checkDot, opacity: dim ? 0.6 : 1 }}>
        <Icon name="check" size={11} />
      </span>
      <span style={styles.checkText}>{text}</span>
    </div>
  );
}

/* ---------------- page ---------------- */

export default function Home() {
  return (
    <>
      <div style={styles.page}>
        <Header />

        {/* HERO */}
        <section style={styles.hero}>
          <div className="es-about-row-wrap" style={styles.heroInner}>
            <div style={styles.heroText}>
              <span style={styles.eyebrowLight}>— ABOUT ELECTRICSINE</span>
              <h1 style={styles.h1}>
                About ElectricSine
                <br />
                <span style={styles.accentText}>
                  Electrical &amp; Electronics Engineering Learning Platform
                </span>
              </h1>
              <p style={styles.heroParagraph}>
                ElectricSine is an online learning platform dedicated to
                Electrical Engineering, Electronics Engineering, Communication
                Engineering, and Instrumentation. Our goal is to help students,
                working professionals, and job seekers build strong technical
                knowledge, improve problem-solving skills, and prepare
                effectively for competitive examinations and technical
                interviews.
              </p>
              <div style={styles.pillarRow}>
                {heroPillars.map((p) => (
                  <div key={p.title} style={styles.pillarItem}>
                    <span style={styles.pillarIcon}>
                      <Icon name={p.icon} size={16} />
                    </span>
                    <div>
                      <div style={styles.pillarTitle}>{p.title}</div>
                      <div style={styles.pillarSub}>{p.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={styles.heroImageWrap}>
              <img
                src={HERO_IMAGE}
                alt="img"
                title="img"
                style={styles.heroImage}
              />
            </div>
          </div>
        </section>

        {/* MORE THAN JUST COURSES */}
        <section style={styles.moreSection}>
          <div className="es-about-row-wrap" style={styles.moreInner}>
            <div style={styles.heroText}>
              <span style={styles.eyebrowDark}>ABOUT ELECTRICSINE</span>
              <h2 style={styles.h2Dark}>More Than Just Courses</h2>
              <p style={styles.darkParagraph}>
                We go beyond traditional course materials by combining concept
                learning, objective questions, MCQs, solved question papers,
                mock tests, and topic-wise practice in one career-focused
                learning platform.
              </p>
              <p style={styles.darkParagraph}>
                Our approach helps bridge the gap between theoretical knowledge
                and practical application, enabling learners to develop the
                skills and confidence required for academic success, Electrical
                Engineering exam preparation, interviews, and career growth.
              </p>
            </div>

            <div style={styles.lavenderBox}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "clamp(14px, 3vw, 24px)",
                  width: "100%",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    flex: "0 1 clamp(80px, 12vw, 110px)",
                    minWidth: "80px",
                    maxWidth: "110px",
                  }}
                >
                  <img
                    src={BULB_IMAGE}
                    alt="Electrical and Electronics Engineering"
                    title="Electrical and Electronics Engineering"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <div
                  style={{
                    flex: "1 1 280px",
                    minWidth: "0",
                  }}
                >
                  <h3
                    style={{
                      margin: "0 0 10px",
                      fontSize: "var(--fs-22)",
                      lineHeight: "1.3",
                      fontWeight: "700",
                      color: "#222546",
                    }}
                  >
                    Electrical &amp; Electronics Engineering Learning Platform
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      fontSize: "var(--fs-15)",
                      lineHeight: "1.6",
                      color: "#526080",
                    }}
                  >
                    ElectricSine provides structured learning resources for
                    students and professionals who want to strengthen their
                    knowledge of core engineering subjects.
                  </p>
                </div>
              </div>

              <p style={styles.boxLabel}>
                Our platform covers important areas such as:
              </p>
              <div className="es-about-grid-2" style={styles.twoColCheck}>
                <div>
                  {platformAreasLeft.map((a) => (
                    <CheckRow key={a} text={a} />
                  ))}
                </div>
                <div>
                  {platformAreasRight.map((a) => (
                    <CheckRow key={a} text={a} dim />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={styles.subjectsSection}>
          <div className="es-about-row-wrap" style={styles.subjectsHeader}>
            <div>
              <span style={styles.eyebrowDark}>OUR LEARNING RESOURCES</span>
              <h2 style={styles.h2Dark}>Explore Key Subjects</h2>
            </div>
            <p style={styles.subjectsIntro}>
              From basic concepts to advanced Electrical Engineering questions,
              we provide focused resources for every stage of your learning
              journey.
            </p>
          </div>
          <div className="es-about-grid-3" style={styles.subjectGrid}>
            {subjectCards.map((s) => (
              <div key={s.title} style={styles.subjectCard}>
                <span style={styles.subjectIconCircle}>
                  <Icon name={s.icon} size={18} />
                </span>
                <h3 style={styles.subjectTitle}>{s.title}</h3>
                <p style={styles.subjectBody}>{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="es-about-grid-3" style={styles.panelsRow}>
          <div style={{ ...styles.panel, ...styles.panelDark }}>
            <span style={styles.eyebrowLight}>— COMPETITIVE EXAMS</span>
            <h3 style={styles.panelTitleLight}>
              Prepare for Competitive Exams with MCQs
            </h3>
            <p style={styles.panelBodyLight}>
              Our extensive collection of Electrical Engineering MCQs,
              Electronics Engineering MCQs, and Instrumentation Engineering
              questions help you prepare for:
            </p>
            <div className="es-about-grid-2" style={styles.twoColCheck}>
              <div>
                {examList.slice(0, 3).map((e) => (
                  <CheckRow key={e} text={e} />
                ))}
              </div>
              <div>
                {examList.slice(3).map((e) => (
                  <CheckRow key={e} text={e} dim />
                ))}
              </div>
            </div>
            <a href="/sample_questions/1" style={styles.primaryButton}>
              View MCQs <span aria-hidden="true">→</span>
            </a>
          </div>

          <div style={styles.panel}>
            <span style={styles.eyebrowDark}>PRACTICE &amp; IMPROVE</span>
            <h3 style={styles.panelTitleDark}>
              Learn Through Practice, Not Just Memorization
            </h3>
            <p style={styles.panelBodyDark}>ElectricSine helps you:</p>
            <div>
              {practiceList.map((p) => (
                <CheckRow key={p} text={p} />
              ))}
            </div>
          </div>

          <div style={styles.panel}>
            <span style={styles.eyebrowDark}>
              SOLVED PAPERS &amp; MOCK TESTS
            </span>
            <h3 style={styles.panelTitleDark}>
              Solved Question Papers &amp; Engineering Mock Tests
            </h3>
            <p style={styles.panelBodyDark}>
              Understand real exam patterns, difficulty levels, and commonly
              tested concepts. Our engineering mock tests help you evaluate your
              preparation, identify weak areas and improve time management.
            </p>
            <div>
              {solvedPapersList.map((p) => (
                <CheckRow key={p} text={p} />
              ))}
            </div>
          </div>
        </section>

        <section className="es-about-grid-3" style={styles.threeColSection}>
          <div>
            <span style={styles.eyebrowDark}>FOR EVERY LEARNER</span>
            <h2 style={styles.h2DarkSm}>
              For Students, Professionals and Job Seekers
            </h2>
            <div style={styles.audienceList}>
              {audiences.map((a) => (
                <div key={a.title} style={styles.audienceItem}>
                  <span style={styles.audienceIconCircle}>
                    <Icon name={a.icon} size={18} />
                  </span>
                  <h4 style={styles.audienceTitle}>{a.title}</h4>
                  <p style={styles.audienceBody}>{a.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span style={styles.eyebrowDark}>WHY CHOOSE ELECTRICSINE</span>
            <h2 style={styles.h2DarkSm}>Key Benefits</h2>
            <div className="es-about-grid-2" style={styles.twoColCheck}>
              <div>
                {benefitsLeft.map((b) => (
                  <CheckRow key={b} text={b} />
                ))}
              </div>
              <div>
                {benefitsRight.map((b) => (
                  <CheckRow key={b} text={b} dim />
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              ...styles.learnerCard,
              backgroundImage: `linear-gradient(180deg, rgba(20,19,42,0.35), rgba(20,19,42,0.92)), url(${LEARNER_BG_IMAGE})`,
            }}
          >
            <h3 style={styles.learnerTitle}>Built for Engineering Learners</h3>
            <p style={styles.learnerBody}>
              ElectricSine is built around the needs of Electrical, Electronics,
              Communication and Instrumentation engineering learners. Our
              objective is simple: to make Electrical Engineering online
              learning more structured, practice-oriented, and career-focused.
            </p>
            <p style={styles.learnerTagline}>
              Learn. Practice. Understand. Improve.
            </p>
          </div>
        </section>

        <section className="es-about-row-wrap" style={styles.ctaBar}>
          <div style={styles.ctaBarLeft}>
            <span style={styles.eyebrowLight}>— TAKE THE NEXT STEP</span>
            <h2 style={styles.ctaBarTitle}>Your Goals. Our Support.</h2>
            <p style={styles.ctaBarBody}>
              Explore ElectricSine and take the next step toward stronger
              knowledge and career preparation.
            </p>
          </div>
          <div style={styles.ctaBarRight}>
            {ctaPillars.map((p) => (
              <div key={p.label} style={styles.ctaPillarItem}>
                <span style={styles.ctaPillarIcon}>
                  <Icon name={p.icon} size={18} />
                </span>
                <span style={styles.ctaPillarLabel}>{p.label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style>{`
        :root {
          --fs-35: 35px;
          --fs-25: 25px;
          --fs-22: 22px;
          --fs-18: 18px;
          --fs-15: 15px;
          --fs-14: 14px;
        }
        @media (max-width: 640px) {
          :root {
            --fs-35: 33px;
            --fs-25: 23px;
            --fs-22: 20px;
            --fs-18: 16px;
            --fs-15: 13px;
            --fs-14: 12px;
          }
        }
        .es-about-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .es-about-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .es-about-row-wrap {
          display: flex;
          flex-wrap: wrap;
        }
        @media (max-width: 900px) {
          .es-about-grid-3 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 640px) {
          .es-about-grid-3 {
            grid-template-columns: 1fr;
          }
          .es-about-grid-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}

const NAVY = "#14132A";
const NAVY_SOFT = "#1B1A3A";
const ACCENT = "#6C63FF";
const ACCENT_LIGHT = "#8C82FF";
const TEXT_GRAY = "#5B5B6E";
const BG_LIGHT = "#F6F5FB";
const LAVENDER = "#EEF0FC";
const FONT = "'Inter', sans-serif";

const styles = {
  page: { backgroundColor: "#fff" },

  hero: { backgroundColor: NAVY, padding: "48px 24px 64px" },
  heroInner: {
    width: "100%",
    alignItems: "center",
    gap: "40px",
  },
  heroText: { flex: "1 1 380px", minWidth: 0 },
  eyebrowLight: {
    fontFamily: FONT,
    fontSize: "var(--fs-14)",
    fontWeight: 600,
    color: ACCENT_LIGHT,
    letterSpacing: "0.03em",
    display: "block",
    marginBottom: "14px",
  },
  eyebrowDark: {
    fontFamily: FONT,
    fontSize: "var(--fs-14)",
    fontWeight: 600,
    color: ACCENT,
    letterSpacing: "0.03em",
    display: "block",
    marginBottom: "12px",
  },
  h1: {
    fontFamily: FONT,
    fontWeight: 700,
    fontSize: "var(--fs-35)",
    lineHeight: 1.25,
    color: "#fff",
    margin: "0 0 16px",
  },
  accentText: { color: ACCENT_LIGHT },
  heroParagraph: {
    fontFamily: FONT,
    fontSize: "var(--fs-18)",
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.72)",
    margin: "0 0 26px",
    maxWidth: "none",
  },
  pillarRow: { display: "flex", gap: "26px", flexWrap: "wrap" },
  pillarItem: { display: "flex", alignItems: "center", gap: "10px" },
  pillarIcon: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    backgroundColor: ACCENT,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 auto",
  },
  pillarTitle: {
    fontFamily: FONT,
    fontWeight: 600,
    fontSize: "var(--fs-18)",
    color: "#fff",
  },
  pillarSub: {
    fontFamily: FONT,
    fontSize: "var(--fs-14)",
    color: "rgba(255,255,255,0.55)",
  },
  heroImageWrap: { flex: "1 1 340px", minWidth: 0 },
  heroImage: {
    width: "100%",
    height: "auto",
    borderRadius: "16px",
    display: "block",
    objectFit: "cover",
  },

  infoRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "24px",
    width: "100%",
  },

  heroImageBulbWrap: {
    flex: "0 0 110px",
    width: "110px",
    minWidth: 0,
  },

  heroImageBulb: {
    width: "100%",
    height: "auto",
    borderRadius: "16px",
    display: "block",
    objectFit: "contain",
  },

  infoContent: {
    flex: "1 1 auto",
    minWidth: 0,
  },
  primaryButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: ACCENT,
    color: "#fff",
    fontFamily: FONT,
    fontWeight: 600,
    fontSize: "var(--fs-18)",
    padding: "12px 22px",
    borderRadius: "999px",
    textDecoration: "none",
  },

  moreSection: { backgroundColor: "#fff", padding: "72px 24px" },
  moreInner: {
    width: "100%",
    alignItems: "flex-start",
    gap: "40px",
  },
  h2Dark: {
    fontFamily: FONT,
    fontWeight: 700,
    fontSize: "var(--fs-25)",
    color: NAVY,
    margin: "0 0 16px",
  },
  h2DarkSm: {
    fontFamily: FONT,
    fontWeight: 700,
    fontSize: "var(--fs-25)",
    color: NAVY,
    margin: "0 0 20px",
  },
  darkParagraph: {
    fontFamily: FONT,
    fontSize: "var(--fs-18)",
    lineHeight: 1.7,
    color: TEXT_GRAY,
    margin: "0 0 14px",
  },
  lavenderBox: {
    flex: "1 1 380px",
    minWidth: 0,
    backgroundColor: LAVENDER,
    borderRadius: "16px",
    padding: "32px",
  },
  boxLabel: {
    fontFamily: FONT,
    fontWeight: 600,
    fontSize: "var(--fs-18)",
    color: NAVY,
    margin: "10px 0 12px",
  },

  twoColCheck: { gap: "6px 20px" },
  checkRow: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
    padding: "5px 0",
  },
  checkDot: {
    width: "17px",
    height: "17px",
    borderRadius: "50%",
    backgroundColor: ACCENT,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 auto",
  },
  checkText: { fontFamily: FONT, fontSize: "var(--fs-18)", color: "#2E2D45" },

  /* SUBJECTS */
  subjectsSection: { backgroundColor: BG_LIGHT, padding: "72px 24px" },
  subjectsHeader: {
    flexDirection: "column",
    width: "100%",
    margin: "0 0 32px",
    justifyContent: "space-between",
    gap: "5px",
  },
  subjectsIntro: {
    fontFamily: FONT,
    fontSize: "var(--fs-18)",
    color: TEXT_GRAY,
    margin: 0,
  },
  subjectGrid: {
    width: "100%",
    gap: "20px",
  },
  subjectCard: {
    backgroundColor: "#fff",
    borderRadius: "14px",
    padding: "26px 22px",
    boxShadow: "0 6px 18px rgba(20,19,42,0.05)",
  },
  subjectIconCircle: {
    width: "38px",
    height: "38px",
    borderRadius: "10px",
    backgroundColor: LAVENDER,
    color: ACCENT,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "14px",
  },
  subjectTitle: {
    fontFamily: FONT,
    fontWeight: 700,
    fontSize: "var(--fs-22)",
    color: NAVY,
    margin: "0 0 8px",
  },
  subjectBody: {
    fontFamily: FONT,
    fontSize: "var(--fs-18)",
    lineHeight: 1.6,
    color: TEXT_GRAY,
    margin: 0,
  },

  panelsRow: {
    padding: "64px 24px",
    gap: "20px",
    alignItems: "stretch",
  },
  panel: {
    backgroundColor: BG_LIGHT,
    borderRadius: "16px",
    padding: "30px 26px",
  },
  panelDark: { backgroundColor: NAVY },
  panelTitleLight: {
    fontFamily: FONT,
    fontWeight: 700,
    fontSize: "var(--fs-22)",
    color: "#fff",
    margin: "0 0 12px",
    lineHeight: 1.3,
  },
  panelTitleDark: {
    fontFamily: FONT,
    fontWeight: 700,
    fontSize: "var(--fs-22)",
    color: NAVY,
    margin: "0 0 12px",
    lineHeight: 1.3,
  },
  panelBodyLight: {
    fontFamily: FONT,
    fontSize: "var(--fs-18)",
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.72)",
    margin: "0 0 16px",
  },
  panelBodyDark: {
    fontFamily: FONT,
    fontSize: "var(--fs-18)",
    lineHeight: 1.6,
    color: TEXT_GRAY,
    margin: "0 0 14px",
  },

  /* THREE COL */
  threeColSection: {
    padding: "64px 24px",
    gap: "32px",
    alignItems: "start",
  },
  audienceList: { display: "flex", flexDirection: "column", gap: "22px" },
  audienceItem: {},
  audienceIconCircle: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    backgroundColor: LAVENDER,
    color: ACCENT,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",
  },
  audienceTitle: {
    fontFamily: FONT,
    fontWeight: 700,
    fontSize: "var(--fs-22)",
    color: NAVY,
    margin: "0 0 5px",
  },
  audienceBody: {
    fontFamily: FONT,
    fontSize: "var(--fs-18)",
    lineHeight: 1.6,
    color: TEXT_GRAY,
    margin: 0,
  },

  learnerCard: {
    borderRadius: "16px",
    padding: "28px 24px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  learnerTitle: {
    fontFamily: FONT,
    fontWeight: 700,
    fontSize: "var(--fs-22)",
    color: "#fff",
    margin: "0 0 10px",
  },
  learnerBody: {
    fontFamily: FONT,
    fontSize: "var(--fs-18)",
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.8)",
    margin: "0 0 14px",
  },
  learnerTagline: {
    fontFamily: "'Caveat', cursive",
    fontSize: "var(--fs-22)",
    color: ACCENT_LIGHT,
    margin: 0,
  },

  /* CTA BAR */
  ctaBar: {
    backgroundColor: NAVY_SOFT,
    padding: "48px 24px",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "32px",
  },
  ctaBarLeft: { flex: "1 1 340px", minWidth: 0 },
  ctaBarTitle: {
    fontFamily: FONT,
    fontWeight: 700,
    fontSize: "var(--fs-25)",
    color: "#fff",
    margin: "0 0 10px",
  },
  ctaBarBody: {
    fontFamily: FONT,
    fontSize: "var(--fs-18)",
    color: "rgba(255,255,255,0.68)",
    margin: "0 0 20px",
    maxWidth: "480px",
  },
  ctaBarRight: { display: "flex", gap: "28px", flexWrap: "wrap" },
  ctaPillarItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  },
  ctaPillarIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "rgba(108,99,255,0.18)",
    color: ACCENT_LIGHT,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ctaPillarLabel: {
    fontFamily: FONT,
    fontSize: "var(--fs-14)",
    color: "rgba(255,255,255,0.75)",
  },
};
