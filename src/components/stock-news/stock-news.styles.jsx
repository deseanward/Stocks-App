import tw, { styled } from "twin.macro";

export const StockNewsContainer = styled.div`
  ${tw`
    h-[500px]
    w-full
    text-white
    pt-4
    `}

  .heading {
    margin-bottom: 2em;
    padding: 0 1em;
  }
  .content {
    padding: 0 1em;
  }

  border: 1px solid gray;
  border-radius: 1em;
  margin-right: 2em;
  overflow-y: auto;
`;

export const NewsItemContainer = styled.section`
  width: fit-content;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid gray;
  padding: 0.5em;
  border-radius: 1em;
  transition: all 0.3s;

  :hover {
    background-color: #383d46;
  }
`;
