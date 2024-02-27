import Image from "next/image";
import PersonCard from "@/app/_components/Person Card/PersonCard";
import KETOS from "@/public/lambid/BPH/KETOS.png";
import WAKETOS from "@/public/lambid/BPH/WAKETOS.png";
import styles from "../[slug]/structure.module.css";

export default function Structure({ params }: { params: { slug: string } }) {
	return (
		<div className={styles.structure}>
			<div className={styles.pimpinan}>
				<Image src={KETOS} alt="LOGO" />
				<Image src={WAKETOS} alt="LOGO" />
			</div>
			<div className={styles.structureTitle}>
				<h1 className="title">Pimpinan OSIS</h1>
				<h2 className="subtitle">Ketua dan Wakil Ketua OSIS</h2>
			</div>
			<p className="body">
				Imperius Rex: Simbol kekuasaan, keberanian, dan peran penting. Mahkota
				untuk legitimasi, Berlian Merah untuk kekuatan dan kasih sayang.
				Singgasana Raja dan Pilar Doric mencerminkan status dan kejantanan. Dewa
				Zeus simbol kebijakan tertinggi. Sayap menunjukkan tekad, Tongkat
				perjuangan untuk kebenaran, Burung Phoenix untuk kebangkitan. Merah:
				keberanian dan pengorbanan, Kuning: kebahagiaan dan harapan.
				<br />
				<br />
				Imperius Consul memiliki lambang seorang Pangeran yang menunggangi
				seekor Pegasus. Sang Pangeran merepresentasikan seorang Wakil Ketua OSIS
				yang merupakan kaki tangan dari Ketua OSIS. Pegasus merepresentasikan
				kekuatan yang ditunggangi oleh Wakil Ketua OSIS untuk menghidupkan OSIS
				SMAN 55 Jakarta.
			</p>
			<div>
				<div className="personCardListWrapper">
					<div className="personCardList">
						<PersonCard
							nama="Muhammad Alfiansyah"
							jabatan="Ketua OSIS"
							foto="/struktur/Muhammad Alfiansyah.png"
						/>
						<PersonCard
							nama="Altius Vieddy"
							jabatan="Wakil Ketua OSIS"
							foto="/struktur/Altius Vieddy.png"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
