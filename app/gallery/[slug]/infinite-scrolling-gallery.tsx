"use client";

import styles from "./gallery.module.css";
import { drive_v3 } from "googleapis";
import Image from "next/image";
import { fetchPhotos } from "./actions";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

function GalleryPhoto({ photo }: { photo: drive_v3.Schema$File }) {
	return (
		<Link
			href={photo.webViewLink ? photo.webViewLink : ""}
			className="galleryPhoto">
			<Image
				src={photo.thumbnailLink ? photo.thumbnailLink : ""}
				alt="Foto Dokumentasi"
				width="300"
				height="300"
			/>
		</Link>
	);
}

export default function InfiniteScrollGallery({
	params,
	initialPhotos,
	initialPage,
}: {
	params: {
		slug: string;
	};
	initialPhotos: drive_v3.Schema$File[] | null | undefined;
	initialPage: string | undefined;
}) {
	const [ref, inView] = useInView();
	const [page, setPage] = useState<string | undefined>(initialPage);
	const [photoList, setPhotoList] = useState<
		drive_v3.Schema$File[] | null | undefined
	>(initialPhotos);

	const loadMorePages = async () => {
		console.log(page);
		const newData = await fetchPhotos(params.slug, page);

		setPhotoList((prev) => [
			...(prev ? prev : []),
			...(newData.photos ? newData.photos : []),
		]);
		setPage(newData.nextPageToken ? newData.nextPageToken : "");
	};

	useEffect(() => {
		loadMorePages();
	}, [inView, loadMorePages]);

	return (
		<main className={styles.gallery}>
			<div className={styles.galleryGridWrapper}>
				<div className={styles.galleryGrid}>
					{photoList?.map((photo, index) => {
						if (
							!photo.thumbnailLink ||
							photo.mimeType === "application/vnd.google-apps.folder"
						) {
							return;
						}
						return <GalleryPhoto photo={photo} key={index} />;
					})}
				</div>
				<h1 ref={ref} className="title">
					Loading...
				</h1>
			</div>
		</main>
	);
}
