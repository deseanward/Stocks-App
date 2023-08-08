import React, { useState, useEffect } from 'react';
import { DashboardContainer } from './dashboard.styles';

import stocks from '../../data'
import StockList from '../../components/stock-list/stock-list.component';

const Dashboard = () => {

	useEffect(() => {
		console.log(stocks)
	}, []);

	return (
		<DashboardContainer>
			<h1>Most Active Stocks</h1>
      <StockList stocks={stocks} />
		</DashboardContainer>
	);
};

export default Dashboard;
