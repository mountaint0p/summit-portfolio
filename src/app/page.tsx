import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `
Hi! My name is Summit Pradhan. I'm a senior at Swarthmore College majoring in 
computer science and minoring in math and psychology. I have experience in 
software engineering, including two backend SWE internships at Robinhood. 
I'm interested in distributed systems, data + ML infrastructure, and backend engineering.
Currently, I'm looking for new grad roles for 2025. 

Feel free to contact me at spradha1 [at] swarthmore [dot] edu.
`;

export async function generateMetadata() {
	return {
		title: "About Me",
		description: "Learn more about Summit Pradhan",
		openGraph: {
			title: "About Me",
			description: "Learn more about Summit Pradhan",
			images: [
				signOgImageUrl({
					title: "Summit Pradhan",
					label: "About Me",
					brand: config.blog.name,
				}),
			],
		},
	};
}

const Page = async () => {
	return (
		<div className="container mx-auto px-5">
			<Header />
			<div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
				<Markdown>{content}</Markdown>
			</div>
			<Footer />
		</div>
	);
};

export default Page;
