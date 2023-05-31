import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Grid,
  IconButton, Divider, Stack, SvgIcon, Typography
} from '@mui/material';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';
import { fetchAddressAssets } from 'src/api/fetch-calls';
import { PriceCard } from './market-cards/price';

export const TurtleDAOfunds = ({  }) => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const address = 'addr1qywhrwe3vufpf66n7w9ld42ths6j6j53swv9agpt3pd0u409hz67cj83lhuhgvvtu97jd3fyswqu80g0s3uuawen7kmqv4w2sg';

      try {
        const data = await fetchAddressAssets(address);

        if (data) {
          setResponseData(data);
        } else {
          console.log('No data available or an error occurred.');
        }
      } catch (error) {
        console.error(error);
      }
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
    <ThemeProvider theme={theme}>
      <Card sx={{
        backgroundColor: '#2d2d2d',
        border: "2px solid #4CAF50"
      }}>
      <CardHeader
        sx={{ color: 'primary.main' }}
        title={"About "}
        action={(
          <div>
          </div>
        )}
      />
        <CardContent>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column'
              
            }}
          >
          {responseData.map((item, index) => (
            <Grid
              xs={12}
              md={6}
              lg={4}
              
            >
              <PriceCard cardTitle={item.asset_name} lastPrice={item.quantity}/>
            </Grid>
          ))}

          </Box>
        </CardContent>
    
        <Divider />
    
        <CardActions>

        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

TurtleDAOfunds.prototypes = {
  sx: PropTypes.object,
};
