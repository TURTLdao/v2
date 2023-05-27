import PropTypes from 'prop-types';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { fetchMinswapFroggie } from 'src/api/fetch-calls';

export const FroggiePriceCard = (props) => {
  const { sx } = props;

  const theme = createTheme({
    palette: {
      primary: {
        main: "#4CAF50"
      }
    }
  });

  const [froggiePrice, setPrice] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchMinswapFroggie();

      if (response && response.last_price) {
        const { last_price: froggiePrice } = response;
  
        setPrice(froggiePrice);
        console.log('Froggie Price:', froggiePrice);
      } else {
        console.log('Last price not available.');
      }
    }

    fetchData();
  }, []);

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
              ₳ {froggiePrice}
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
  sx: PropTypes.object
};
