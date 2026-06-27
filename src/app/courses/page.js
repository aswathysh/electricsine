import CoursesClient from "./CoursesClient";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://electricsign.in/public/api";

async function fetchSubjects() {
  try {
    const response = await fetch(`${API_URL}/subjects`, {
      cache: "no-store",
      headers: {
        "User-Agent": "Next.js-Server",
      },
    });

    if (!response.ok) {
      throw new Error(`Unable to load subjects: ${response.status}`);
    }

    const json = await response.json();
    return json?.data ?? [];
  } catch (error) {
    console.error("Courses page fetch error:", error);
    return [];
  }
}

export default async function Home() {
  const subjects = await fetchSubjects();

  return <CoursesClient subjects={subjects} />;
}
