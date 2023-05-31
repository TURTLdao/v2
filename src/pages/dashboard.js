import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewBudget } from 'src/sections/overview/overview-budget';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { OverviewLatestProducts } from 'src/sections/overview/overview-latest-products';
import { OverviewSales } from 'src/sections/overview/overview-sales';
import { OverviewTasksProgress } from 'src/sections/overview/overview-tasks-progress';
import { OverviewTotalCustomers } from 'src/sections/overview/overview-total-customers';
import { OverviewTotalProfit } from 'src/sections/overview/overview-total-profit';
import { OverviewTraffic } from 'src/sections/overview/overview-traffic';

import { useState, useEffect } from 'react';
import { TurtleDaoWatchlist } from 'src/sections/dashboard/dao-watchlist';
import TurtleInformation from 'src/tokens/turtle';
import FroggieInformation from 'src/tokens/froggie';
import KondaInformation from 'src/tokens/konda';
import CatskyInformation from 'src/tokens/catsky';

export async function getStaticProps() {
  const pairIds = {
    // DAO
    froggie: '79906b9c8d2fbddeba9658387a2a1187f3edd8f546e5dc49225710a146524f47474945_lovelace', // $FROGGIE
    konda:   '501dd5d2fbab6af0a26b1421076ff3afc4d5a34d6b3f9694571116ea4b4f4e4441_lovelace',     // $KONDA
    catsky:  '9b426921a21f54600711da0be1a12b026703a9bd8eb9848d08c9d921434154534b59_lovelace',   // $CATSKY

    // Popular
    agix: 'f43a62fdc3965df486de8a0d32fe800963589c41b38946602a0dc53541474958_lovelace', // $AGIX
    snek: '279c909f348e533da5808898f87f9a14bb2c3dfbbacccd631d927a3f534e454b_lovelace', // $SNEK
    wmt:  '1d7f33bd23d85e1a25d87d86fac4f199c3197a2f7afeb662a0f34e1e776f726c646d6f62696c65746f6b656e_lovelace', // $WMT
    meld: 'a2944573e99d2ed3055b808eaa264f0bf119e01fc6b18863067c63e44d454c44_lovelace', // $MELD
    min:  '29d222ce763455e3d7a09a665ce554f00ac89d2e99a1a83d267170c64d494e_lovelace',   // $MIN
    aada: 'e4214b7cce62ac6fbba385d164df48e157eae5863521b4b67ca71d868fde43a3f0b9f0e6f63bec7335e0b855c6b62a4dc51f1b762ccb6dfbbafcfe47', // $AADA
    ntx:  'edfd7a1d77bcb8b884c474bdc92a16002d1fb720e454fa6e993444794e5458_lovelace',   // $NTX
  };

  try {
    const response = await fetch('https://api-mainnet-prod.minswap.org/coinmarketcap/v2/pairs');
    const data = await response.json();

    const defaultPrices = {
      [pairIds.froggie]: 0,
      [pairIds.konda]: 0,
      [pairIds.catsky]: 0,
      [pairIds.agix]: 0,
      [pairIds.snek]: 0,
      [pairIds.wmt]: 0,
      [pairIds.meld]: 0,
      [pairIds.min]: 0,
      [pairIds.aada]: 0,
      [pairIds.ntx]: 0,
    };

    const prices = pairIds.reduce((acc, pairId) => {
      const pair = data[pairId];
      const price = pair && pair.last_price ? pair.last_price : defaultPrices[pairId];
      acc[pairId] = price;
      return acc;
    }, {});

    const f_prices = {
      f_turtle_price: Number(0).toFixed(10),
      f_froggie_price: Number(prices[pairIds.froggie]).toFixed(10),
      f_konda_price: Number(prices[pairIds.konda]).toFixed(10),
      f_catsky_price: Number(prices[pairIds.catsky]).toFixed(10),
      f_agix_price: Number(prices[pairIds.agix]).toFixed(10),
      f_snek_price: Number(prices[pairIds.snek]).toFixed(10),
      f_wmt_price: Number(prices[pairIds.wmt]).toFixed(10),
      f_meld_price: Number(prices[pairIds.meld]).toFixed(10),
      f_min_price: Number(prices[pairIds.min]).toFixed(10),
      f_aada_price: Number(prices[pairIds.aada]).toFixed(10),
      f_ntx_price: Number(prices[pairIds.ntx]).toFixed(10),
    };

    return {
      props: {
        ...f_prices,
      },
    };

  } catch (error) {
    console.error('Error:', error);

    const defaultPrices = {
      f_turtle_price: 0,
      f_froggie_price: 0,
      f_konda_price: 0,
      f_catsky_price: 0,
      f_agix_price: 0,
      f_snek_price: 0,
      f_wmt_price: 0,
      f_meld_price: 0,
      f_min_price: 0,
      f_aada_price: 0,
      f_ntx_price: 0,
    };

    return {
      props: {
        ...defaultPrices,
      },
    };
  }
}

export default function Page({ ...f_prices }) {
 
  const calculate_tokens_to_ada = (tokenPrice) => {
    if (tokenPrice <= 0) {
      return 0; // Invalid tokenPrice
    }
  
    return Math.ceil(1 / tokenPrice);
  };

  const rawSupplies = {
    turtle: 300000000,
    froggie: 69000000000,
    konda: 84322711100,
    catsky: 1000000000000,
  };

  const calculateMarketValues = (price, rawSupply) => {
    return {
      price,
      marketcap: price * rawSupply,
      to_ada: calculate_tokens_to_ada(price),
    };
  };

  const turtle_market = calculateMarketValues(f_prices.f_turtle_price, rawSupplies.turtle);
  const froggie_market = calculateMarketValues(f_prices.f_froggie_price, rawSupplies.froggie);
  const konda_market = calculateMarketValues(f_prices.f_konda_price, rawSupplies.konda);
  const catsky_market = calculateMarketValues(f_prices.f_catsky_price, rawSupplies.catsky);

  const agix_market = {
    price: f_prices.f_agix_price,
    marketcap: f_prices.f_agix_price * rawSupplies.catsky,
    to_ada: calculate_tokens_to_ada(f_prices.f_agix_price)
  }
  const snek_market = {
    price: f_prices.f_snek_price,
    marketcap: f_prices.f_snek_price * rawSupplies.catsky,
    to_ada: calculate_tokens_to_ada(f_prices.f_snek_price)
  }
  const wmt_market = {
    price: f_prices.f_wmt_price,
    marketcap: f_prices.f_wmt_price * rawSupplies.catsky,
    to_ada: calculate_tokens_to_ada(f_prices.f_wmt_price)
  }
  const meld_market = {
    price: f_prices.f_meld_price,
    marketcap: f_prices.f_meld_price * rawSupplies.catsky,
    to_ada: calculate_tokens_to_ada(f_prices.f_meld_price)
  }
  const min_market = {
    price: f_prices.f_min_price,
    marketcap: f_prices.f_min_price * rawSupplies.catsky,
    to_ada: calculate_tokens_to_ada(f_prices.f_min_price)
  }
  const aada_market = {
    price: f_prices.f_aada_price,
    marketcap: f_prices.f_aada_price * rawSupplies.catsky,
    to_ada: calculate_tokens_to_ada(f_prices.f_aada_price)
  }
  const ntx_market = {
    price: f_prices.f_ntx_price,
    marketcap: f_prices.f_ntx_price * rawSupplies.catsky,
    to_ada: calculate_tokens_to_ada(f_prices.f_ntx_price)
  }
  
  const complete_markets = {
    turtle_market,
    froggie_market,
    konda_market,
    catsky_market,
    agix_market,
    snek_market,
    wmt_market,
    meld_market,
    min_market,
    aada_market,
    ntx_market
  }

  return (
  <>
    <Head>
      <title>
        Dashboard | TurtleDAO
      </title>
    </Head>

    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
        background: '#1d1d1d',
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={12}
            lg={12}
          >
            <TurtleDaoWatchlist
              sx={{ height: '100%' }}
              market_data={complete_markets}
            />
          </Grid>
          
          
          
        </Grid>
      </Container>
    </Box>
  </>
  );
};


Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

