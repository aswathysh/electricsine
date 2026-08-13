import { BannerCheck } from "@/components/sharables/BannerCheck";
import { Header } from "@/components/sharables/Header";

export const metadata = {
  title: "Electric Sine | Electrical Engineering Courses Online",
  description:
    "Learn Electrical Engineering, Electronics, Instrumentation and Automation through online courses, mock tests and practice questions at Electric Sine.",
  keywords: [
    "Electrical Engineering",
    "Electronics Engineering",
    "Instrumentation",
    "Online Courses",
    "Electrical Mock Test",
    "Practice Questions",
    "Electric Sine",
  ],
  alternates: {
    canonical: "https://www.electricsine.com",
  },
  openGraph: {
    title: "Electric Sine | Electrical Engineering Courses Online",
    description:
      "Online Electrical Engineering courses, mock tests and practice questions.",
    url: "https://www.electricsine.com",
    siteName: "Electric Sine",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electric Sine | Electrical Engineering Courses Online",
    description:
      "Learn Electrical Engineering through online courses and mock tests.",
  },
};

export default function Home() {
  return (
    <div>
      <Header />
      <BannerCheck />
    </div>
  );
}
