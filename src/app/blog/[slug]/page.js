"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useBlogs } from "@/services/PracticeQueris";
import "./slug.css";

const timeAgo = (dateString) => {
  const past = new Date(dateString.replace(" ", "T"));
  const diffMs = Date.now() - past;
  const minutes = Math.floor(diffMs / 60000);
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

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const currentYear = new Date().getFullYear();
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  return year === currentYear ? `${day} ${month}` : `${day} ${month} ${year}`;
};

const getInitials = (author = "") =>
  author
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase() || "A";

const readTime = (text = "") =>
  `${Math.max(1, Math.ceil(text.trim().split(/\s+/).length / 200))} min read`;

function TableOfContents({ paragraphs }) {
  const [active, setActive] = useState(0);
  const items = paragraphs
    .filter((p) => p.length > 60)
    .slice(0, 6)
    .map((p) => p.split(".")[0].slice(0, 55) + "…");

  return (
    <aside>
      <div className="es-toc">
        <div className="es-toc__title">Table of contents</div>
        {items.map((item, i) => (
          <a
            key={i}
            className={`es-toc__item${active === i ? " es-toc__item--active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setActive(i);
            }}
            href="#"
          >
            {item}
          </a>
        ))}
      </div>
    </aside>
  );
}

function RelatedCard({ article }) {
  return (
    <Link href={`/blog/${article.slug}`} className="es-rcard">
      {article.image ? (
        <div className="es-rcard__img">
          <img src={article.image} alt={article.title} />
        </div>
      ) : (
        <div className="es-rcard__img-fb">📄</div>
      )}
      <div className="es-rcard__body">
        <div className="es-rcard__tag">Article</div>
        <div className="es-rcard__title">{article.title}</div>
        <div className="es-rcard__meta">
          <span>{article.author}</span>
          <span>{readTime(article.description)}</span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogDetailPage() {
  const { slug } = useParams();
  const { data: blogListDatas, isLoading } = useBlogs();
  const [article, setArticle] = useState(null);
  const [related, setRelated] = useState([]);
  const progressRef = useRef(null);

  useEffect(() => {
    const all = blogListDatas?.data || [];
    const found = all.find((a) => a.slug === slug);
    const rest = all.filter((a) => a.slug !== slug);
    setArticle(found || null);
    setRelated(rest);
  }, [blogListDatas, slug]);

  useEffect(() => {
    const onScroll = () => {
      const d = document.documentElement;
      const pct = (d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100;
      if (progressRef.current) {
        progressRef.current.style.width = `${Math.min(pct, 100)}%`;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (isLoading) {
    return <div className="es-loading">Loading article…</div>;
  }

  if (!article) {
    return <div className="es-not-found">Article not found.</div>;
  }

  const initials = getInitials(article.author);
  const estRead = readTime(article.description);

  const paragraphs =
    article.description
      ?.split(/\r?\n\r?\n/)
      .map((p) => p.replace(/\r?\n/g, " ").trim())
      .filter(Boolean) || [];

  const pullQuote =
    paragraphs[1]?.split(".")[0]?.length > 40
      ? paragraphs[1].split(".")[0] + "."
      : null;

  const tags = article.tags || ["Article", "Study", "ElectricSine"];

  return (
    <>
      <div className="es-progress" ref={progressRef} style={{ width: "0%" }} />

      <div className="es-hero">
        <div className="es-hero__inner">
          <div className="es-breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/blog">Blog</Link>
            <span>›</span>
            <span className="es-breadcrumb__current">
              {article.title.slice(0, 50)}
              {article.title.length > 50 ? "…" : ""}
            </span>
          </div>

          <div className="es-hero__grid">
            <div className="es-hero__img-wrap">
              {article.image ? (
                <img src={article.image} alt={article.title} />
              ) : (
                <div className="es-hero__img-fb">📄</div>
              )}
              <div className="es-hero__img-overlay" />
            </div>

            <div>
              <div className="es-hero__tag">Article</div>
              <h1 className="es-hero__title">{article.title}</h1>
              <div className="es-hero__author">
                <div className="es-avatar">{initials}</div>
                <div>
                  <div className="es-hero__author-name">{article.author}</div>
                  <div className="es-hero__author-sub">Content Contributor</div>
                </div>
              </div>
              <div className="es-hero__stats">
                <span className="es-hero__stat">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {estRead}
                </span>
                <span className="es-hero__stat">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {formatDate(article.post_date)}
                </span>
                <span className="es-hero__stat">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  Updated {timeAgo(article.updated_at)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="es-page-bg">
        <div className="es-body">
          <TableOfContents paragraphs={paragraphs} />

          <div className="es-article">
            <div className="es-summary">
              <div className="es-summary__label">Article Summary</div>
              <div className="es-summary__text">{paragraphs[0]}</div>
            </div>

            <div className="es-article-body">
              {paragraphs.slice(1).map((para, i) => (
                <div key={i}>
                  <p>{para}</p>
                  {i === 1 && pullQuote && (
                    <div className="es-pull-quote">
                      <p>"{pullQuote}"</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="es-divider" />
            <div className="es-tags">
              {tags.map((tag) => (
                <span key={tag} className="es-tag-chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="es-related">
          <div className="es-related__inner">
            <div className="es-related__heading">You might also like</div>
            <div className="es-related__grid">
              {related.slice(0, 3).map((a) => (
                <RelatedCard key={a.id} article={a} />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="es-footer">
        <p>© {new Date().getFullYear()} Electric Sine. All rights reserved</p>
      </div>
    </>
  );
}
