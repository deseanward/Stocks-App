import tw, { styled } from 'twin.macro';

export const StockListContainer = styled.div``;

export const StockListContent = styled.section`
	display: grid;
	grid-template-columns: 5fr 1fr 2fr;
`;

export const StockListItem = styled.li`
	display: grid;
	grid-template-columns: 5fr 1fr 2fr;
	border-top: 1px solid gray;
	padding: 1em;

	${tw`hover:bg-blue-200 hover:text-slate-800`}
`;
