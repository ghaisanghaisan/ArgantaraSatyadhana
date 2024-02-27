import styles from "./PersonCard.module.css";
import Image from "next/image";

export default function PersonCard(props: {
	nama: string;
	jabatan: string;
	foto?: string;
}) {
	return (
		<div className={styles.personCard}>
			<div className={styles.personImage}>
				{props.foto && (
					<Image
						src={props.foto!}
						alt={props.nama}
						width={1333}
						height={2000}
					/>
				)}
			</div>
			<h1>
				{props.nama.split(" ")[0]} <br /> {props.nama.split(" ")[1]}
			</h1>
			<p>{props.jabatan}</p>
		</div>
	);
}
