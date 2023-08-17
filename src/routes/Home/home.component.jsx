import React from 'react'

import StockNews from '../../components/stock-news/stock-news.component';
import Dashboard from '../Dashboard/dashboard.component';

import { HomeContainer } from './home.styles'

const Home = () => {
  return (
    <HomeContainer><StockNews /><Dashboard /></HomeContainer>
  )
}

export default Home