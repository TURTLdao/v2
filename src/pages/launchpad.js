import Head from 'next/head';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { useState, useEffect } from 'react';
import LaunchpadSearch from 'src/sections/launchpad/launchpad-search';
import { LaunchpadView } from 'src/sections/launchpad/launchpad-view';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getLastPrice } from 'src/api/fetch-calls';

export async function getStaticProps() {
  const pairIds = [
    '79906b9c8d2fbddeba9658387a2a1187f3edd8f546e5dc49225710a146524f47474945_lovelace', // $FROGGIE
    '501dd5d2fbab6af0a26b1421076ff3afc4d5a34d6b3f9694571116ea4b4f4e4441_lovelace',     // $KONDA
    '9b426921a21f54600711da0be1a12b026703a9bd8eb9848d08c9d921434154534b59_lovelace',   // $CATSKY
  ];

  try {
    const response = await fetch('https://api-mainnet-prod.minswap.org/coinmarketcap/v2/pairs');
    const data = await response.json();

    const prices = pairIds.reduce((acc, pairId) => {
      const pair = data[pairId];
      const price = pair && pair.last_price ? pair.last_price : defaultPrices[pairId];
      acc[pairId] = price;
      return acc;
    }, {});

    const f_turtle_price = Number(0).toFixed(10);

    const f_froggie_price = Number(prices[pairIds[0]]).toFixed(10);
    const f_konda_price = Number(prices[pairIds[1]]).toFixed(10);
    const f_catsky_price = Number(prices[pairIds[2]]).toFixed(10);

    return {
      props: {
        f_turtle_price,
        f_froggie_price,
        f_konda_price,
        f_catsky_price,
      },
    };

  } catch (error) {
    console.error('Error:', error);

    return {
      props: {
        f_turtle_price: 0,
        f_froggie_price: 0,
        f_konda_price: 0,
        f_catsky_price: 0,
      },
    };
  }
}


export default function Page({ f_turtle_price, f_froggie_price, f_konda_price, f_catsky_price }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4CAF50"
      }
    }
  });

  const companies = [
    {
      title: 'Froggie Koin',
      ticker: '$FROGGIE',
      category: 'MEME',
      description: 'Froggie is here for everyone.',
      logo: '/token-images/froggie.png',
      page: '/tokens/froggie',
      ready: true,
      price: f_froggie_price
    },
    {
      title: 'Turtle Token',
      ticker: '$TURTL',
      category: 'Utility',
      description: 'Inspiring trust in TurtleDAO verified projects.',
      page: '/tokens/turtle',
      price: f_turtle_price,
      ready: true,
      logo: '/token-images/turtl.png'
    },
    {
      title: 'AdaKonda Coin',
      ticker: '$KONDA',
      category: 'Meme',
      description: 'To infinity and beyonda!',
      page: '/tokens/konda',
      price: f_konda_price,
      ready: true,
      logo: '/token-images/konda.png'
    },
    {
      title: 'Catsky Token',
      ticker: '$CATSKY',
      category: 'Meme',
      description: 'Believers in Cardano',
      page: '/tokens/catsky',
      price: f_catsky_price,
      ready: true,
      logo: '/token-images/catsky.png'
    },
    {
      title: 'Future Project',
      ticker: '',
      category: '',
      description: 'Example 1.',
      page: '',
      price: '0.00000000',
      ready: false,
      logo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    },
  ];

  const [filteredCompanies, setFilteredCompanies] = useState(companies);

  return (
  <>
    <Head>
      <title>
        AAID | TurtleDAO
      </title>
    </Head>
    <ThemeProvider theme={theme}>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
        background: '#1d1d1d',
            
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
          >
            <Stack spacing={1}>
              <Typography variant="h4" color={'white'}>
                Auditing and Audience Development Initiative
              </Typography>
            </Stack>
          </Stack>

          <LaunchpadSearch companies={companies} setFilteredCompanies={setFilteredCompanies}/>

          <Grid container spacing={3}>
            {filteredCompanies.map((company) => (
              <Grid xs={12} md={6} lg={4} key={company.id}>
                <LaunchpadView company={company} />
              </Grid>
            ))}
          </Grid>

        </Stack>
      </Container>
    </Box>
    </ThemeProvider>
  </>
);
}

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);
