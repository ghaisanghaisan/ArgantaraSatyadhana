export default function GalleryView({
	params,
}: {
	params: {
		slug: string;
	};
}) {
	return <div>{params.slug}</div>;
}
