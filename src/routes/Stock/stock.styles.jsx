import tw, { styled } from 'twin.macro';
import { motion } from 'framer-motion';

export const StockContainer = styled(motion.div)`
	position: relative;
	width: 90%;
	max-width: 900px;
`;

export const StockContent = styled.section``;

export const InfoSection = styled(motion.section)`
	${tw`
		relative
        flex flex-col mb-8
    `}
`;

export const StockPerformance = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
`;

export const AboutSection = styled(InfoSection)`
	position: relative;
	border-top: 1px solid gray;
	padding-top: 1em;
`;

export const ButtonSection = styled(InfoSection)`
	position: relative;
`;
