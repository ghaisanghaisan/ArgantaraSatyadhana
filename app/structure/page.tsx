import styles from "./page.module.css";
import logo from "@/public/LOGO TANPA BG.PNG.png";

import Image from "next/image";
import Link from "next/link";

import { LIST_DATA_STRUKTUR } from "../_src/DATA_STRUKTUR";

const StructureCard = ({
	name,
	desc,
	alias,
	to,
}: {
	name: string;
	desc: string;
	alias: string;
	to: string;
}) => {
	return (
		<Link className={styles.structureCard} href={to}>
			<div className={styles.structureCardInfo}>
				<div>
					<h2>{name}</h2>
					<p>{desc}</p>
				</div>
				<h2>{alias}</h2>
			</div>

			<Image src={logo} alt="logo" />
		</Link>
	);
};

export default function Structure() {
	return (
		<div className={styles.structure}>
			<h1 className="title">MPK</h1>
			<div className={styles.structureSlidesWrapper}>
				<div className={styles.structureSlides}>
					{LIST_DATA_STRUKTUR.mpk.map((item, index) => (
						<StructureCard
							name={item.nama}
							desc={item.seksiDesc}
							alias={item.alias}
							to={`structure/${item.slug}`}
							key={index}
						/>
					))}
				</div>
			</div>
			<h1 className="title">OSIS</h1>
			<div className={styles.structureSlidesWrapper}>
				<div className={styles.structureSlides}>
					{LIST_DATA_STRUKTUR.bph.map((item, index) => (
						<StructureCard
							name={item.nama}
							desc={item.seksiDesc}
							alias={item.alias}
							to={`structure/${item.slug}`}
							key={index}
						/>
					))}
				</div>
			</div>
			<div className={styles.structureSlidesWrapper}>
				<div className={styles.structureSlides}>
					{LIST_DATA_STRUKTUR.osis.map((item, index) => (
						<StructureCard
							name={item.nama}
							desc={item.seksiDesc}
							alias={item.alias}
							to={`structure/${item.slug}`}
							key={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
