import PropTypes from 'prop-types';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { fetchMinswapFroggie } from 'src/api/fetch-calls';

export const FroggiePriceCard = ({ lastPrice, sx }) => {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#4CAF50"
      }
    }
  });

  //const [froggiePrice, setPrice] = useState(null);
  //const [price, setLastPrice] = useState(0);

  //useEffect(() => {
  //  setLastPrice(lastPrice);
  //}, []);

  return (
    <ThemeProvider theme={theme}>
    <Card sx={{
      backgroundColor: '#2d2d2d',
      border: "2px solid #4CAF50"
    }}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="primary.main"
              variant="overline"
            >
              Froggie Koin
            </Typography>
            <Typography variant="h5"
              color="white"
            >
              ₳ {lastPrice}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: '#fff',
              height: 56,
              width: 56
            }}
            src='/token-images/froggie.png'
          />
        </Stack>

      </CardContent>
    </Card></ThemeProvider>
  );
};

FroggiePriceCard.prototypes = {
  sx: PropTypes.object,
  lastPrice: PropTypes.object 
};
