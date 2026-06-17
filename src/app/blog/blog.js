"use client";

import { useState } from "react";
import "./blog.css";
import { Header } from "@/components/sharables/Header";
import Image from "next/image";
import { useBlogs } from "@/services/PracticeQueris";
import { useRouter } from "next/navigation";

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
        <div className="search-bar">
          <input type="text" placeholder="Search articles, topics, exams…" />
          <button className="search-btn">Search</button>
        </div>
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

function FeaturedCard() {
  return (
    <>
      <div className="featured-card">
        <div className="featured-content">
          <div>
            <div className="featured-meta">
              <span className="tag tag-ink">Featured</span>
              <span className="featured-time">12 min read · May 2026</span>
            </div>
            <h2 className="featured-title">
              The Memory Techniques That Top GMAT Scorers Actually Use
            </h2>
            <p className="featured-excerpt">
              Spaced repetition and active recall are just the beginning. We
              break down the cognitive science behind high-stakes exam prep —
              and the exact routines to apply it.
            </p>
          </div>
          <div>
            <div className="featured-author">
              <div className="author-avatar avatar-a">DR</div>
              <div>
                <div className="author-name-white">Dr. Rashid Okafor</div>
                <div className="author-role">Cognitive Learning Coach</div>
              </div>
            </div>
            <a href="#" className="read-btn">
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
              Cognitive techniques for
              <br />
              high-stakes exams
            </div>
          </div>
          <div className="feat-pills">
            <span className="feat-pill">GMAT</span>
            <span className="feat-pill">Study Science</span>
            <span className="feat-pill">Memory</span>
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
      <a
        onClick={onClick}
        className={`article-card${article.wide ? " wide" : ""}`}
      >
        <div className={`article-thumb`}>
          {article.image ? (
            <Image
              src={article.image}
              alt={"Loading..."}
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
          <p className="article-excerpt">{article.description}</p>
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
          <p>One high-signal email every Sunday. Join 140,000 students.</p>
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

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const { data: blogListDatas, isLoading, error } = useBlogs();
  const router = useRouter();

  const nameClass = ["avatar-a", "avatar-b", "avatar-c", "avatar-d"];
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const currentYear = new Date().getFullYear();

    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    return year === currentYear ? `${day} ${month}` : `${day} ${month} ${year}`;
  };

  const timeAgo = (dateString) => {
    const past = new Date(dateString.replace(" ", "T"));
    const now = new Date();
    const diffMs = now - past;

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
    if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    return "just now";
  };

  const ARTICLES = blogListDatas?.data?.map((item, index) => ({
    ...item,
    wide: index === 0 || index === blogListDatas?.data.length - 1,
    authorInitials: item.author
      .split(" ")
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase(),
    authorClass: nameClass[index % nameClass.length],
    date: formatDate(item.post_date),
    readTime: timeAgo(item?.updated_at),
  }));
  const handleBlogDetail = (slug) => {
    router.push(`/blog/${slug}`);
  };
  return (
    <>
      <div className="app">
        <Navbar />
        <Hero />
        <div className="section">
          <StatsStrip />
          <p className="section-label">Featured article</p>
          <FeaturedCard />
          <CategoryFilter
            active={activeCategory}
            onChange={setActiveCategory}
          />
          <div className="articles-grid">
            {ARTICLES?.map((article) => (
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
