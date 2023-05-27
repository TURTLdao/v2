import Head from 'next/head';
import { Box, Card, CardContent, Container, Divider, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { useEffect, useState } from 'react';

//import { AdaPriceCard } from 'src/sections/dashboard/price-cards/ada';
import { FroggiePie } from 'src/sections/launchpad/charts/distribution';
import { FroggieEvents } from 'src/sections/launchpad/events/froggie';
import { FroggieProfileCard } from 'src/sections/launchpad/profiles/froggie';
import { FroggieBio } from 'src/sections/launchpad/bios/froggie';

import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { border } from '@mui/system';
import { FroggieNFTs } from 'src/sections/launchpad/showcase/froggie-nfts';
import { FroggiePriceChart } from 'src/sections/launchpad/charts/froggie-price';

import { FroggieAdaCompareCard } from 'src/sections/launchpad/cards/froggie/froggie-ada';
import { FroggieMarketcapCard } from 'src/sections/launchpad/cards/froggie/froggie-mc';
import { FroggiePooledCard } from 'src/sections/launchpad/cards/froggie/froggie-pooled';
import { FroggiePriceCard } from 'src/sections/launchpad/cards/froggie/froggie-price';
import { BuyFroggie } from 'src/sections/launchpad/buy/froggie';

export default function Page() {

  useEffect(() => {
    async function fetchData() {
      //
    }

    fetchData();
  }, []);

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
        bgcolor: "#1d1d1d"
      }}
    >
      <Container maxWidth="xl" >
        <Grid
          container
          spacing={3}
        >
          <Grid xs={12} sm={6} lg={3} >
            <FroggiePriceCard sx={{ height: '100%', marginRight: '10px' }} />
          </Grid>

          <Grid xs={12} sm={6} lg={3} >
            <FroggieMarketcapCard sx={{ height: '100%', marginRight: '10px' }} />
          </Grid>

          <Grid xs={12} sm={6} lg={3} >
            <FroggieAdaCompareCard sx={{ height: '100%', marginRight: '10px' }} />
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
                chartSeries={[32.72, 10.89, 20.72, 10.89, 5.46, 19.32]}
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
