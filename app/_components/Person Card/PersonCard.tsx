import styles from "./PersonCard.module.css";

export default function PersonCard(props: { nama: string; jabatan: string }) {
	return (
		<div className={styles.personCard}>
			<div className={styles.personImage}></div>
			<h1>
				{props.nama.split(" ")[0]} <br /> {props.nama.split(" ")[1]}
			</h1>
			<p>{props.jabatan}</p>
		</div>
	);
}
