import Head from 'next/head';
import { Box, Card, CardContent, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { useEffect, useState } from 'react';

import { FroggiePie } from 'src/sections/launchpad/charts/distribution';
import { TurtleEvents } from 'src/sections/launchpad/events/turtle';
import { TurtleProfileCard } from 'src/sections/launchpad/profiles/turtle';
import { TurtleBio } from 'src/sections/launchpad/bios/turtle';

import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { border } from '@mui/system';
import { FroggiePriceChart } from 'src/sections/launchpad/charts/froggie-price';
import { FroggieNFTs } from 'src/sections/launchpad/showcase/froggie-nfts';

import { TurtleAdaCompareCard } from 'src/sections/launchpad/cards/turtle/turtle-ada';
import { TurtleMarketcapCard } from 'src/sections/launchpad/cards/turtle/turtle-mc';
import { TurtlePooledCard } from 'src/sections/launchpad/cards/turtle/turtle-pooled';
import { TurtlePriceCard } from 'src/sections/launchpad/cards/turtle/turtle-price';

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
        $TURTL | TurtleDAO
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
            <TurtlePriceCard sx={{ height: '100%', marginRight: '10px' }} />
          </Grid>

          <Grid xs={12} sm={6} lg={3} >
            <TurtleMarketcapCard sx={{ height: '100%', marginRight: '10px' }} />
          </Grid>

          <Grid xs={12} sm={6} lg={3} >
            <TurtleAdaCompareCard sx={{ height: '100%', marginRight: '10px' }} />
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
              <TurtleProfileCard sx={{ height: '100%', marginRight: '10px' }} />
            </Grid>

            <Grid
              xs={12}
              md={6}
              lg={8}
            >
              <FroggiePie
                chartSeries={[30, 5, 10, 15, 40]}
                labels={['Token Sale', 'Airdrops & Rewards', 'Future Development', 'Liquidity', 'AAID']}
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
                screenName="_TurtleDAO"
                theme='dark'
                options={{
                  height: 600,
                }}
              />
              </CardContent>
              </Card>
              </ThemeProvider>
            </Grid>

            <Grid
              xs={12}
              md={6}
              lg={4}
            >
              <TurtleBio sx={{ minWidth: "100%" }} />
            </Grid>
            <Grid
              xs={12}
              md={6}
              lg={4}
            >
              <TurtleEvents sx={{ minWidth: "100%" }} />
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
