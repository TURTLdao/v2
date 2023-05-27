import { Avatar, Box, Button, Card, CardActions, CardContent,
    Divider, Typography, IconButton, SvgIcon
  } from '@mui/material';
  
  import GlobeAltIcon from '@heroicons/react/24/solid/GlobeAltIcon';
  import DocumentDuplicateIcon from '@heroicons/react/24/solid/DocumentDuplicateIcon';
    
  import { createTheme, ThemeProvider } from '@mui/material/styles';
  
    const token = 
    {
      avatar: '/token-images/turtl.png',
      name: 'Turtle Token',
      supply: '500,000,000',
      ticker: '$TURTL',
      policy_id: ' ',
      fingerprint: ' ',
      governance_wallets: ['$turtledao', ' ']
    };
    
    export const TurtleProfileCard = (text) => {
    
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
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Avatar
                src={token.avatar}
                sx={{
                  height: 80,
                  mb: 2,
                  width: 80
                }}
              />
    
              <Typography
                gutterBottom
                variant="h5"
                color="primary.main"
              >
                {token.name}
              </Typography>
    
              <Typography
                color={'white'}
                variant="body2"
              >
                <b>Total Supply:</b> {token.supply}
              </Typography>
    
              <Typography
                color={'white'}
                variant="body2"
              >
                <b>Ticker:</b> {token.ticker}
              </Typography>
              </Box>
    
              <Divider sx={{ mb: 2, mt: 2}} />
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
    
              <Typography
                color="primary.main"
                variant="body2"
              >
                <b>Policy ID:</b>
              </Typography>
              <Typography
                color={'white'}
                variant="body2"
              >
                {`${token.policy_id.slice(0, 8)}...${token.policy_id.slice(-8)}`}
              <IconButton onClick={() => navigator.clipboard.writeText(token.policy_id)} sx={{ ml: 1 }}>
                <SvgIcon fontSize="small" sx={{ color: 'primary.main' }}>
                  <DocumentDuplicateIcon />
                </SvgIcon>
              </IconButton>
              </Typography>
    
              <Typography
                color="primary.main"
                variant="body2"
              >
                <b>Fingerprint:</b><br/>
              </Typography>
              <Typography
                color={'white'}
                variant="body2"
              >
                {`${token.fingerprint.slice(0, 8)}...${token.fingerprint.slice(-8)}`}
    
                <IconButton onClick={() => navigator.clipboard.writeText(token.fingerprint)} sx={{ ml: 1 }}>
                  <SvgIcon fontSize="small" sx={{ color: 'primary.main' }}>
                    <DocumentDuplicateIcon />
                  </SvgIcon>
                </IconButton>
              </Typography>
    
              <Typography
                color="primary.main"
                variant="body2"
              >
                <b>Governance Wallet:</b><br/>
              </Typography>
              <Typography
                color={'white'}
                variant="body2"
              >
                {token.governance_wallets[0]}
    
                <IconButton onClick={() => navigator.clipboard.writeText(token.governance_wallets[0])} sx={{ ml: 1 }}>
                  <SvgIcon fontSize="small" sx={{ color: 'primary.main' }}>
                    <DocumentDuplicateIcon />
                  </SvgIcon>
                </IconButton>
              </Typography>
    
            </Box>
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              fullWidth
              variant="text"
            >
              Cardano Scan
            </Button>
          </CardActions>
        </Card></ThemeProvider>
      );
    };
    
    