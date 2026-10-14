export const metadata = {
  title: {
    default: "Electrical Engineering Courses",
    template: "%s | Electric Sine",
  },
  description:
    "Explore Electrical Engineering, Electronics, Instrumentation and Automation online courses with practice questions, mock tests and industry-focused learning.",
  keywords: [
    "Electrical Engineering Courses",
    "Electronics Courses",
    "Instrumentation Courses",
    "Online Engineering Courses",
    "Electric Sine",
    "Mock Test",
    "Practice Questions",
  ],
  alternates: {
    canonical: "https://electricsine.com/courses",
  },
  openGraph: {
    title: "Electrical Engineering Courses | Electric Sine",
    description:
      "Learn Electrical Engineering, Electronics and Instrumentation through online courses.",
    url: "https://electricsine.com/courses",
    siteName: "Electric Sine",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical Engineering Courses | Electric Sine",
    description:
      "Explore Electrical Engineering courses, mock tests and practice questions.",
  },
};

export default function CoursesLayout({ children }) {
  return children;
}
