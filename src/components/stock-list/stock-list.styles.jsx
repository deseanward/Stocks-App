import tw, { styled } from 'twin.macro';
import { motion } from 'framer-motion';

export const StockListContainer = styled(motion.div)``;

export const StockListHeader = styled.section`
	display: grid;
	grid-template-columns: 8fr 1fr 2fr;
`;

export const Stocks = styled.section`
	:hover .stock {
		filter: blur(0.175rem);
	}

	.stock:hover {
		filter: blur(0);
		padding: 1em;
		transform: scale(1.02);
	}
`;

export const StockListItem = styled.li`
	transition: all 0.3s ease-in-out;
	display: grid;
	grid-template-columns: 8fr 1fr 2fr;
	border-top: 1px solid gray;
	padding: 1em 0;

	${tw`active:bg-black hover:bg-black hover:text-[tan] hover:font-bold hover:rounded`}
`;
