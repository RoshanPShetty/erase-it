import { motion } from "framer-motion";

const ConvertButton = ({ onClick }: { onClick: () => void }) => {
	return (
		<motion.button
			onClick={onClick}
			className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
		>
			Convert
		</motion.button>
	);
};

export default ConvertButton;
