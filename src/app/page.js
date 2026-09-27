import { BannerCheck } from "@/components/sharables/BannerCheck";
import { Header } from "@/components/sharables/Header";
import "../styles/authStyles.css";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://rubiksoftwares.com/electricsine-api/public/api";

export const revalidate = 3600;

export const metadata = {
  title: "Electrical Engineering Courses, Mock Tests & Exam Preparation",
  description:
    "Prepare for Electrical, Electronics and Instrumentation engineering exams with online courses, previous-year questions, mock tests and topic-wise practice from Electric Sine.",
  keywords: [
    "Electrical Engineering Courses",
    "Electrical Engineering Mock Tests",
    "Electronics Engineering Questions",
    "Instrumentation Engineering",
    "GATE Electrical Preparation",
    "Previous Year Questions",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Electrical Engineering Courses & Exam Preparation | Electric Sine",
    description:
      "Explore engineering courses, practice questions and mock tests for Electrical, Electronics and Instrumentation exams.",
    url: "https://www.electricsine.com/",
    siteName: "Electric Sine",
    type: "website",
    images: [{ url: "/assets/images/electicsignbg.png", alt: "Electric Sine engineering exam preparation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical Engineering Courses & Exam Preparation | Electric Sine",
    description:
      "Online engineering courses, previous-year questions and mock tests for Electrical and Electronics exams.",
    images: ["/assets/images/electicsignbg.png"],
  },
};

async function fetchHomepageCollection(resource) {
  try {
    const response = await fetch(`${API_URL}/${resource}`, {
      next: { revalidate },
    });
    if (!response.ok) throw new Error(`Failed to load ${resource}: ${response.status}`);
    const result = await response.json();
    return Array.isArray(result?.data) ? result.data : [];
  } catch (error) {
    console.error(`Homepage ${resource} fetch error:`, error);
    return [];
  }
}

export default async function Home() {
  const [subjects, articles] = await Promise.all([
    fetchHomepageCollection("subjects"),
    fetchHomepageCollection("blogs"),
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Electric Sine",
    url: "https://www.electricsine.com/",
    description: metadata.description,
    publisher: {
      "@type": "Organization",
      name: "Electric Sine",
      url: "https://www.electricsine.com/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <BannerCheck subjects={subjects} articles={articles} />
    </>
  );
}
