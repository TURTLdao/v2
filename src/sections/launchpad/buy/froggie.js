import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader,
    IconButton, Divider, Stack, SvgIcon, Typography
  } from '@mui/material';
    
  import GlobeAltIcon from '@heroicons/react/24/solid/GlobeAltIcon';
  
import { createTheme, ThemeProvider } from '@mui/material/styles';

  const token = 
  {
    avatar: '/token-images/froggie.png',
    name: 'Froggie Koin',
    city: '69,000,000,000',
    timezone: '$FROGGIE',
    jobTitle: 'Senior Developer',
  };
  
    export const BuyFroggie = () => {
    
      const handleClick = () => {
    
      };
    
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
        title="How to Buy $FROGGIE"
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
              Easy guide to buying $FROGGIE safe.
            </Typography>

            <Card sx={{
                backgroundColor: '#2d2d2d',
                border: "2px solid #4CAF50",
                mt: 2
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
              Step 1 - Create a Wallet
            </Typography>
            <Typography variant="body2"
              color="white">
              Download Eternl or your wallet of choice that support the Cardano blockchain $ADA.
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
            </Card>

            <Card sx={{
                backgroundColor: '#2d2d2d',
                border: "2px solid #4CAF50",
                mt: 2
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
              Step 2 - Get Some ₳ ADA
            </Typography>
            <Typography variant="body2"
              color="white">
              Download Eternl or your wallet of choice that support the Cardano blockchain ₳ADA.
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
            </Card>
            <Card sx={{
                backgroundColor: '#2d2d2d',
                border: "2px solid #4CAF50",
                mt: 2
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
              Step 3 - Go to Minswap
            </Typography>
            <Typography variant="body2"
              color="white">
              Go to app.minswap.org in your the browser or inside your Eternl app.
              Connect your wallet. Because $FROGGIE is a verified token on Minswap, you can select $FROGGIE from the list, and confirm.
              When Eternl prompts you for a wallet signature, sign.
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
            </Card>

          </Box>
        </CardContent>
    
        <Divider />
    
        <CardActions>
            <Button
              sx={{ color: 'white' }}
              fullWidth='true'
              variant="contained"
              target='_blank'
              href='https://app.minswap.org/swap?currencySymbolA=&tokenNameA=&currencySymbolB=79906b9c8d2fbddeba9658387a2a1187f3edd8f546e5dc49225710a1&tokenNameB=46524f47474945'
            >
                Minswap
            </Button>
        </CardActions>
      </Card></ThemeProvider>
    );
    };
    
    