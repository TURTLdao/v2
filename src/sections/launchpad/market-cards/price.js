import PropTypes from 'prop-types';
import { Avatar, Card, CardContent, Stack, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const PriceCard = ({ lastPrice, sx, imageLink, cardTitle }) => {

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
      background: 'radial-gradient(circle, rgba(42,97,44,1) 0%, rgba(45,45,45,1) 100%)',
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
              {cardTitle}
            </Typography>
            <Typography variant="h5"
              color="white"
            >
              ₳ {lastPrice}
            </Typography>
          </Stack>
          {imageLink ? (
            <Avatar
              sx={{
                backgroundColor: '#fff',
                height: 56,
                width: 56
              }}
              src={imageLink}
            />
          ) : null}
        </Stack>

      </CardContent>
    </Card></ThemeProvider>
  );
};

PriceCard.prototypes = {
  sx: PropTypes.object,
  lastPrice: PropTypes.string.isRequired,
  imageLink: PropTypes.string,
  cardTitle: PropTypes.string.isRequired,
};
