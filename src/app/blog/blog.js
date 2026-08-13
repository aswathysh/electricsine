import BlogClient from "./BlogClient";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://rubiksoftwares.com/electricsine-api/public/public/api";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Electrical Engineering Blog | Electric Sine",
  description:
    "Read Electrical Engineering, Electronics, Instrumentation and competitive exam preparation articles, study tips, mock test guides and career insights from Electric Sine.",
  keywords: [
    "Electrical Engineering Blog",
    "Electronics Blog",
    "Instrumentation",
    "Engineering Articles",
    "Study Tips",
    "Mock Test",
    "Electric Sine",
  ],
  alternates: {
    canonical: "https://www.electricsine.com/blog",
  },
  openGraph: {
    title: "Electrical Engineering Blog | Electric Sine",
    description:
      "Engineering articles, exam preparation guides and study resources.",
    url: "https://www.electricsine.com/blog",
    siteName: "Electric Sine",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical Engineering Blog | Electric Sine",
    description: "Electrical Engineering study guides and career articles.",
  },
};

function formatDate(dateString) {
  const date = new Date(dateString);
  const currentYear = new Date().getFullYear();

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  return year === currentYear ? `${day} ${month}` : `${day} ${month} ${year}`;
}

function timeAgo(dateString) {
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
}

async function fetchBlogs() {
  try {
    const response = await fetch(`${API_URL}/blogs`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to load blogs: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Blog page fetch error:", error);
    return { data: [] };
  }
}

export default async function BlogPage() {
  const blogListDatas = await fetchBlogs();
  const articles =
    blogListDatas?.data?.map((item, index) => {
      const authorName = item.author || "";
      const initials = authorName
        .split(" ")
        .slice(0, 2)
        .map((word) => word[0] || "")
        .join("")
        .toUpperCase();

      return {
        ...item,
        wide: index === 0 || index === (blogListDatas?.data?.length ?? 0) - 1,
        authorInitials: initials,
        authorClass: ["avatar-a", "avatar-b", "avatar-c", "avatar-d"][
          index % 4
        ],
        date: formatDate(item.post_date),
        readTime: timeAgo(item?.updated_at),
      };
    }) ?? [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Electric Sine Blog",
            url: "https://www.electricsine.com/blog",
          }),
        }}
      />
      <BlogClient articles={articles} />
    </>
  );
}
