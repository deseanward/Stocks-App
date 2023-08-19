import React from 'react';
import { DashboardContainer } from './dashboard.styles';

import StockList from '../../components/stock-list/stock-list.component';

const Dashboard = () => {
	return (
		<DashboardContainer>
				<h3 className='header bg-[#3DBB9A] rounded-lg p-2'>Most Active Stocks</h3>
				<StockList />
		</DashboardContainer>
	);
};

export default Dashboard;
