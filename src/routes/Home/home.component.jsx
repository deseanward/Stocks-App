import React from 'react'

import StockNews from '../../components/stock-news/stock-news.component';
import Dashboard from '../Dashboard/dashboard.component';
import StickerMarkee from '../../components/sticker-markee/sticker-markee.component';

import { HomeContainer } from './home.styles'

const Home = () => {
  return (
    <div className='mt-20 flex flex-col items-center'>
    <StickerMarkee />
    <HomeContainer><StockNews /><Dashboard /></HomeContainer>
    </div>
  )
}

export default Home