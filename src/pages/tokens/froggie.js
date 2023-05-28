import Head from 'next/head';
import { useEffect } from 'react';
import { Box, Card, CardContent, Container, Divider, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FroggieNFTs } from 'src/sections/launchpad/showcase/froggie-nfts';
import { BuyFroggie } from 'src/sections/launchpad/buy/froggie';
import { AdaCompareCard } from 'src/sections/launchpad/market-cards/compare';
import { PriceCard } from 'src/sections/launchpad/market-cards/price';

import { FroggiePie } from 'src/sections/launchpad/charts/distribution';
import { FroggieEvents } from 'src/sections/launchpad/events/froggie';
import { FroggieProfileCard } from 'src/sections/launchpad/profiles/froggie';
import { FroggieBio } from 'src/sections/launchpad/bios/froggie';

import { getLastPrice } from 'src/api/fetch-calls';

export async function getStaticProps() {
  const baseId = '79906b9c8d2fbddeba9658387a2a1187f3edd8f546e5dc49225710a146524f47474945_lovelace';

  try {
    const price = await getLastPrice(baseId);

    return {
      props: {
        froggie_price: price
      },
    };
  } catch (error) {
    console.error('Error:', error);

    return {
      props: {
        froggie_price: 0
      },
    };
  }
}

export default function Page({ froggie_price }) {

  useEffect(() => {
    async function fetchData() {
      //
    }

    fetchData();
  }, []);

  const ticker = '$FROGGIE'
  const supply = 69000000000;
  const u_mc = Number(supply * froggie_price).toFixed(0);
  const formatter = new Intl.NumberFormat('en-US');

  const formatted_marketcap = formatter.format(u_mc);
  const marketcap_title = ticker + ' Marketcap'

  const formatted_price = Number(froggie_price).toFixed(8);
  const price_title = ticker + ' Price';
  const token_logo = '/token-images/froggie.png';

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
        $FROGGIE | TurtleDAO
      </title>
    </Head>

    <ThemeProvider theme={theme}>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
        bgcolor: "#1d1d1d"
      }}
    >
      <Container maxWidth="xl" >
        <Grid
          container
          spacing={3}
        >
          <Grid xs={12} sm={6} lg={3} >
            <PriceCard sx={{ height: '100%', marginRight: '10px' }} lastPrice={formatted_price} imageLink={token_logo} cardTitle={price_title}/>
          </Grid>

          <Grid xs={12} sm={6} lg={3} >
            <PriceCard sx={{ height: '100%', marginRight: '10px' }} lastPrice={formatted_marketcap} cardTitle={marketcap_title}/>
          </Grid>

          <Grid xs={12} sm={6} lg={3} >
            <AdaCompareCard sx={{ height: '100%', marginRight: '10px' }} tokenPrice={froggie_price} ticker={ticker} />
          </Grid>
          
        </Grid>


        <div>
          <Grid
            container
            spacing={3}
            sx={{
              mt: 2
            }}
          >
            <Grid 
              xs={12}
              md={6}
              lg={4}
            >
              <FroggieProfileCard sx={{ height: '100%', marginRight: '10px' }} />
            </Grid>

            <Grid
              xs={12}
              md={6}
              lg={8}
            >
              <FroggiePie
                chartSeries={[43.48, 14.49, 27.54, 14.49, 7.25, 25.75]}
                labels={['LP', 'Airdrops', 'OTC', 'Distribution', 'More LP', 'Development']}
                sx={{ height: '100%', marginRight: '10px' }}
              />
            </Grid>
          </Grid>
        </div>
        
        <div>
          <Grid
            container
            spacing={3}
            sx={{
              mt: 2
            }}
          >
            <Grid
              xs={12}
              md={6}
              lg={4}
              
            >
            <ThemeProvider theme={theme}>
            <Card sx={{
              backgroundColor: '#2d2d2d',
              border: "2px solid #4CAF50"
            }}>
              <CardContent>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="Froggieo_"
                theme='dark'
                options={{
                  height: 600,
                }}
              />
              </CardContent>
              </Card>
              </ThemeProvider>
              <Divider/>
              <Divider/>
              <Divider/>
              <Divider/>
              <FroggieNFTs sx={{ height: '100%', marginRight: '10px' }} />
            </Grid>

            <Grid
              xs={12}
              md={6}
              lg={4}
            >
              <FroggieBio sx={{ minWidth: "100%" }} />
              <Divider/>
              <Divider/>
              <Divider/>
              <Divider/>
              
              <BuyFroggie sx={{ minWidth: "100%" }}  />
            </Grid>
            <Grid
              xs={12}
              md={6}
              lg={4}
            >
              <FroggieEvents sx={{ minWidth: "100%" }} />
            </Grid>

          </Grid>
        </div>
        
        

        <div>
          <Grid
            container
            spacing={3}
            sx={{
              mt: 2
            }}
          >
            <Grid 
              xs={12}
              md={6}
              lg={4}
            >
            </Grid>

          </Grid>
        </div>
      </Container>
    </Box></ThemeProvider>
  </>
);
}

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);
