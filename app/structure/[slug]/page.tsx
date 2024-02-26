import styles from "./structure.module.css";
import Image from "next/image";
import LOGO from "@/public/LOGO TANPA BG.PNG.png";
import PersonCard from "@/app/_components/Person Card/PersonCard";

import DATA_STRUKTUR from "@/app/_src/DATA_STRUKTUR";

export default function Structure({ params }: { params: { slug: string } }) {
	const data = DATA_STRUKTUR[params.slug];

	if (data) {
		return (
			<div className={styles.structure}>
				<Image
					src={`/lambid/${data.nama}.PNG`}
					alt="LOGO"
					height="900"
					width="900"
				/>
				<div className={styles.structureTitle}>
					<h1 className="title">{data.nama}</h1>
					<h2 className="subtitle">{data.seksiDesc}</h2>
				</div>
				<p className="body">{data.lambidDesc}</p>
				<div className="personCardListWrapper">
					<div className="personCardList">
						<PersonCard nama={data.ketua} jabatan={`Ketua ${data.nama}`} />
						{data.anggota.map((nama, index) => (
							<PersonCard
								nama={nama}
								jabatan={`Anggota ${data.nama}`}
								key={index}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}

	return <div>ERROR</div>;
}
