import tw, { styled } from "twin.macro";

export const NavContainer = styled.nav`
  ${tw`
    fixed
    z-10
    w-screen
    flex flex-col items-center
    bg-[#0C0F12] text-white
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
        w-[80vw]
        pt-4
    `}
`;
