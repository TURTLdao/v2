import PropTypes from 'prop-types';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';

export const TurtlePooledCard = (props) => {
  const { sx } = props;
  
  const tokens =   "0 $TURTL";
  
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
              Pooled Tokens
            </Typography>
            <Typography variant="h5" 
              color="white">
              ₳ {tokens}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card></ThemeProvider>
  );
};

TurtlePooledCard.prototypes = {
  sx: PropTypes.object
};
