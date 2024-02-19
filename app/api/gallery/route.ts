import { google } from "googleapis";

// authenticates the service account to be used in this context
const auth = new google.auth.GoogleAuth({
	keyFile: process.cwd() + "/credentials.json",
	scopes: ["https://www.googleapis.com/auth/drive"],
});

export const getData = async (folderId: string) => {
	// allows you to use drive API methods e.g. listing files, creating files.
	const drive = google.drive({ version: "v3", auth });
	try {
		const res = await drive.files.list({
			pageSize: 24,
			q: `'${folderId}' in parents`,
		});
		const files = res.data;

		return files;
	} catch (error: any) {
		console.error("Error fetching files:", error.message);
		return null;
	}
};

export async function GET() {
	let data = await getData("1z2qWl7QESXf7_Ud9K_8CDmReOzPlI9I_");
	return new Response(JSON.stringify(data));
}
