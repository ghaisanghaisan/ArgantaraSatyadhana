import styles from "./Carousel.module.css";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { ReactNode, useState, Children } from "react";
import OutButton from "../OutButton";

export default function Carousel(props: {
	children: ReactNode;
	contentInfo: {
		nama: string;
		desc: string;
		folderId: string;
	}[];
}) {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<div className={styles.carousel}>
			<button
				id={styles.prev}
				onClick={() => {
					setActiveIndex(
						(activeIndex - 1 + props.contentInfo.length) %
							props.contentInfo.length
					);
				}}>
				<MdNavigateBefore />
			</button>
			<button
				id={styles.next}
				onClick={() => {
					setActiveIndex(
						(activeIndex + 1 + props.contentInfo.length) %
							props.contentInfo.length
					);
				}}>
				<MdNavigateNext />
			</button>

			<div className={styles.carouselContent}>
				<div className={styles.carouselInfo}>
					<div
						style={{
							display: "inline-flex",
							justifyContent: "space-between",
							alignItems: "end",
							gap: "2em",
							width: "100%",
						}}>
						<div>
							<h1 className="title">{props.contentInfo[activeIndex].nama}</h1>

							<p className="regular" id="dissapearAtMobile">
								{props.contentInfo[activeIndex].desc}
							</p>
						</div>
						<OutButton
							to={`gallery/${props.contentInfo[activeIndex].folderId}`}>
							Gallery
						</OutButton>
					</div>
				</div>
				<div
					className={styles.childWrapper}
					style={{
						transform: `translateX(-${activeIndex * 100}%)`,
					}}>
					{props.children}
				</div>
			</div>
		</div>
	);
}
