import Image from "next/image";
import PersonCard from "@/app/_components/Person Card/PersonCard";
import KETUMPK from "@/public/lambid/BPH/KETUMPK.png";
import WAKETUMPK from "@/public/lambid/BPH/WAKETUMPK.png";
import styles from "../[slug]/structure.module.css";

export default function Structure({ params }: { params: { slug: string } }) {
	return (
		<div className={styles.structure}>
			<div className={styles.pimpinan}>
				<Image src={KETUMPK} alt="LOGO" />
				<Image src={WAKETUMPK} alt="LOGO" />
			</div>
			<div className={styles.structureTitle}>
				<h1 className="title">Pimpinan MPK</h1>
				<h2 className="subtitle">Ketua dan Wakil Ketua MPK</h2>
			</div>
			<p className="body">
				Dewi Rhea memegang Phoenix Argasatya dan Pandora&apos;s Box. Tulisan
				Uranós Archon menunjukkan Rhea sebagai ibu besar para dewa dan mengacu
				pada posisi langit yang tinggi yang mengayomi para pengurus.
				Pandora&apos;s Box melambangkan adanya kejahatan di dunia dengan harapan
				sebagai hal baik yang tersimpan di dalamnya.
				<br />
				Pandokrator Uranides melambangkan otoritas dan hubungan dengan Uranus.
				Tudung melambangkan selektif antar hubungan dua organisasi (OSIS & MPK),
				garis tameng melindungi organisasi di bawah kepemimpinan. Sayap
				menggambarkan inisiatif dan kecekatan Wakil Ketua MPK dalam menggantikan
				Ketua MPK jika berhalangan, mengacu pada dewa Hermes.
			</p>
			<div className="personCardListWrapper">
				<div className="personCardList">
					<PersonCard nama="Naysilla Namira" jabatan="Ketua MPK" />
					<PersonCard nama="Ardeshir Hammurabi" jabatan="Wakil Ketua MPK" />
				</div>
			</div>
		</div>
	);
}
