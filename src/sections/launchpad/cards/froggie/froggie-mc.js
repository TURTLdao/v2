import PropTypes from 'prop-types';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';

export const FroggieMarketcapCard = (props) => {
  const { sx } = props;
  
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4CAF50"
      }
    }
  });
  
  const price = '2,516,554';
  const mc =   price;
  
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
              $FROGGIE Marketcap
            </Typography>
            <Typography variant="h5"
              color="white">
              ₳ {mc}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card></ThemeProvider>
  );
};

FroggieMarketcapCard.prototypes = {
  sx: PropTypes.object
};
