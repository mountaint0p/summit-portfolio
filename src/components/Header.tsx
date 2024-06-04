"use client";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";
import { DarkModeToggle } from "./DarkModeToggle";
interface MenuItem {
	name: string;
	href: string;
	openInNewTab?: boolean;
}
const menuItems: MenuItem[] = [
	{ name: "About", href: "/" },
	{ name: "Blog", href: "/posts" },
];
export const Navigation: FunctionComponent = () => {
	const pathname = usePathname();

	return (
		<nav>
			<div className="flex items-center">
				{menuItems.map((item) => (
					<div key={item.href} className="ml-4 md:ml-8">
						<a
							href={item.href}
							target={item.openInNewTab ? "_blank" : "_self"}
							className={cn(
								"hover:text-gray-900",
								pathname === item.href && "font-semibold"
							)}
						>
							{item.name}
						</a>
					</div>
				))}
			</div>
		</nav>
	);
};

export const Header: FunctionComponent = () => {
	return (
		<section className="flex items-center justify-between mt-8 md:mt-16 mb-12">
			<Link href="/">
				<h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
					{config.blog.name}
				</h1>
			</Link>
			<Navigation />
		</section>
	);
};
