"use client";
import Image, { StaticImageData } from "next/image";
import styles from "./page.module.css";
import OutButton from "./_components/OutButton";
import PersonCard from "./_components/Person Card/PersonCard";
import LLFM from "@/public/LOGO 55FM.png";
import Link from "next/link";
import Carousel from "./_components/Carousel/Carousel";
import hargur from "@/public/hargur.jpg";

import SCOPELLA from "@/public/SCOPELLA.jpg";
import PETRICALS from "@/public/PETRICALS.png";
import SMAN from "@/public/SMAN55.png";

import DATA_GALLERY from "./_src/DATA_GALLERY";
import { fetchPhotos } from "./actions";
import { useEffect, useState } from "react";
import { drive_v3 } from "googleapis";

function ProkerButton(props: {
	name: string;
	description: string;
	img: StaticImageData;
	to: string;
	id?: string;
}) {
	return (
		<Link
			href={props.to}
			className={styles.ProkerButton}
			target="_blank"
			id={props.id}>
			<div className={styles.ProkerDesc}>
				<h1 className="subtitle">{props.name}</h1>
				<h2 className="regular">{props.description}</h2>
			</div>
			<Image src={props.img} alt="Logo 55FM" />
		</Link>
	);
}
export default function Home({}) {
	const [photos, setPhotos] = useState<drive_v3.Schema$File[] | undefined>([]);
	useEffect(() => {
		const fetch = async () => {
			const photoHead = await fetchPhotos();

			setPhotos(photoHead);
		};

		fetch();
	});

	return (
		<main>
			<div className={styles.hero}>
				<div className={styles.heroInfo} id={styles.white}>
					<div>
						<h1 className="title">SMAN 55 JAKARTA’S</h1>
						<h1 className="title">STUDENT COUNCIL</h1>
					</div>
					<p className="body">
						Semangat tanpa batas, <br /> Profesionalitas, <br />
						serta jujur dan berani.
					</p>
					<div className={styles.infoLink} id={styles.start}>
						<OutButton to="#info">Learn More</OutButton>
					</div>
				</div>
				<Carousel contentInfo={DATA_GALLERY}>
					{DATA_GALLERY.map((item, index) => (
						<Image
							src={`/gallery/${item.nama}.jpg`}
							alt={item.nama}
							width={1920}
							height={1080}
							key={index}
						/>
					))}
				</Carousel>
			</div>
			<div className={styles.page_slide}>
				<div className={styles.page_title}>
					<h2 className="subtitle" id="info">
						We Are
					</h2>
					<h1 className="title">
						ARGANTARA
						<br />
						SATYADHANA
					</h1>
				</div>
				<p className="body">
					Kami memiliki tujuan mulia untuk mendukung semangat kebersamaan dan
					kebijakan yang kokoh di antara siswa SMAN 55 Jakarta. Melalui kegiatan
					OSIS/MPK, kami berkomitmen untuk memperkaya keterampilan, meningkatkan
					disiplin, serta mengembangkan aspek spiritual siswa demi mencapai
					kemajuan yang berkelanjutan.
				</p>
				<div className={styles.infoLink} id={styles.end}>
					{/* <OutButton to="/about">Learn More</OutButton> */}
				</div>
			</div>
			<div className={styles.page_slide}>
				<div className={styles.page_title}>
					<h2 className="subtitle">Our Team</h2>
					<h1 className="title">LEADERS</h1>
				</div>
				<div className="personCardListWrapper">
					<div className="personCardList">
						<PersonCard
							nama="Muhammad Alfiansyah"
							jabatan="Ketua OSIS"
							foto="/struktur/Muhammad Alfiansyah.png"
						/>
						<PersonCard
							nama="Naysilla Namira"
							jabatan="Ketua MPK"
							foto="/struktur/Naysilla Namira.png"
						/>
						<PersonCard
							nama="Altius Vieddy"
							jabatan="Wakil Ketua OSIS"
							foto="/struktur/Altius Vieddy.png"
						/>
						<PersonCard
							nama="Ardeshir Hammurabi"
							jabatan="Wakil Ketua MPK"
							foto="/struktur/Ardeshir Hammurabi.png"
						/>
					</div>
				</div>
				<div className={styles.infoLink}>
					<p className="regular">We are a team after all</p>
					<OutButton to="/structure">See our full Structure</OutButton>
				</div>
			</div>
			<div className={styles.page_slide} id={styles.Proker}>
				<div className={styles.page_title} id={styles.white}>
					<h2 className="subtitle">Check Out</h2>
					<h1 className="title">Our Stuff</h1>
				</div>
				<div className={styles.ProkerList}>
					<ProkerButton
						name="Podcast"
						description="Isi mendalam tentang yang sedang terjadi di SMAN 55!
						"
						img={LLFM}
						to="https://www.spotify.com"
					/>
					<ProkerButton
						name="Instagram"
						description="Akun instagram milik MPK/OSIS SMAN 55!
						"
						img={SMAN}
						to="https://www.instagram.com/mpkosis55/"
						id={styles.INSTAGRAM}
					/>
					<ProkerButton
						name="Petricals"
						description="Drama musical ala ala anak SMA!
						"
						img={PETRICALS}
						to="https://www.instagram.com/petricals/"
						id={styles.PETRICALS}
					/>
					<ProkerButton
						name="Scopella"
						description="Sport Competion bergengsi antar SMA/SMP sederajat!
						"
						img={SCOPELLA}
						to="https://www.instagram.com/scopella2024/"
						id={styles.SCOPELLA}
					/>
				</div>
			</div>
			<div className={styles.page_slide} id={styles.Gallery}>
				<div className={styles.page_title} id={styles.white}>
					<h2 className="subtitle">Check Out</h2>
					<h1 className="title">Our Gallery</h1>
				</div>
				<div className={styles.galleryGrid}>
					{photos!.map((item, index) => (
						<Link
							key={index}
							href={item.webViewLink ? item.webViewLink : ""}
							className="galleryPhoto">
							<Image
								src={item.thumbnailLink ? item.thumbnailLink : ""}
								alt="Foto Dokumentasi"
								width="300"
								height="300"
								unoptimized
							/>
						</Link>
					))}
				</div>
				<div
					className={styles.infoLink}
					style={{
						color: "white",
					}}>
					<p className="regular">Searching for your photo?</p>
					<OutButton to="/gallery">See our full Gallery</OutButton>
				</div>
			</div>
			<div className={styles.page_slide} id={styles.footer}>
				<div className={styles.footerLinks}>
					<Link className="light" href="/">
						Home
					</Link>
					{/* <Link className="light" href="/about">
						About
					</Link> */}
					<Link className="light" href="/structure">
						Structure
					</Link>
					<Link className="light" href="/gallery">
						Gallery
					</Link>
				</div>
				<div className={styles.footerContacts}>
					<p className="body">Contact Us</p>
					<p className="light">
						Jl. Potlot II No.2, RT.2/RW.3, Duren Tiga, Kec. Pancoran, Kota
						Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12760
					</p>
					<p className="light">
						Email: mpkosis.sman55@gmail.com <br />
						Instagram: @mpkosis55 <br />
						<br />
						LINE (MPK): haniiarkan
						<br />
						LINE (OSIS): velyn280307
					</p>
				</div>
			</div>
		</main>
	);
}
