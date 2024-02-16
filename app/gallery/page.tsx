import Link from "next/link";
import styles from "./page.module.css";
import { MdOutlineSearch, MdNavigateNext } from "react-icons/md";

export default function Gallery() {
	return (
		<main>
			<div className={styles.search}>
				<div className={styles.searchBar}>
					<p>Cari program kerja...</p>
				</div>
				<button className={styles.searchBtn}>
					<MdOutlineSearch />
				</button>
			</div>
			<div className={styles.prokerList}>
				<Link href="/" className={styles.prokerDokum}>
					<h1 className="title">Hari Guru 2023</h1>
					<MdNavigateNext className="subtitle" />
				</Link>
			</div>
		</main>
	);
}
