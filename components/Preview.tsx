import Image from "next/image";

const Preview = ({ src }: { src: string }) => {
	return (
		<div className="mt-4">
			<h2 className="text-lg font-semibold">Preview:</h2>
			<Image src={src} alt="Preview" width={500} height={500} />
		</div>
	);
};

export default Preview;
