import tw, { styled } from 'twin.macro';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
	${tw`
    flex flex-col items-center
    `}
`;

export const NavContent = styled.section`
	${tw`
        flex gap-8 justify-end 
        w-[60vw]
        pt-4
    `}
`;

export const StyledLink = styled(Link)`
	${tw`hover:bg-blue-200 hover:text-slate-800 p-2 rounded-md`}
`;
