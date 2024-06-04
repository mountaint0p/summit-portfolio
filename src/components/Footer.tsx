"use client";
import { FunctionComponent } from "react";
import { config } from "@/config";
import { useTheme } from "next-themes";
import { FaGit, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Footer: FunctionComponent = () => {
	const { resolvedTheme } = useTheme();
	return (
		<section className="flex items-center mt-8 md:mt-16 mb-12 gap-4">
			<a href="https://github.com/mountaint0p">
				<div className="flex items-center gap-1 text-sm text-muted-foreground">
					<FaGithub />
					Github
				</div>
			</a>
			<a href="https://www.linkedin.com/in/summitp/">
				<div className="flex items-center gap-1 text-sm text-muted-foreground">
					<FaLinkedin />
					Linkedin
				</div>
			</a>
		</section>
	);
};
