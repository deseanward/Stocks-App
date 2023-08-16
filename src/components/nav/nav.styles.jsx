import tw, { styled } from 'twin.macro';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
	${tw`
    w-full
    flex flex-col items-center
    bg-black text-white
    mb-0
    `}
`;

export const NavTitle = styled.span`
	${tw`
        flex justify-start gap-2
        w-full
    `}

	span {
		font-size: smaller;
	}
`;

export const NavContent = styled.span`
	${tw`
        flex gap-8 justify-end 
        w-[60vw]
        pt-4
    `}
`;
