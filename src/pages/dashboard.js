import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

import { useContext, useState, useEffect } from 'react';
import { TurtleDaoWatchlist } from 'src/sections/dashboard/dao-watchlist';

import { MainBanner } from 'src/sections/dashboard/banners/main';
import { token_ids } from 'src/utils/token-info';

export async function getStaticProps() {
  
  try {
    const fetchPromises = token_ids.map(async (pairId) => {
      const response = await fetch(`https://api-mainnet-prod.minswap.org/coinmarketcap/v2/pairs/${pairId}`);
      const data = await response.json();
      return { pairId, data };
    });

    const results = await Promise.all(fetchPromises);
    const prices = {};
    const volumes = {};
    results.forEach(({ pairId, data }) => {
      const pair = data[pairId];
      const price = pair && pair.last_price ? pair.last_price : 0;
      const volume = pair && pair.quote_volume ? pair.quote_volume : 0;
      prices[pairId] = price;
      volumes[pairId] = volume;
    });

    return {
      props: {
        prices,
        volumes,
      },
    };

  } catch (error) {
    console.error('Error:', error);
    const prices = [];
    const volumes = [];
    
    return {
      props: {
        prices,
        volumes
      },
    };
  }
}

export default function Page({ prices, volumes }) {
  const calculate_tokens_to_ada = (tokenPrice) => {
    if (tokenPrice <= 0) {
      return 0; // Invalid tokenPrice
    }

    const out = 1 / tokenPrice;
    if (out < 1000) {
      return out.toFixed(4);
    } else {
      return (1 / tokenPrice);
    }
  };

  const calculateMarketValues = (price, rawSupply, volume) => {
    return {
      price: parseFloat(price),
      marketcap: price * rawSupply,
      to_ada: calculate_tokens_to_ada(price),
      volume: volume,
    };
  };

  const turtle_market = calculateMarketValues(prices['TURTL'], 300000000, volumes['TURTL']);
  const froggie_market = calculateMarketValues(prices['FROGGIE'], 69000000000, volumes['TURTL']);
  const konda_market = calculateMarketValues(f_prices.f_konda_price, 84322711100, volumes['KONDA']);
  const catsky_market = calculateMarketValues(f_prices.f_catsky_price, 1000000000000, volumes['CATSKY']);
  const agix_market = calculateMarketValues(f_prices.f_agix_price, 167706494, volumes['AIGX']);
  const snek_market = calculateMarketValues(f_prices.f_snek_price, 76715880000, volumes['SNEK']);
  const wmt_market = calculateMarketValues(f_prices.f_wmt_price, 2000000000, volumes['WMT']);
  const meld_market = calculateMarketValues(f_prices.f_meld_price, 4000000000, volumes['MELD']);
  const min_market = calculateMarketValues(f_prices.f_min_price, 5000000000, volumes['MIN']);
  const aada_market = calculateMarketValues(f_prices.f_aada_price, 29500000, volumes['AADA']);
  const ntx_market = calculateMarketValues(f_prices.f_ntx_price, 408477453, volumes['NTX']);
  const iusd_market = calculateMarketValues(f_prices.f_iusd_price, 9481491, volumes['iUSD']);
  const copi_market = calculateMarketValues(f_prices.f_copi_price, 302878780, volumes['COPI']);
  const indy_market = calculateMarketValues(f_prices.f_indy_price, 35000000, volumes['INDY']);
  const newm_market = calculateMarketValues(f_prices.f_newm_price, 9735033900, volumes['NEWM']);
  const society_market = calculateMarketValues(f_prices.f_society_price, 700000000, volumes['SOCIETY']);
  const shen_market = calculateMarketValues(f_prices.f_shen_price, 1000000000000, volumes['SHEN']);
  const milk_market = calculateMarketValues(f_prices.f_milk_price, 10000000, volumes['MILK']);
  const sundae_market = calculateMarketValues(f_prices.f_sundae_price, 2000000000, volumes['SUNDAE']);
  const hosky_market = calculateMarketValues(f_prices.f_hosky_price, 1000000000000001, volumes['HOSKY']);
  const lq_market = calculateMarketValues(f_prices.f_lq_price, 21000000, volumes['LQ']);
  const cneta_market = calculateMarketValues(f_prices.f_cneta_price, 1000000000, volumes['cNETA']);
  const bank_market = calculateMarketValues(f_prices.f_bank_price, 2500000000000, volumes['BANK']);
  const gens_market = calculateMarketValues(f_prices.f_gens_price, 100000000, volumes['GENS']);
  const vyfi_market = calculateMarketValues(f_prices.f_vyfi_price, 450000000, volumes['VYFI']);

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
    ntx_market,
    iusd_market,
    copi_market,
    indy_market,
    newm_market,
    society_market,
    shen_market,
    milk_market,
    sundae_market,
    hosky_market,
    lq_market,
    cneta_market,
    bank_market,
    gens_market,
    vyfi_market
  }

  // Token Events
  const future_events = {
    event_1: '',
    event_1_link: '',
    event_2: ''
  };
  const current_events = {
    event_1: '',
    event_1_link: '',
    event_2: ''
  };
  const past_events = {
    event_1: '',
    event_1_link: '',
    event_2: ''
  };

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
        <div align='center' style={{ width: '100%' }}>
          <Grid
            xs={12}
            sm={12}
            lg={8}
          >
            <div align='center'>
            <MainBanner
              sx={{ width: '75%' }}
            /></div>
          </Grid></div>
          
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

