import Link from "next/link";
import styles from "./page.module.css";
import { MdOutlineSearch, MdNavigateNext } from "react-icons/md";

import DATA_GALLERY from "../_src/DATA_GALLERY";

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
				{DATA_GALLERY.map((item, index) => (
					<Link
						href={`gallery/${item.folderId}`}
						className={styles.prokerDokum}
						key={index}>
						<h1 className="title">{item.nama}</h1>
						<MdNavigateNext className="subtitle" />
					</Link>
				))}
			</div>
		</main>
	);
}
