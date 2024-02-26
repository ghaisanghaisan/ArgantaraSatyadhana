"use server";

import { getPhotosHead } from "./_src/GALLERYVIEW";

export async function fetchPhotos() {
	const data = await getPhotosHead();

	return data?.files;
}
