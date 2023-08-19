import tw, { styled } from "twin.macro";
import { motion } from "framer-motion";

export const StockContainer = styled(motion.div)`
  position: relative;
  top: 6em;
  width: 90%;
  max-width: 900px;
`;

export const StockContent = styled.section`

`;

export const InfoSection = styled(motion.section)`
  ${tw`
		  relative
      flex flex-col 
      mr-8
      mb-8
      text-white
    `}
`;

export const StockPerformance = styled.section`
  display: flex;
`;

export const AboutSection = styled(InfoSection)`
  position: relative;
  border-top: 1px solid gray;
  padding-top: 1em;
`;

export const ButtonSection = styled(InfoSection)`
  position: relative;
`;
