import React from 'react';
import { DashboardContainer } from './dashboard.styles';

import StockList from '../../components/stock-list/stock-list.component';

const Dashboard = () => {
	return (
		<DashboardContainer>
				<h2 className='bg-[tan] p-2'>Most Active Stocks</h2>
				<StockList />
		</DashboardContainer>
	);
};

export default Dashboard;
