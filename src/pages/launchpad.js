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

const companies = [
  {
    title: 'Froggie Koin',
    ticker: '$FROGGIE',
    category: 'MEME',
    description: 'Froggie is here for everyone.',
    logo: '/token-images/froggie.png',
    page: '/tokens/froggie',
    ready: true,
    price: '0.00000595'
    //price: fetchMiniswapLastPriceData('79906b9c8d2fbddeba9658387a2a1187f3edd8f546e5dc49225710a146524f47474945'),
  },
  {
    title: 'Turtle Token',
    ticker: '$TURTL',
    category: 'Utility',
    description: 'Inspiring trust in TurtleDAO verified projects.',
    page: '/tokens/turtle',
    price: '0.00000000',
    ready: true,
    logo: '/token-images/turtl.png',
  },
  {
    title: 'Future Project',
    ticker: '',
    category: '',
    description: 'Example 1.',
    page: '',
    price: '0.00000000',
    ready: false,
    logo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    //price: fetchMiniswapLastPriceData('79906b9c8d2fbddeba9658387a2a1187f3edd8f546e5dc49225710a146524f47474945'),
  },
];


export default function Page() {

  const [filteredCompanies, setFilteredCompanies] = useState(companies);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#4CAF50"
      }
    }
  });

  return (
  <>
    <Head>
      <title>
        AAID | TurtleDAO
      </title>
      <meta
        name="description"
        content="TurtleDAO's powerful dashboard for authentic token discovery"
      />
      <link rel="icon" href="https://raw.githubusercontent.com/TURTLdao/TurtleDAO-website/main/public/favicon.ico" />
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
            <div>
              <Button
                startIcon={(
                  <SvgIcon fontSize="small">
                    <PlusIcon />
                  </SvgIcon>
                )}
                variant="contained"
                sx={{ color: 'white' }}
              >
                Request
              </Button>
            </div>
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
