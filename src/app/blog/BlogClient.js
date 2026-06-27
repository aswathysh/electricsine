"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Header } from "@/components/sharables/Header";
import "./blog.css";

const CATEGORIES = [
  "All Articles",
  "Exam Strategy",
  "Mock Tests",
  "GMAT / GRE",
  "IELTS / TOEFL",
  "Professional Certs",
  "Study Science",
  "Time Management",
];

const STATS = [
  { number: "2.4M", label: "Students helped" },
  { number: "840+", label: "Study articles" },
  { number: "96%", label: "Pass rate improvement" },
  { number: "120+", label: "Exams covered" },
];

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Header />
      </nav>
    </>
  );
}

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-eyebrow">Knowledge Base</div>
        <h1 className="hero-title">
          Study smarter,
          <br />
          <em>score higher.</em>
        </h1>
        <p className="hero-subtitle">
          Guides, strategies and deep dives from exam toppers and certified
          coaches — all in one place.
        </p>
      </section>
    </>
  );
}

function StatsStrip() {
  return (
    <>
      <div className="stats-strip">
        {STATS.map((s) => (
          <div key={s.label} className="stat-item">
            <span className="stat-number">{s.number}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function FeaturedCard({ article }) {
  if (!article) return null;

  return (
    <>
      <div className="featured-card">
        <div className="featured-content">
          <div>
            <div className="featured-meta">
              <span className="tag tag-ink">Featured</span>
              <span className="featured-time">12 min read · {article.date}</span>
            </div>
            <h2 className="featured-title">{article.title}</h2>
          </div>
          <div>
            <div className="featured-author">
              <div className="author-avatar avatar-a">DR</div>
              <div>
                <div className="author-name-white">{article.author}</div>
              </div>
            </div>
            <a href={article.link} className="read-btn">
              Read article →
            </a>
          </div>
        </div>
        <div className="featured-visual">
          <div className="feat-deco">
            <div className="ring ring-1" />
            <div className="ring ring-2" />
            <div className="ring ring-3" />
          </div>
          <div className="feat-badge">
            <div className="badge-circle">🧠</div>
            <div className="badge-label">Memory Mastery</div>
            <div className="badge-sub">
              Practice Smarter. Perform Better. Succeed Faster.
            </div>
          </div>
          <div className="feat-pills">
            <span className="feat-pill">Electrical</span>
            <span className="feat-pill">Electonics</span>
            <span className="feat-pill">Instrumentation</span>
          </div>
        </div>
      </div>
    </>
  );
}

function CategoryFilter({ active, onChange }) {
  return (
    <>
      <div className="categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`cat-btn${active === cat ? " active" : ""}`}
            onClick={() => onChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </>
  );
}

function ArticleCard({ article, onClick }) {
  return (
    <>
      <a onClick={onClick} className={`article-card${article.wide ? " wide" : ""}`}>
        <div className={`article-thumb`}>
          {article.image ? (
            <Image
              src={article.image}
              alt={article.title ?? "Article image"}
              fill
              style={{ objectFit: "cover" }}
              loading="lazy"
            />
          ) : (
            <span>{article.emoji}</span>
          )}
        </div>
        <div className="article-body">
          <div className="article-tag-row">
            <span className={`tag ${article.tagClass}`}>{article.tag}</span>
            <span className="article-time">{article.readTime}</span>
          </div>
          <h3 className="article-title">{article.title}</h3>
          <p className="article-excerpt" dangerouslySetInnerHTML={{ __html: article.description }}></p>
          <div className="article-footer">
            <div className="article-author-row">
              <div className={`small-avatar ${article.authorClass}`}>
                {article.authorInitials}
              </div>
              <span className="article-author-name">{article.author}</span>
            </div>
            <span className="article-time">{article.date}</span>
          </div>
        </div>
      </a>
    </>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="newsletter">
        <div className="newsletter-left">
          <h2>
            Weekly prep tips.
            <br />
            Zero noise.
          </h2>
          <p>One high-signal email every Sunday. Join 1400 students.</p>
        </div>
        <div className="newsletter-form">
          <input
            type="email"
            className="newsletter-input"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="newsletter-btn">Subscribe →</button>
        </div>
      </div>
    </>
  );
}

function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
        <span>© 2026 Electric Sine.</span>
        <span className="footer-dot">·</span>
        <span>Built for students</span>
      </footer>
    </>
  );
}

export default function BlogClient({ articles }) {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const router = useRouter();

  const handleBlogDetail = (slug) => {
    router.push(`/blog/${slug}`);
  };

  return (
    <>
      <div className="app" suppressHydrationWarning>
        <Navbar />
        <Hero />
        <div className="section">
          <p className="section-label">Featured article</p>
          {articles && articles.length > 0 && <FeaturedCard article={articles[0]} />}
          <div className="articles-grid">
            {articles?.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onClick={() => handleBlogDetail(article.slug)}
              />
            ))}
          </div>
        </div>
        <div className="section">
          <Newsletter />
        </div>
        <SiteFooter />
      </div>
    </>
  );
}
