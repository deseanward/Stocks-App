import tw, { styled } from 'twin.macro';

export const StickerMarkeeContainer = styled.div`
	${tw`
    flex items-center
	w-[60vw]
    text-white
    p-2
	mt-4
  `}

	border: 1px solid gray;
	border-radius: 0.25em;
	overflow: hidden;

	span {
		position: relative;
		white-space: nowrap;
		display: inline-block;
		font-size: smaller;

		&.scrolling {
			animation: scrollText 30s linear infinite;
		}
	}

	@keyframes scrollText {
		from {
			transform: translateX(0%);
		}
		to {
			transform: translateX(-100%);
		}
	}
`;
