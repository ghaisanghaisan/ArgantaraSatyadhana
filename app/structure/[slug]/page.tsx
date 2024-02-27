import styles from "./structure.module.css";
import Image from "next/image";
import PersonCard from "@/app/_components/Person Card/PersonCard";

import DATA_STRUKTUR from "@/app/_src/DATA_STRUKTUR";

export default function Structure({ params }: { params: { slug: string } }) {
	const data = DATA_STRUKTUR[params.slug];

	if (data) {
		return (
			<div className={styles.structure}>
				<Image
					className={styles.lambid}
					src={`/lambid/${data.nama}.png`}
					alt="LOGO"
					height="2048"
					width="2048"
				/>
				<div className={styles.structureTitle}>
					<h1 className="title">{data.nama}</h1>
					<h2 className="subtitle">{data.seksiDesc}</h2>
				</div>
				<p className="body">{data.lambidDesc}</p>
				<div className="personCardListWrapper">
					<div className="personCardList">
						<PersonCard
							nama={data.ketua}
							jabatan={`${data.anggota.length > 0 ? "Ketua" : ""} ${data.nama}`}
							foto={`/struktur/${data.ketua}.png`}
						/>
						{data.anggota.map((nama, index) => (
							<PersonCard
								nama={nama}
								jabatan={`Anggota ${data.nama}`}
								key={index}
								foto={`/struktur/${nama}.png`}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}

	return <div>ERROR</div>;
}
