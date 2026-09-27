import { cache } from "react";
import { notFound } from "next/navigation";
import CourseDetailClient from "./CourseDetailClient";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://rubiksoftwares.com/electricsine-api/public/api";
const SITE_URL = "https://www.electricsine.com";
const COURSE_IMAGE_BASE = "https://rubiksoftwares.com/electricsine-api/public/";
export const revalidate = 3600;

const getCourse = cache(async (id) => {
  try {
    const response = await fetch(`${API_URL}/subjects/single/${encodeURIComponent(id)}`, {
      next: { revalidate },
    });
    if (!response.ok) return null;

    const result = await response.json();
    const course =result.data || null;

    if (!course) return null;

    return {
      ...course,
      image: resolveCourseImage(course.image),
    };
  } catch (error) {
    console.error("Course detail fetch error:", error);
    return null;
  }
});

function resolveCourseImage(image) {
  if (!image) return undefined;

  try {
    return new URL(image).toString();
  } catch {
    return new URL(image.replace(/^\/+/, ""), COURSE_IMAGE_BASE).toString();
  }
}

function getPlainDescription(course) {
  const description =
    course.meta_description ||
    course.short_description ||
    course.short ||
    course.description ||
    `Explore ${course.title || "this course"} with Electric Sine's engineering learning resources.`;

  return (
    description
      .replace(/<[^>]*>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 160)
  );
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    return {
      title: "Course not found",
      robots: { index: false, follow: false },
    };
  }

  const title = course.meta_title || `${course.title || "Engineering"} Online Course`;
  const description = getPlainDescription(course);
  const canonicalUrl = `${SITE_URL}/courses/${encodeURIComponent(course.url || id)}`;
  const image = course.og_image
    ? resolveCourseImage(course.og_image)
    : course.image;

  return {
    title,
    description,
    keywords: course.focus_keyword ? [course.focus_keyword] : undefined,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: course.og_title || title,
      description: course.og_description || description,
      url: canonicalUrl,
      siteName: "Electric Sine",
      locale: "en_IN",
      type: "website",
      ...(image && {
        images: [{ url: image, alt: course.image_alt || course.title }],
      }),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title: course.og_title || title,
      description: course.og_description || description,
      ...(image && { images: [image] }),
    },
  };
}

export default async function CourseDetailPage({ params }) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) notFound();

  const price = Number(course.price);
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: course.title,
    description: getPlainDescription(course),
    ...(course.image && { image: course.image }),
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/courses/${encodeURIComponent(course.url || id)}`,
      priceCurrency: "INR",
      ...(Number.isFinite(price) && { price }),
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productData).replace(/</g, "\\u003c"),
        }}
      />
      <CourseDetailClient course={course} />
    </>
  );
}
