"use server";

import { getPhotos } from "../../_src/GALLERYVIEW";

export async function fetchPhotos(
	folderId: string,
	pageToken?: string | undefined | null
) {
	const data = await getPhotos(folderId, pageToken);

	return { photos: data?.files, nextPageToken: data?.nextPageToken };
}
