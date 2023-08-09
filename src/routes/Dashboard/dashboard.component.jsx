import React from 'react';
import { DashboardContainer } from './dashboard.styles';


import StockList from '../../components/stock-list/stock-list.component';

const Dashboard = () => {
	return (
		<DashboardContainer>
			<h1>Most Active Stocks</h1>
      <StockList />
		</DashboardContainer>
	);
};

export default Dashboard;
