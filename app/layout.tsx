import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar/Navbar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Argantara Satyadhana",
	description: "MPK/OSIS SMAN 55 Jakarta",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={outfit.className}>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}
