import Link from "next/link";
import { cache } from 'react';
import "./slug.css";
import { Header } from "@/components/sharables/Header";
import BlogProgress from "./BlogProgress";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// -----------------------------
// Helpers
// -----------------------------

const timeAgo = (dateString) => {
    if (!dateString) return "just now";

    const past = new Date(dateString.replace(" ", "T"));
    const diffMs = Date.now() - past.getTime();

    if (Number.isNaN(diffMs)) return "just now";

    const minutes = Math.floor(diffMs / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
        return `${years} year${years > 1 ? "s" : ""} ago`;
    }

    if (months > 0) {
        return `${months} month${months > 1 ? "s" : ""} ago`;
    }

    if (days > 0) {
        return `${days} day${days > 1 ? "s" : ""} ago`;
    }

    if (hours > 0) {
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    }

    if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    }

    return "just now";
};

const formatDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) return "";

    const currentYear = new Date().getFullYear();

    const day = date.getDate();

    const month = date.toLocaleString("en-US", {
        month: "long",
    });

    const year = date.getFullYear();

    return year === currentYear
        ? `${day} ${month}`
        : `${day} ${month} ${year}`;
};

const getInitials = (author = "") =>
    author
        .split(" ")
        .slice(0, 2)
        .map((word) => word[0])
        .join("")
        .toUpperCase() || "A";

const readTime = (text = "") => {
    const words = text.trim()
        ? text.trim().split(/\s+/).length
        : 0;

    return `${Math.max(1, Math.ceil(words / 200))} min read`;
};

// -----------------------------
// Server-side API functions
// -----------------------------

export const getBlog = cache(async (slug) => {
    const response = await fetch(
        `${API_URL}/blog/${encodeURIComponent(slug)}`,
        {
            // Choose the caching strategy you want.
            // See explanation below.
            next: {
                revalidate: 60,
            },
        }
    );

    if (!response.ok) {
        if (response.status === 404) {
            return null;
        }

        throw new Error("Failed to fetch blog");
    }

    const result = await response.json();

    return result?.data || null;
})

async function getBlogs() {
    const response = await fetch(`${API_URL}/blogs`, {
        next: {
            revalidate: 60,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch blogs");
    }

    const result = await response.json();

    return result?.data || [];
}

// -----------------------------
// Table of Contents
// -----------------------------
export async function generateMetadata({ params }) {
    // Await the params promise to get the slug safely
    const { slug } = await params;

    const article = await getBlog(slug);

    if (!article) {
        return {
            title: "Blog not found",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const title =
        article.meta_title ||
        article.title ||
        "Electric Sine";

    const description =
        article.meta_description ||
        article.short_description ||
        "";

    const canonicalUrl =
        article.canonical_url ||
        `https://electricsine.com/blog/${article.slug}`;

    const ogTitle =
        article.og_title ||
        title;

    const ogDescription =
        article.og_description ||
        description;

    const ogImage =
        article.og_image ||
        article.image;

    return {
        title,

        description,

        keywords: article.focus_keyword
            ? [article.focus_keyword]
            : undefined,

        alternates: {
            canonical: canonicalUrl,
        },

        openGraph: {
            title: ogTitle,
            description: ogDescription,
            url: canonicalUrl,
            type: "article",

            ...(ogImage && {
                images: [
                    {
                        url: ogImage,
                        alt:
                            article.image_alt ||
                            article.title,
                    },
                ],
            }),
        },

        twitter: {
            card: ogImage
                ? "summary_large_image"
                : "summary",

            title: ogTitle,
            description: ogDescription,

            ...(ogImage && {
                images: [ogImage],
            }),
        },
    };
}
function TableOfContents({ paragraphs }) {
    const items = paragraphs
        .filter((paragraph) => paragraph.length > 60)
        .slice(0, 6)
        .map(
            (paragraph) =>
                paragraph.split(".")[0].slice(0, 55) + "…"
        );

    return (
        <aside>
            <div className="es-toc">
                <div className="es-toc__title">
                    Table of contents
                </div>

                {items.map((item, index) => (
                    <a
                        key={index}
                        className={`es-toc__item${index === 0
                            ? " es-toc__item--active"
                            : ""
                            }`}
                    >
                        {item
                            .replace(/<\/?[^>]+(>|$)/g, "")
                            .replace(/[\r\n]+/g, " ")}
                    </a>
                ))}
            </div>
        </aside>
    );
}

// -----------------------------
// Related Card
// -----------------------------

function RelatedCard({ article }) {
    return (
        <Link
            href={`/blog/${article.slug}`}
            className="es-rcard"
        >
            {article.image ? (
                <div className="es-rcard__img">
                    <img
                        src={article.image}
                        alt={article.title}
                    />
                </div>
            ) : (
                <div className="es-rcard__img-fb">
                    📄
                </div>
            )}

            <div className="es-rcard__body">
                <div className="es-rcard__tag">
                    Article
                </div>

                <div className="es-rcard__title">
                    {article.title}
                </div>

                <div className="es-rcard__meta">
                    <span>{article.author}</span>
                    <span>
                        {readTime(article.description)}
                    </span>
                </div>
            </div>
        </Link>
    );
}

// -----------------------------
// Page
// -----------------------------

export default async function BlogDetailPage({
    params,
}) {
    const { slug } = await params;

    // Fetch both requests in parallel.
    const [article, allBlogs] = await Promise.all([
        getBlog(slug),
        getBlogs(),
    ]);

    if (!article) {
        //   notFound();
    }

    const related = allBlogs.filter(
        (blog) => blog.slug !== slug
    );

    const initials = getInitials(article.author);

    const estRead = readTime(
        article.description
    );

    const paragraphs =
        article.description
            ?.split(/\r?\n\r?\n/)
            .map((paragraph) =>
                paragraph
                    .replace(/\r?\n/g, " ")
                    .trim()
            )
            .filter(Boolean) || [];

    const tags = article.tags || [
        "Article",
        "Study",
        "ElectricSine",
    ];

    return (
        <>
            <Header />

            {/* Client component only for browser scroll */}
            <BlogProgress />

            <div className="es-hero">
                <div className="es-hero__inner">

                    <div className="es-breadcrumb">
                        <Link href="/">
                            Home
                        </Link>

                        <span>›</span>

                        <Link href="/blog">
                            Blog
                        </Link>

                        <span>›</span>

                        <span className="es-breadcrumb__current">
                            {article.title.slice(0, 50)}
                            {article.title.length > 50
                                ? "…"
                                : ""}
                        </span>
                    </div>

                    <div className="es-hero__grid">

                        <div className="es-hero__img-wrap">
                            {article.image ? (
                                <img
                                    src={article.image}
                                    alt={article.title}
                                />
                            ) : (
                                <div className="es-hero__img-fb">
                                    📄
                                </div>
                            )}

                            <div className="es-hero__img-overlay" />
                        </div>

                        <div>
                            <div className="es-hero__tag">
                                Article
                            </div>

                            <h1 className="es-hero__title">
                                {article.title}
                            </h1>

                            <div className="es-hero__author">

                                <div className="es-avatar">
                                    {initials}
                                </div>

                                <div>
                                    <div className="es-hero__author-name">
                                        {article.author}
                                    </div>

                                    <div className="es-hero__author-sub">
                                        Content Contributor
                                    </div>
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
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                        />

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
                                        <rect
                                            x="3"
                                            y="4"
                                            width="18"
                                            height="18"
                                            rx="2"
                                        />

                                        <line
                                            x1="16"
                                            y1="2"
                                            x2="16"
                                            y2="6"
                                        />

                                        <line
                                            x1="8"
                                            y1="2"
                                            x2="8"
                                            y2="6"
                                        />

                                        <line
                                            x1="3"
                                            y1="10"
                                            x2="21"
                                            y2="10"
                                        />
                                    </svg>

                                    {formatDate(
                                        article.post_date
                                    )}
                                </span>

                                <span className="es-hero__stat">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />

                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="3"
                                        />
                                    </svg>

                                    Updated{" "}
                                    {timeAgo(
                                        article.updated_at
                                    )}
                                </span>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="es-page-bg">

                <div className="es-body">

                    <TableOfContents
                        paragraphs={paragraphs}
                    />

                    <div className="es-article">

                        <div className="es-article-body">

                            {article.description && (
                                <div
                                    className="es-article__content"
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            article.description,
                                    }}
                                />
                            )}

                        </div>

                        <div className="es-divider" />

                        <div className="es-tags">

                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="es-tag-chip"
                                >
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

                        <div className="es-related__heading">
                            You might also like
                        </div>

                        <div className="es-related__grid">

                            {related
                                .slice(0, 3)
                                .map((blog) => (
                                    <RelatedCard
                                        key={blog.id}
                                        article={blog}
                                    />
                                ))}

                        </div>

                    </div>
                </div>
            )}

            <div className="es-footer">
                <p>
                    © {new Date().getFullYear()} Electric
                    Sine. All rights reserved
                </p>
            </div>
        </>
    );
}
