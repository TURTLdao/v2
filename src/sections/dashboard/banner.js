import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader,
  IconButton, Divider, Stack, SvgIcon, Typography
} from '@mui/material';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useContext } from 'react';
import { AppStateContext, AppStateProvider } from 'src/utils/apply-address';

export const Banner = ({ walletAddress }) => {
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
      <CardHeader
        sx={{ color: 'primary.main' }}
        title={"Banner"}
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
            <Typography
              color="white"
              variant="caption"
            >
              Connected Wallet:
            </Typography>

            <Typography
              color="white"
              variant="body1"
              sx={{ marginBottom: 3 }}
            >
              x = {walletAddress}
            </Typography>
          </Box>
        </CardContent>
    
        <Divider />
    
        <CardActions>

        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

Banner.prototypes = {
  sx: PropTypes.object,
  walletAddress: PropTypes.object,
};
