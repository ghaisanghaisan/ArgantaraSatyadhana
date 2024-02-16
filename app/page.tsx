"use client";
import Image, { StaticImageData } from "next/image";
import styles from "./page.module.css";
import OutButton from "./_components/OutButton";
import PersonCard from "./_components/Person Card/PersonCard";
import LLFM from "@/public/LOGO 55FM.png";
import Link from "next/link";
import Carousel from "./_components/Carousel/Carousel";
import hargur from "@/public/hargur.jpg";

function ProkerButton(props: {
	name: string;
	description: string;
	img: StaticImageData;
	to: string;
}) {
	return (
		<Link href={props.to} className={styles.ProkerButton} target="_blank">
			<div className={styles.ProkerDesc}>
				<h1 className="subtitle">{props.name}</h1>
				<h2 className="regular">{props.description}</h2>
			</div>
			<Image src={props.img} alt="Logo 55FM" />
		</Link>
	);
}
export default function Home({}) {
	return (
		<main>
			<div className={styles.hero}>
				<div className={styles.heroInfo} id={styles.white}>
					<div>
						<h1 className="title">SMAN 55 JAKARTA’S</h1>
						<h1 className="title">STUDENT COUNCIL</h1>
					</div>
					<p className="body">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Voluptatibus, itaque eveniet eaque id ad beatae nam doloribus atque
						quis reprehenderit!
					</p>
					<div className={styles.infoLink} id={styles.start}>
						<OutButton to="/about">Learn More</OutButton>
					</div>
				</div>
				<Carousel
					contentInfo={[
						{
							title: "Hari Guru",
							desc: "lorem20",
							to: "/gallery/hari-guru-2024",
						},
						{
							title: "Class Meeting",
							desc: "classmeeting",
							to: "/gallery/classmeeting-2023",
						},
					]}>
					<Image src={hargur} alt="adf" />
					<Image src={hargur} alt="adf" />
				</Carousel>
			</div>
			<div className={styles.page_slide}>
				<div className={styles.page_title}>
					<h2 className="subtitle">We Are</h2>
					<h1 className="title">
						ARGANTARA
						<br />
						SATYADHANA
					</h1>
				</div>
				<p className="body">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo nam,
					magni consequatur dolorum eos alias impedit, ratione facere
					reprehenderit incidunt quam aliquam maiores quasi voluptatem id
					ducimus velit error vel quaerat ab ipsa qui itaque. Minus saepe
					corrupti velit quae quod quos illum officia suscipit reiciendis
					facere, nisi blanditiis error!
				</p>
				<div className={styles.infoLink} id={styles.end}>
					<OutButton to="/about">Learn More</OutButton>
				</div>
			</div>
			<div className={styles.page_slide}>
				<div className={styles.page_title}>
					<h2 className="subtitle">Our Team</h2>
					<h1 className="title">LEADERS</h1>
				</div>
				<div className={styles.leadersWrapper}>
					<div className={styles.leaders}>
						<PersonCard nama="Muhammad Alfiansyah" jabatan="Ketua OSIS" />
						<PersonCard nama="Naysilla Namira" jabatan="Ketua MPK" />
						<PersonCard nama="Altius Vieddy" jabatan="Wakil Ketua OSIS" />
						<PersonCard nama="Ardeshir Hammurabi" jabatan="Wakil Ketua MPK" />
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
						description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi."
						img={LLFM}
						to="https://www.spotify.com"
					/>
					<ProkerButton
						name="Podcast"
						description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi."
						img={LLFM}
						to="spotify.com"
					/>
					<ProkerButton
						name="Podcast"
						description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi."
						img={LLFM}
						to="spotify.com"
					/>
				</div>
			</div>
			<div className={styles.page_slide} id={styles.Gallery}>
				<div className={styles.page_title} id={styles.white}>
					<h2 className="subtitle">Check Out</h2>
					<h1 className="title">Our Gallery</h1>
				</div>
				<div className={styles.galleryGridWrapper}>
					<div className={styles.galleryGrid}>
						<div className={styles.galleryPhoto}></div>
						<div className={styles.galleryPhoto}></div>
						<div className={styles.galleryPhoto}></div>
						<div className={styles.galleryPhoto}></div>
						<div className={styles.galleryPhoto}></div>
						<div className={styles.galleryPhoto}></div>
						<div className={styles.galleryPhoto}></div>
						<div className={styles.galleryPhoto}></div>
						<div className={styles.galleryPhoto}></div>
						<div className={styles.galleryPhoto}></div>
						<div className={styles.galleryPhoto}></div>
						<div className={styles.galleryPhoto}></div>
					</div>
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
					<Link className="light" href="/about">
						About
					</Link>
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
						LINE: <br />
						WhatsApp:
					</p>
				</div>
			</div>
		</main>
	);
}
