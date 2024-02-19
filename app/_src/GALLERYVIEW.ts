import { google } from "googleapis";

// authenticates the service account to be used in this context
const auth = new google.auth.GoogleAuth({
	keyFile: process.cwd() + "/credentials.json",
	scopes: ["https://www.googleapis.com/auth/drive"],
});

export const getPhotos = async (
	folderId: string,
	pageToken?: string | undefined
) => {
	// allows you to use drive API methods e.g. listing files, creating files.
	const drive = google.drive({ version: "v3", auth });
	try {
		const res = await drive.files.list({
			fields: "files(thumbnailLink, mimeType, id, webViewLink), nextPageToken",
			pageSize: 50,
			q: `'${folderId}' in parents`,
			pageToken: pageToken,
		});
		const files = {
			files: res.data.files,
			nextPageToken: res.data.nextPageToken,
		};

		return files;
	} catch (error: any) {
		console.error("Error fetching files:", error.message);
		return null;
	}
};
