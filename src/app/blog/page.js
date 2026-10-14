import BlogPage from "./blog";

export const revalidate = 3600;

export const metadata = {
	title: "Electrical Engineering Blog",
	description:
		"Read practical Electrical Engineering, Electronics and Instrumentation articles, exam-preparation guides, study strategies and career insights from Electric Sine.",
	keywords: [
		"Electrical Engineering Blog",
		"Electronics Engineering Articles",
		"Instrumentation Engineering",
		"Engineering Exam Preparation",
		"Study Guides",
		"Electric Sine",
	],
	alternates: {
		canonical: "https://electricsine.com/blog",
	},
	openGraph: {
		title: "Electrical Engineering Blog | Electric Sine",
		description:
			"Engineering articles, exam-preparation guides and study resources for electrical and electronics learners.",
		url: "https://electricsine.com/blog",
		siteName: "Electric Sine",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Electrical Engineering Blog | Electric Sine",
		description:
			"Electrical engineering study guides, exam strategies and career articles.",
	},
};

export default BlogPage;