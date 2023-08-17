import tw, { styled } from 'twin.macro';

export const StockNewsContainer = styled.div`
	${tw`
    h-[500px]
    w-full
    `}

	.heading {
		margin-bottom: 2em;
		padding: 0 1em;
	}
	.content {
		padding: 0 1em;
	}

	border: 1px solid gray;
	border-radius: 0.25em;
	margin-right: 2em;
	overflow-y: auto;
`;

export const NewsItemContainer = styled.section`
	height: 100%;
	width: 100%;
	background-color: tan;
	border-bottom: 1px solid gray;
	color: black;
`;
