import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

import { useContext, useState, useEffect } from 'react';
import { TurtleDaoWatchlist } from 'src/sections/dashboard/dao-watchlist';

import { MainBanner } from 'src/sections/dashboard/banners/main';

export async function getStaticProps() {
  const pairIds = [
    // DAO
    '79906b9c8d2fbddeba9658387a2a1187f3edd8f546e5dc49225710a146524f47474945_lovelace', // $FROGGIE
    '501dd5d2fbab6af0a26b1421076ff3afc4d5a34d6b3f9694571116ea4b4f4e4441_lovelace',     // $KONDA
    '9b426921a21f54600711da0be1a12b026703a9bd8eb9848d08c9d921434154534b59_lovelace',   // $CATSKY

    // Popular
    'f43a62fdc3965df486de8a0d32fe800963589c41b38946602a0dc53541474958_lovelace', // $AGIX
    '279c909f348e533da5808898f87f9a14bb2c3dfbbacccd631d927a3f534e454b_lovelace', // $SNEK
    '1d7f33bd23d85e1a25d87d86fac4f199c3197a2f7afeb662a0f34e1e776f726c646d6f62696c65746f6b656e_lovelace', // $WMT
    'a2944573e99d2ed3055b808eaa264f0bf119e01fc6b18863067c63e44d454c44_lovelace', // $MELD
    '29d222ce763455e3d7a09a665ce554f00ac89d2e99a1a83d267170c64d494e_lovelace',   // $MIN
    '8fef2d34078659493ce161a6c7fba4b56afefa8535296a5743f6958741414441_lovelace', // $AADA
    'edfd7a1d77bcb8b884c474bdc92a16002d1fb720e454fa6e993444794e5458_lovelace',   // $NTX
    'f66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b6988069555344_lovelace', // $iUSD
    'b6a7467ea1deb012808ef4e87b5ff371e85f7142d7b356a40d9b42a0436f726e75636f70696173205b76696120436861696e506f72742e696f5d_lovelace', // $COPI
    '533bb94a8850ee3ccbe483106489399112b74c905342cb1792a797a0494e4459_lovelace', // $INDY
    '682fe60c9918842b3323c43b5144bc3d52a23bd2fb81345560d73f634e45574d_lovelace', // $NEWM
    '25f0fc240e91bd95dcdaebd2ba7713fc5168ac77234a3d79449fc20c534f4349455459_lovelace', // $SOCIETY
    '8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd615368656e4d6963726f555344_lovelace', // $SHEN
    '8a1cfae21368b8bebbbed9800fec304e95cce39a2a57dc35e2e3ebaa4d494c4b_lovelace', // $MILK
    '9a9693a9a37912a5097918f97918d15240c92ab729a0b7c4aa144d7753554e444145_lovelace', // $SUNDAE
    'a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235484f534b59_lovelace', // $HOSKY
    'da8c30857834c6ae7203935b89278c532b3995245295456f993e1d244c51_lovelace', // $LQ
    'b34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a634e455441_lovelace', // $cNETA
    '2b28c81dbba6d67e4b5a997c6be1212cba9d60d33f82444ab8b1f21842414e4b_lovelace', // $BANK
    'dda5fdb1002f7389b33e036b6afee82a8189becb6cba852e8b79b4fb0014df1047454e53_lovelace', // $GENS
    '804f5544c1962a40546827cab750a88404dc7108c0f588b72964754f56594649_lovelace', // $VYFI
  ];

  try {
    let data = null;
    while (data === null) {
      const response = await fetch('https://api-mainnet-prod.minswap.org/coinmarketcap/v2/pairs');
      data = await response.json();
      if (data === null) {
        await sleep(200);
      }
    }

    console.log('Response:', data);

    const prices = pairIds.reduce((acc, pairId) => {
      const pair = data[pairId];
      const price = pair && pair.last_price ? pair.last_price : 0;
      acc[pairId] = price;
      return acc;
    }, {});

    const f_prices = {
      f_turtle_price: Number(0).toFixed(10),
      f_froggie_price: Number(prices[pairIds[0]]).toFixed(10),
      f_konda_price: Number(prices[pairIds[1]]).toFixed(10),
      f_catsky_price: Number(prices[pairIds[2]]).toFixed(10),
      f_agix_price: Number(prices[pairIds[3]]).toFixed(10),
      f_snek_price: Number(prices[pairIds[4]]).toFixed(10),
      f_wmt_price: Number(prices[pairIds[5]]).toFixed(10),
      f_meld_price: Number(prices[pairIds[6]]).toFixed(10),
      f_min_price: Number(prices[pairIds[7]]).toFixed(10),
      f_aada_price: Number(prices[pairIds[8]]).toFixed(10),
      f_ntx_price: Number(prices[pairIds[9]]).toFixed(10),
      f_iusd_price: Number(prices[pairIds[10]]).toFixed(10),
      f_copi_price: Number(prices[pairIds[11]]).toFixed(10),
      f_indy_price: Number(prices[pairIds[12]]).toFixed(10),
      f_newm_price: Number(prices[pairIds[13]]).toFixed(10),
      f_society_price: Number(prices[pairIds[14]]).toFixed(10),
      f_shen_price: Number(prices[pairIds[15]]).toFixed(10),
      f_milk_price: Number(prices[pairIds[16]]).toFixed(10),
      f_sundae_price: Number(prices[pairIds[17]]).toFixed(10),
      f_hosky_price: Number(prices[pairIds[18]]).toFixed(10),
      f_lq_price: Number(prices[pairIds[19]]).toFixed(10),
      f_cneta_price: Number(prices[pairIds[20]]).toFixed(10),
      f_bank_price: Number(prices[pairIds[21]]).toFixed(10),
      f_gens_price: Number(prices[pairIds[22]]).toFixed(10),
      f_vyfi_price: Number(prices[pairIds[23]]).toFixed(10),
    };

    const volumes = pairIds.reduce((acc, pairId) => {
      const pair = data[pairId];
      const volume = pair && pair.quote_volume ? pair.quote_volume : 0;
      acc[pairId] = volume;
      return acc;
    }, {});

    const f_volumes = {
      f_turtle_volume: Number(0),
      f_froggie_volume: Number(volumes[pairIds[0]]).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      f_konda_volume: Number(volumes[pairIds[1]]).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      f_catsky_volume: Number(volumes[pairIds[2]]).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      f_agix_volume: Number(volumes[pairIds[3]]).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      f_snek_volume: Number(volumes[pairIds[4]]).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      f_wmt_volume: Number(volumes[pairIds[5]]).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      f_meld_volume: Number(volumes[pairIds[6]]).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      f_min_volume: Number(volumes[pairIds[7]]).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      f_aada_volume: Number(volumes[pairIds[8]]).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      f_ntx_volume: Number(volumes[pairIds[9]]).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      f_iusd_volume: Number(volumes[pairIds[10]]).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      f_copi_volume: Number(volumes[pairIds[11]]).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      f_indy_volume: Number(volumes[pairIds[12]]).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      f_newm_volume: Number(volumes[pairIds[13]]).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      f_society_volume: Number(volumes[pairIds[14]]).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      f_shen_volume: Number(volumes[pairIds[15]]).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      f_milk_volume: Number(volumes[pairIds[16]]).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      f_sundae_volume: Number(volumes[pairIds[17]]).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      f_hosky_volume: Number(volumes[pairIds[18]]).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      f_lq_volume: Number(volumes[pairIds[19]]).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      f_cneta_volume: Number(volumes[pairIds[20]]).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      f_bank_volume: Number(volumes[pairIds[21]]).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      f_gens_volume: Number(volumes[pairIds[22]]).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      f_vyfi_volume: Number(volumes[pairIds[23]]).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
    };

    return {
      props: {
        f_prices,
        f_volumes,
      },
    };

  } catch (error) {
    console.error('Error:', error);

    const f_prices = {
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
      f_iusd_price: 0,
      f_copi_price: 0,
      f_indy_price: 0,
      f_newm_price: 0,
      f_society_price: 0,
      f_shen_price: 0,
      f_milk_price: 0,
      f_sundae_price: 0,
      f_hosky_price: 0,
      f_lq_price: 0,
      f_cneta_price: 0,
      f_bank_price: 0,
      f_gens_price: 0,
      f_vyfi_price: 0,
    };

    const f_volumes = {
      f_turtle_volume: 0,
      f_froggie_volume: 0,
      f_konda_volume: 0,
      f_catsky_volume: 0,
      f_agix_volume: 0,
      f_snek_volume: 0,
      f_wmt_volume: 0,
      f_meld_volume: 0,
      f_min_volume: 0,
      f_aada_volume: 0,
      f_ntx_volume: 0,
      f_iusd_volume: 0,
      f_copi_volume: 0,
      f_indy_volumee: 0,
      f_newm_volume: 0,
      f_society_volume: 0,
      f_shen_volume: 0,
      f_milk_volume: 0,
      f_sundae_volume: 0,
      f_hosky_volume: 0,
      f_lq_volume: 0,
      f_cneta_volume: 0,
      f_bank_volume: 0,
      f_gens_volume: 0,
      f_vyfi_volume: 0,
    };

    return {
      props: {
        f_prices,
        f_volumes
      },
    };
  }
}

export default function Page({ f_prices, f_volumes }) {
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

  useEffect(() => {
  const turtle_market = calculateMarketValues(f_prices.f_turtle_price, 300000000, f_volumes.f_turtle_volume);
  const froggie_market = calculateMarketValues(f_prices.f_froggie_price, 69000000000, f_volumes.f_froggie_volume);
  const konda_market = calculateMarketValues(f_prices.f_konda_price, 84322711100, f_volumes.f_konda_volume);
  const catsky_market = calculateMarketValues(f_prices.f_catsky_price, 1000000000000, f_volumes.f_catsky_volume);
  const agix_market = calculateMarketValues(f_prices.f_agix_price, 167706494, f_volumes.f_aigx_volume);
  const snek_market = calculateMarketValues(f_prices.f_snek_price, 76715880000, f_volumes.f_snek_volume);
  const wmt_market = calculateMarketValues(f_prices.f_wmt_price, 2000000000, f_volumes.f_wmt_volume);
  const meld_market = calculateMarketValues(f_prices.f_meld_price, 4000000000, f_volumes.f_meld_volume);
  const min_market = calculateMarketValues(f_prices.f_min_price, 5000000000, f_volumes.f_min_volume);
  const aada_market = calculateMarketValues(f_prices.f_aada_price, 29500000, f_volumes.f_aada_volume);
  const ntx_market = calculateMarketValues(f_prices.f_ntx_price, 408477453, f_volumes.f_ntx_volume);
  const iusd_market = calculateMarketValues(f_prices.f_iusd_price, 9481491, f_volumes.f_iusd_volume);
  const copi_market = calculateMarketValues(f_prices.f_copi_price, 302878780, f_volumes.f_copi_volume);
  const indy_market = calculateMarketValues(f_prices.f_indy_price, 35000000, f_volumes.f_indy_volume);
  const newm_market = calculateMarketValues(f_prices.f_newm_price, 9735033900, f_volumes.f_newm_volume);
  const society_market = calculateMarketValues(f_prices.f_society_price, 700000000, f_volumes.f_society_volume);
  const shen_market = calculateMarketValues(f_prices.f_shen_price, 1000000000000, f_volumes.f_shen_volume);
  const milk_market = calculateMarketValues(f_prices.f_milk_price, 10000000, f_volumes.f_milk_volume);
  const sundae_market = calculateMarketValues(f_prices.f_sundae_price, 2000000000, f_volumes.f_sundae_volume);
  const hosky_market = calculateMarketValues(f_prices.f_hosky_price, 1000000000000001, f_volumes.f_hosky_volume);
  const lq_market = calculateMarketValues(f_prices.f_lq_price, 21000000, f_volumes.f_lq_volume);
  const cneta_market = calculateMarketValues(f_prices.f_cneta_price, 1000000000, f_volumes.f_cneta_volume);
  const bank_market = calculateMarketValues(f_prices.f_bank_price, 2500000000000, f_volumes.f_bank_volume);
  const gens_market = calculateMarketValues(f_prices.f_gens_price, 100000000, f_volumes.f_gens_volume);
  const vyfi_market = calculateMarketValues(f_prices.f_vyfi_price, 450000000, f_volumes.f_vyfi_volume);
  }, []);

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

