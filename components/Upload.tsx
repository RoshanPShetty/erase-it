"use client";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";

const Upload = ({ onDrop }: {
	onDrop: (files: File[]) => void
}) =>
{
	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: { "image/*": ["jpeg", "png", "gif"] },
	});

	return (
		// @ts-ignore
		<motion.div
			{...getRootProps()}
			className="border-2 border-dashed border-gray-300 p-6 rounded-lg flex justify-center items-center"
			initial={{ opacity: 0.8 }}
			whileHover={{ opacity: 1 }}
		>
			<input {...getInputProps()} />
			<p className="text-gray-500">
				Drag & drop an image here, or click to select one
			</p>
		</motion.div>
	);
};

export default Upload;
