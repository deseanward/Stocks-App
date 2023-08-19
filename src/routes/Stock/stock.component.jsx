import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import {
  BackButton,
  NavButton,
} from "../../components/styled-link/styled-link.component";
import { StockContext } from "../../store/context/stock.context";
import {
  StockContainer,
  StockContent,
  InfoSection,
  StockPerformance,
  AboutSection,
  ButtonSection,
} from "./stock.styles";

const Stock = () => {
  const { allStocks, stockProfiles, posOrNeg } = useContext(StockContext);

  const { symbol } = useParams();

  const findStock = allStocks.filter((stock) => stock[0].symbol === symbol);
  const theStock = findStock[0][0];

  console.log("THE STOCK: ", theStock);

  const findProfile = stockProfiles.filter(
    (profile) => profile[0].symbol === symbol
  );
  const theProfile = findProfile[0][0];
  console.log("THE PROFILE: ", theProfile);

  const variants = {
    hidden: { opacity: 0.1 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const inFromLeft = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const inFromRight = {
    hidden: { opacity: 0, x: "50%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const slideIn = {
    hidden: { opacity: 0, y: "100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 1 },
    },
  };

  return (
    <StockContainer
      variants={variants}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <h1>
        {theStock.name} ({theStock.symbol})
      </h1>
      <StockContent>
        <StockPerformance>
          <InfoSection
            className='mr-4'
            variants={fadeIn}
            initial='hidden'
            animate='visible'
          >
            <p className='bg-black w-fit p-4 rounded-xl shadow shadow-gray-700'>
              <img src={theProfile.image} alt='profile-pic' className="w-[150px]" />
            </p>
          </InfoSection>

          <InfoSection className='mr-8' variants={inFromLeft} initial='hidden' animate='visible'>
            <span>Open: {theStock.open.toFixed(2)}</span>
            <span>Last Price: {theStock.previousClose.toFixed(2)}</span>
            <span>
              Change:{" "}
              <span className={posOrNeg(theStock.change.toFixed(2))}>
                {theStock.change.toFixed(2)} (
                {theStock.changesPercentage.toFixed(2)}
                %)
              </span>
            </span>
          </InfoSection>

          <InfoSection
            className='left-16'
            variants={inFromRight}
            initial='hidden'
            animate='visible'
          >
            <span>High: {theStock.dayHigh.toFixed(2)}</span>
            <span>Low: {theStock.dayLow.toFixed(2)}</span>
          </InfoSection>
        </StockPerformance>

        <hr />
        <AboutSection
          variants={slideIn}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <h3 className='text-left mb-[0.5em] text-[#7C7E80]'>About {theStock.name}</h3>
          <Link className="hover:text-[tan] mb-8" to={theProfile.website} target='_blank'>
            {theProfile.website}
          </Link>
          {theProfile.description}
        </AboutSection>

        <ButtonSection variants={fadeIn} initial='hidden' animate='visible'>
          <BackButton to='back'>Back</BackButton>
        </ButtonSection>
      </StockContent>
    </StockContainer>
  );
};

export default Stock;
