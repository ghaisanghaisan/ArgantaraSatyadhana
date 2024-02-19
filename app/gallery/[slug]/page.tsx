import { fetchPhotos } from "./actions";
import styles from "./gallery.module.css";
import InfiniteScrollGallery from "./infinite-scrolling-gallery";

export default async function GalleryView({
	params,
}: {
	params: {
		slug: string;
	};
}) {
	const initialData = await fetchPhotos(params.slug);

	return (
		<main className={styles.gallery}>
			<InfiniteScrollGallery
				params={params}
				initialPhotos={initialData.photos}
				initialPage={initialData.nextPageToken ? initialData.nextPageToken : ""}
			/>
		</main>
	);
}
