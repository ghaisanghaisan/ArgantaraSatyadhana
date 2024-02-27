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
	lambid,
}: {
	name: string;
	desc: string;
	alias: string;
	to: string;
	lambid?: string;
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

			<Image src={lambid ? lambid : logo} alt="logo" width={900} height={900} />
		</Link>
	);
};

export default function Structure() {
	return (
		<div className={styles.structure}>
			<h1 className="title">MPK</h1>
			<div className={styles.structureSlidesWrapper}>
				<div className={styles.structureSlides}>
					<StructureCard
						name="Pimpinan MPK"
						desc=""
						alias="URANUS ARCHON"
						to={`structure/pimpinan-mpk`}
						lambid="/lambid/BPH/KETUMPK.png"
						key={99}
					/>
					{LIST_DATA_STRUKTUR.bphMPK.map((item, index) => (
						<StructureCard
							name={item.nama}
							desc={item.seksiDesc}
							alias={item.alias}
							to={`structure/${item.slug}`}
							key={index}
							lambid={`/lambid/${item.nama}.png`}
						/>
					))}
				</div>
			</div>
			<div className={styles.structureSlidesWrapper}>
				<div className={styles.structureSlides}>
					{LIST_DATA_STRUKTUR.komMPK.map((item, index) => (
						<StructureCard
							name={item.nama}
							desc={item.seksiDesc}
							alias={item.alias}
							to={`structure/${item.slug}`}
							key={index}
							lambid={`/lambid/${item.nama}.png`}
						/>
					))}
				</div>
			</div>
			<h1 className="title">OSIS</h1>
			<div className={styles.structureSlidesWrapper}>
				<div className={styles.structureSlides}>
					<StructureCard
						name="Pimpinan OSIS"
						desc=""
						alias="IMPERIUS REX & CONSUL"
						to={`structure/pimpinan-osis`}
						lambid="/lambid/BPH/KETOS.png"
						key={99}
					/>
					{LIST_DATA_STRUKTUR.bphOSIS.map((item, index) => (
						<StructureCard
							name={item.nama}
							desc={item.seksiDesc}
							alias={item.alias}
							to={`structure/${item.slug}`}
							key={index}
							lambid={`/lambid/${item.nama}.png`}
						/>
					))}
				</div>
			</div>
			<div className={styles.structureSlidesWrapper}>
				<div className={styles.structureSlides}>
					{LIST_DATA_STRUKTUR.sekbidOSIS.slice(0, 5).map((item, index) => (
						<StructureCard
							name={item.nama}
							desc={item.seksiDesc}
							alias={item.alias}
							to={`structure/${item.slug}`}
							key={index}
							lambid={`/lambid/${item.nama}.png`}
						/>
					))}
				</div>
			</div>
			<div className={styles.structureSlidesWrapper}>
				<div className={styles.structureSlides}>
					{LIST_DATA_STRUKTUR.sekbidOSIS.slice(5).map((item, index) => (
						<StructureCard
							name={item.nama}
							desc={item.seksiDesc}
							alias={item.alias}
							to={`structure/${item.slug}`}
							key={index}
							lambid={`/lambid/${item.nama}.png`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
