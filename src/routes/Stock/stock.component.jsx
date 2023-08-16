import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
	BackButton,
	NavButton,
} from '../../components/styled-link/styled-link.component';
import { StockContext } from '../../store/context/stock.context';
import {
	StockContainer,
	StockContent,
	InfoSection,
	StockPerformance,
	AboutSection,
	ButtonSection,
} from './stock.styles';

const Stock = () => {
	const {
		stockData,
		profileData,
		formatPriceChange,
		formatPercentage,
		posOrNeg,
	} = useContext(StockContext);
	const { symbol } = useParams();

	const theStock = stockData.filter(stock => stock.symbol === symbol);

	const theProfile = profileData.filter(profile => profile.symbol === symbol);

	console.log(theStock);
	console.log(theProfile);

	const variants = {
		hidden: { opacity: 0.1 },
		visible: { opacity: 1, transition: { duration: 0.5 } },
	};

	const inFromLeft = {
		hidden: { opacity: 0, x: '-100%' },
		visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
	};

	const inFromRight = {
		hidden: { opacity: 0, x: '50%' },
		visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
	};

	const slideIn = {
		hidden: { opacity: 0, y: '100%' },
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

	const navigate = useNavigate();

	return (
		<StockContainer
			variants={variants}
			initial='hidden'
			animate='visible'
			exit='hidden'>
			<h1>
				{theStock[0].name} ({theStock[0].symbol})
			</h1>
			<StockContent>
				<StockPerformance>
					<InfoSection
						className='mr-4'
						variants={fadeIn}
						initial='hidden'
						animate='visible'>
						<p className='bg-black w-fit p-4 rounded-xl'>
							<img src={theProfile[0].image} />
						</p>
					</InfoSection>

					<InfoSection
						variants={inFromLeft}
						initial='hidden'
						animate='visible'>
						<span>Open: {theStock[0].open.toFixed(2)}</span>
						<span>
							Last Price: {theStock[0].previousClose.toFixed(2)}
						</span>
						<span>
							Change:{' '}
							<span
								className={posOrNeg(
									theStock[0].change.toFixed(2)
								)}>
								{theStock[0].change.toFixed(2)} (
								{theStock[0].changesPercentage.toFixed(2)}
								%)
							</span>
						</span>
					</InfoSection>

					<InfoSection
						variants={inFromRight}
						initial='hidden'
						animate='visible'>
						<span>High: {theStock[0].dayHigh.toFixed(2)}</span>
						<span>Low: {theStock[0].dayLow.toFixed(2)}</span>
					</InfoSection>
				</StockPerformance>

				<hr />
				<AboutSection
					variants={slideIn}
					initial='hidden'
					animate='visible'
					exit='hidden'>
					<h3 className='mb-0'>About {theStock[0].name}</h3>
					<NavButton to={theProfile[0].website} target='_blank'>
						{theProfile[0].website}
					</NavButton>
					{theProfile[0].description}
				</AboutSection>

				<ButtonSection
					variants={fadeIn}
					initial='hidden'
					animate='visible'>
					<BackButton to='back'>Back</BackButton>
				</ButtonSection>
			</StockContent>
		</StockContainer>
	);
};

export default Stock;
