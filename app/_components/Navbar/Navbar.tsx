"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { MdMenu } from "react-icons/md";
import logo from "@/public/LOGO TANPA BG.PNG.png";
import { useState } from "react";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<nav className={styles.nav}>
			<Link href="/">
				<Image src={logo} alt="Logo of Argantara Satyadhana" />
			</Link>
			<div className={styles.navMenuBtn} onClick={() => setMenuOpen(true)}>
				<MdMenu />
			</div>
			{menuOpen && (
				<div
					className={styles.navMenuWrapper}
					onClick={() => {
						console.log("HEY");
						setMenuOpen(false);
					}}></div>
			)}
			<div
				className={styles.navMenu}
				style={{
					transform: menuOpen ? "translateX(0%)" : "translateX(100%)",
				}}>
				<h1 className="title">
					Argantara <br />
					Satyadhana
				</h1>
				<div className={styles.navMenuLinks}>
					<Link className="subtitle" href="/">
						Home
					</Link>
					<Link className="subtitle" href="/about">
						About
					</Link>
					<Link className="subtitle" href="/structure">
						Structure
					</Link>
					<Link className="subtitle" href="/gallery">
						Gallery
					</Link>
				</div>
			</div>
		</nav>
	);
}
