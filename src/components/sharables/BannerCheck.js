import "./bannerCheck.css";
import "./homepageContent.css";
import Image from "next/image";
import Link from "next/link";
import HomeQuiz from "./HomeQuiz";

const getPlainText = (value, limit = 150) =>
  String(value || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, limit);

const getImageUrl = (image) => {
  if (!image) return null;
  if (/^https?:\/\//i.test(image)) return image;
  return `https://rubiksoftwares.com/electricsine-api/public/${image.replace(/^\/+/, "")}`;
};
const features = [
  "Instant Test Analysis — Get detailed results immediately after every test",
  "Topic-Level Breakdown — Identify weak and strong areas with precision",
  "Accuracy & Speed Tracking — Improve both correctness and time management",
  "Progress Over Time — Monitor your improvement with clear performance trends",
];
export const BannerCheck = ({ subjects = [], articles = [] }) => {

  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/aboutus" },
    { name: "Mock Tests", link: "/sample_questions/1" },
    { name: "Courses", link: "/courses" },
    { name: "Blog", link: "/blog" },
  ];
  const cards = [
    {
      num: " Mission",
      title: "Empowering Engineers",
      desc: "To deliver high-quality online test series and question banks for Electrical and Electronics engineers, helping them crack competitive exams and secure jobs in India and abroad.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="card-svg"
          aria-hidden="true"
          focusable="false"
        >
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
      num: " Vision",
      title: "World's Most Trusted",
      desc: "To become the most trusted engineering exam preparation platform for Electrical and Electronics students worldwide.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="card-svg"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      num: " Goal",
      title: "Leading Provider",
      desc: "To build a reliable and affordable online learning and assessment platform for engineers targeting competitive exams and global career opportunities.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="card-svg"
          aria-hidden="true"
          focusable="false"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
  ];

  const cardsSecure = [
    {
      badge: "MASTERY",
      title: "EE Fundamentals",
      desc: "Build strong fundamentals with topic-wise Electrical and Electronics Engineering questions,helping you master concepts and improve accuracy for competitive exams.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="sec-svg"
          aria-hidden="true"
          focusable="false"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      badge: "SIMULATION",
      title: "Mock Test Mastery",
      desc: "Experience real exam conditions with online mock tests, time tracking, and ranking systems to boost speed, accuracy, and confidence.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="sec-svg"
          aria-hidden="true"
          focusable="false"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      badge: "CAREERS",
      title: "Job Prep Focus",
      desc: "Prepare for government jobs, competitive exams, and GCC engineering careers with job-focused practice and industry-relevant questions.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="sec-svg"
          aria-hidden="true"
          focusable="false"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
  ];
  return (
    <>
      <section className="container" aria-label="Hero section">
        <div>
          <div className="leftSection">
            <div>
              <div className="tagPill" aria-label="Subject categories">
                <span className="tagDot" aria-hidden="true" />
                ELECTRICAL · ELECTRONICS · INSTRUMENTATION
              </div>
            </div>

            <h1 className="heroTitle">
              <span className="textWhite">Master Your{"\n"}</span>
              <span className="textBlue">Engineering{"\n"}</span>
              <span className="textAmber">Exams </span>
              <span className="textWhite">Online</span>
            </h1>

            <p className="heroDesc">
              Access solved question papers, adaptive MCQs, timed mock tests,
              and valuable industry insights—everything engineers need to
              succeed in GATE, IES, and beyond.
            </p>

            <div className="btnRow">
              <Link
                href="/sample_questions/1"
                className="btnPrimary"
                aria-label="Start practicing engineering exam questions"
              >
                Start Practicing
              </Link>
            </div>
          </div>

          <div className="statsWrapper">
            <hr className="divider" aria-hidden="true" />
            <div
              className="statsRow"
              role="list"
              aria-label="Platform statistics"
            >
              <div role="listitem">
                <div className="statNum statNumBlue">{subjects.length}</div>
                <div className="statLabel">Courses Available</div>
              </div>
              <div role="listitem">
                <div className="statNum statNumAmber">{articles.length}</div>
                <div className="statLabel">Engineering Articles</div>
              </div>
            </div>
          </div>
        </div>

        <HomeQuiz />
      </section>

      {/* ── About Section ── */}
      <section className="about-wrap" aria-labelledby="about-heading">
        <div className="about-header">
          <div className="about-tag" aria-hidden="true">
            WHO WE ARE
          </div>
          <h2 className="about-title" id="about-heading">
            About Electric Sine
          </h2>
          <p className="about-desc">
            Electric Sine is a leading online platform for Electrical and
            Electronics Engineering question bank and exam preparation. We help
            students and job seekers prepare for competitive exams, government
            jobs, and international engineering careers (GCC & global markets).
            Our platform offers online mock tests, practice questions, and
            real-time assessments designed to improve accuracy, speed, and
            technical knowledge. Whether you&lsquo;re preparing for engineering
            entrance exams, technical interviews, or government sector jobs,
            Electric Sine provides the tools to succeed.
          </p>
        </div>

        <div className="cards-grid" role="list">
          {cards.map((card) => (
            <article className="card" key={card.num} role="listitem">
              <div className="card-num">
                {card.icon}
                {card.num}
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="hero-wrap" aria-labelledby="course-heading">
        <div className="hero-media" aria-hidden="true">
          <div className="hero-circle">
            <div className="hero-circle-inner" />
          </div>
          <div className="hero-img-main">
            <Image
              src="/assets/images/studyImg.png"
              alt="Student studying on laptop for engineering exam preparation"
              className="hero-photo"
              width="340"
              height="480"
              loading="lazy"
            />
          </div>
          <div className="hero-img-thumb">
            <Image
              src="/assets/images/boyStudy.png"
              alt="Young student learning electrical engineering"
              className="hero-thumb-photo"
              width="180"
              height="160"
              loading="lazy"
            />
          </div>
          <div className="hero-squiggle" aria-hidden="true">
            <svg width="60" height="50" viewBox="0 0 60 50" fill="none">
              <defs>
                <marker
                  id="arrow"
                  markerWidth="6"
                  markerHeight="6"
                  refX="3"
                  refY="3"
                  orient="auto-start-reverse"
                >
                  <path d="M0,0 L0,6 L6,3 Z" fill="#F5C842" />
                </marker>
              </defs>
              <path
                d="M5 40 Q20 5 35 25 Q50 45 55 10"
                stroke="#F5C842"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                markerStart="url(#arrow)"
              />
            </svg>
          </div>
        </div>

        <div className="hero-content">
          <h2 className="hero-title" id="course-heading">
            Master Electrical & Electronics Exams with Real-Time Practice{" "}
          </h2>
          <p className="hero-desc">
            Prepare for competitive exams, government jobs, and global
            engineering careers (GCC & abroad) with our advanced online test
            platform designed for Electrical and Electronics engineers.
          </p>

          <ul className="hero-checklist" aria-label="Course features">
            <li>
              <span className="hero-check" aria-hidden="true">
                ✓
              </span>
              <span>
                <strong>Previous Year Questions (PYQs)</strong> - Practice real
                exam questions to understand patterns and improve scoring
                strategy.
              </span>
            </li>
            <li>
              <span className="hero-check" aria-hidden="true">
                ✓
              </span>
              <span>
                <strong>MCQ Practice & Concept Building</strong> - Strengthen
                core Electrical & Electronics concepts with topic-wise
                questions.
              </span>
            </li>
            <li>
              <span className="hero-check" aria-hidden="true">
                ✓
              </span>
              <span>
                <strong>Mock Tests & Performance Analysis</strong> - Take
                full-length tests with real-time results, accuracy tracking, and
                ranking.
              </span>
            </li>
            <li>
              <span className="hero-check" aria-hidden="true">
                ✓
              </span>
              <span>
                <strong>Job-Oriented Preparation (GCC & India)</strong> - Get
                ready for technical interviews and overseas engineering job
                requirements.
              </span>
            </li>
          </ul>

          <div className="cta-btns">
            <Link
              href="/courses"
              className="cta-btn-primary"
              aria-label="View all engineering courses"
            >
              View All Courses <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="sec-wrap" aria-labelledby="security-heading">
        <div className="sec-left">
          {/* <div className="sec-tag" aria-hidden="true"> */}
          {/* Why Engineers Choose Electric Sine */}
          {/* </div> */}
          <h2 className="sec-title" id="security-heading">
            Why Engineers Choose Electric Sine
          </h2>
          <p className="sec-desc">
            Built for ambitious engineers, Electric Sine delivers a
            results-driven learning experience with advanced practice systems,
            real-time evaluation, and structured exam strategies to help you
            perform at your best in competitive exams and global opportunities.
          </p>
          <div className="sec-line" aria-hidden="true" />
        </div>

        <div className="sec-cards" role="list">
          {cardsSecure.map((c, index) => (
            <article
              className={`sec-card ims-security-card-${index + 1}`}
              key={c.badge}
              role="listitem"
            >
              <div className="sec-icon" aria-hidden="true">
                {c.icon}
              </div>
              <div className="sec-badge" aria-hidden="true">
                {c.badge}
              </div>
              <h3 className="sec-card-title">{c.title}</h3>
              <p className="sec-card-text">{c.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-catalog-wrap" aria-labelledby="home-courses-heading">
        <div className="home-content-heading">
          <div className="gr-tag">LEARN AND PRACTICE</div>
          <h2 className="gr-title" id="home-courses-heading">Engineering courses</h2>
          <p className="gr-desc">
            Browse Electrical, Electronics and Instrumentation courses with focused
            descriptions, course duration and pricing.
          </p>

        </div>
        {subjects.length ? (
          <div className="home-course-grid">
            {subjects.slice(0, 3).map((subject) => {
              const image = getImageUrl(subject.image);
              const description = getPlainText(
                subject.short_description || subject.short || subject.description,
              );
              const price = Number(subject.price);
              return (
                <article className="home-content-card" key={subject.id}>
                  <Link className="home-content-card-link" href={`/courses/${encodeURIComponent(subject.url || subject.id)}`}>
                    {image && (
                      <Image
                        className="home-content-image"
                        src={image}
                        alt={subject.image_alt || subject.title}
                        width={480}
                        height={270}
                        loading="lazy"
                      />
                    )}
                    <div className="home-content-card-body">
                      <h3>{subject.title}</h3>
                      <p>{description || "Explore this engineering course and build stronger subject knowledge."}</p>
                      <span className="home-content-card-meta">
                        {Number.isFinite(price) ? `From ₹${price.toLocaleString("en-IN")}` : "Explore course"}
                      </span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        ) : (
          <p className="home-content-empty">Courses are temporarily unavailable. Browse all courses for updates.</p>
        )}
        <div className=" text-center cta-btns">
          <Link className="btn-primary mt-10 mb-10 m-auto home-all-link" href="/courses">View all courses</Link>
        </div>
      </section>
      <section className="gr-wrap" aria-labelledby="grading-heading">
        <div className="gr-left">
          <div className="gr-title" aria-hidden="true">
            Performance Insights That Drive Results
          </div>

          <p className="gr-desc">
            Get deeper insights into your Electrical and Electronics exam
            performance with real-time analytics, helping you identify weak
            areas and improve faster.
          </p>
          <ul className="gr-list" aria-label="Grading features">
            {features.map((f) => (
              <li key={f}>
                <span className="gr-dot" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="gr-right" aria-label="Subject performance chart">
          <div className="perf-title">SUBJECT PERFORMANCE</div>
          {subjects.map((s, index) => (
            <div className="perf-row" key={s.label}>
              <div className="perf-label">{s.label}</div>
              <div
                className="perf-bar-bg"
                role="progressbar"
                aria-valuenow={s.pct}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${s.label} performance ${s.pct} percent`}
              >
                <div className={`perf-bar ims-progress-width-${s.pct} ims-performance-color-${index + 1}`} />
              </div>
              <div className="perf-pct" aria-hidden="true">
                {s.pct}%
              </div>
            </div>
          ))}

          <div className="btn-row">
            <a
              className="btn-primary"
              aria-label="Continue to next subject"
              href="/courses"
            >
              Continue
            </a>
            <div className="badge-v1" aria-label="24 by 7 support available">
              <span className="dot" aria-hidden="true" />
              24 × 7 Support
            </div>
          </div>
        </div>
      </section>
      <section className="home-articles-wrap" aria-labelledby="home-articles-heading">
        <div className="home-content-heading">
          <div className="gr-tag">FROM THE ELECTRIC SINE BLOG</div>
          <h2 className="gr-title" id="home-articles-heading">Engineering articles and career guides</h2>
        </div>
        {articles.length ? (
          <div className="home-article-grid">
            {articles.slice(0, 3).map((article) => {
              const image = getImageUrl(article.image);
              const description = getPlainText(
                article.meta_description || article.short_description || article.description,
              );
              return (
                <article className="home-content-card" key={article.id || article.slug}>
                  <Link className="home-content-card-link" href={`/blog/${encodeURIComponent(article.slug)}`}>
                    {image && (
                      <Image
                        className="home-content-image"
                        src={image}
                        alt={article.image_alt || article.title}
                        width={480}
                        height={270}
                        loading="lazy"
                      />
                    )}
                    <div className="home-content-card-body">
                      <h3>{article.title}</h3>
                      <p>{description || "Read the latest engineering study guide from Electric Sine."}</p>
                      <span className="home-content-card-meta">Read article</span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        ) : (
          <p className="home-content-empty">New engineering articles will appear here.</p>
        )}
      </section>

      <section className="cta-outer" aria-labelledby="cta-heading">
        <div className="cta-card">
          <div className="cta-left">
            <h2 className="cta-title" id="cta-heading">
              Start Your Engineering Success Journey Today
            </h2>
            <p className="cta-desc">
              Join thousands of engineers preparing with our Electrical and
              Electronics Engineering question bank, mock tests, and
              performance-driven learning platform for competitive exams and
              global careers.
            </p>
            <p className="cta-desc-sub">
              👉 10,000+ Questions | 5,000+ Engineers | India & GCC Focus
            </p>
            <p className="cta-desc-sub">
              {`✅\u00A0\u00A0No risk. Start free and upgrade as you grow.`}{" "}
            </p>
          </div>
          <div className="cta-btns">
            <Link
              href="/sample_questions/3"
              className="cta-btn-primary"
              aria-label="Get started with Electric Sine for free"
            >
              Start Free Test
            </Link>
          </div>
        </div>
      </section>

      <footer className="ft-wrap" role="contentinfo" aria-label="Site footer">
        <div className="ft-main">
          <div className="ft-brand">
            <h2>Electric Sine</h2>
            <p className="ft-address">
              Empowering engineers with Electrical and Electronics exam
              preparation, mock tests, and global career readiness tools.
              <br />
              Prepare smarter. Perform better.
            </p>

            <div className="ft-socials">
              {[
                { icon: "𝕏", label: "Twitter" },
                { icon: "f", label: "Facebook" },
                { icon: "in", label: "Instagram" },
                { icon: "S", label: "Skype" },
                { icon: "in", label: "LinkedIn" },
              ].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="ft-soc-btn"
                  aria-label={`Follow us on ${s.label}`}
                >
                  <span aria-hidden="true">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <nav className="ft-col" aria-label="Footer navigation">
            <h3>Useful Links</h3>
            <ul className="ft-links">
              {links.map((l, i) => (
                <li key={i}>
                  <Link href={l.link}>{l.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="ft-col" aria-label="Footer navigation">
            <h3>Exams & Careers</h3>
            <p className="ft-address">
              👉 Govt Exam Preparation
              <br />
              👉 Competitive Exams
              <br />
              👉 GCC Engineering Jobs
              <br />
              👉 Interview Preparation
            </p>
          </nav>

          <div className="ft-col">
            <h3>Contact</h3>
            <address
              className={["ft-contact-cards", "ims-src-components-sharables-BannerCheck-js-0003"].filter(Boolean).join(" ")}

            >
              <div className="ft-info-card">
                {/* <span className="ft-info-label">Call Us</span> */}
                {/* <span className="ft-info-type">Phone</span> */}
                <span className="ft-info-value">
                  Phone :<a href="tel:+917560884560"> +91 75608 84560</a>
                </span>
              </div>
              <div className="ft-info-card">
                <span className="ft-info-value">
                  Email :
                  <a href="mailto:electricsine2024@gmail.com">
                    electricsine2024@gmail.com
                  </a>
                </span>
              </div>
              <div className="ft-info-card"></div>
            </address>
          </div>
        </div>

        <div className="ft-divider" aria-hidden="true" />

        <div className="ft-bottom">
          <p className="ft-copy">
            © {new Date().getFullYear()} Electric Sine. All rights reserved. |
            Designed for Engineers | Built for Success
          </p>
          <p className="ft-dev">
            Developed by{" "}
            <a href="#" rel="noopener">
              Rubik Software
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};
