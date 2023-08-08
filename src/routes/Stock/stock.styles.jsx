import tw, { styled } from 'twin.macro';

export const StockContainer = styled.div`
	width: 90%;
	max-width: 900px;
`;

export const StockContent = styled.section``;

export const InfoSection = styled.section`
	${tw`
        flex flex-col mb-8
    `}
`;

export const StockPerformance = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

export const AboutSection = styled(InfoSection)``;
