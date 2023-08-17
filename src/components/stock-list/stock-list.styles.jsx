import tw, { styled } from 'twin.macro';
import { motion } from 'framer-motion';

export const StockListContainer = styled(motion.div)``;

export const StockListHeader = styled.section`
	display: grid;
	grid-template-columns: 8fr 1fr 2fr;
	padding: 0 0.5em;
`;

export const StocksList = styled.section`
	:hover .stock {
		filter: blur(0.175rem);
	}

	.stock:hover {
		filter: blur(0);
	}
`;

export const StockListItem = styled.li`
	transition: all 0.3s ease-in-out;
	display: grid;
	grid-template-columns: 8fr 1fr 2fr;
	border-top: 1px solid gray;
	padding: 1em 0.5em;

	${tw`active:bg-black hover:bg-black hover:text-[tan] hover:rounded`}
`;
