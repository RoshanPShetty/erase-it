"use client";
import { useState } from "react";
import Upload from "../components/Upload";
import Preview from "../components/Preview";
import ConvertButton from "../components/ConvertButton";
import DownloadButton from "../components/DownloadButton";
import { removeBackground } from "@imgly/background-removal";

export default function Home() {
	const [image, setImage] = useState<string | null>(null);
	const [convertedImage, setConvertedImage] = useState<string | null>(null);

	const handleDrop = (files: File[]) => {
		const file = files[0];
		const reader = new FileReader();

		reader.onloadend = () => {
			if (reader.result) {
				setImage(reader.result as string);
			}
		};

		reader.readAsDataURL(file);
	};

	const handleConvert = async () => {
		if (image) {
			try {
				// Convert base64 to Blob
				const response = await fetch(image);
				const blob = await response.blob();

				// Process image to remove background
				const result = await removeBackground(blob);

				// Convert result to base64
				const resultBlob = new Blob([result], { type: "image/png" });
				const resultUrl = URL.createObjectURL(resultBlob);

				setConvertedImage(resultUrl);
			} catch (error) {
				console.error("Error processing image:", error);
			}
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4">
			<h1 className="text-3xl font-bold">Transparent Background Converter</h1>
			<Upload onDrop={handleDrop} />
			<div className="flex gap-4">
				{image && <Preview src={image} />}
				{convertedImage && (
					<>
						<Preview src={convertedImage} />
					</>
				)}
			</div>
			<div className="flex gap-4">
				<ConvertButton onClick={handleConvert} />
				{convertedImage && <DownloadButton url={convertedImage} />}
			</div>
		</div>
	);
}
