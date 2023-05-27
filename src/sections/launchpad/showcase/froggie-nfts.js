import { Avatar, Box, Button, Card, CardActions, CardContent,
    Divider, Typography, IconButton, SvgIcon
  } from '@mui/material';
  
  import GlobeAltIcon from '@heroicons/react/24/solid/GlobeAltIcon';
  import DocumentDuplicateIcon from '@heroicons/react/24/solid/DocumentDuplicateIcon';
    
  import { createTheme, ThemeProvider } from '@mui/material/styles';
  
    const token = 
    {
      avatar: 'https://github.com/TURTLdao/token-images/blob/main/froggie.png?raw=true',
      name: 'Froggie Koin',
      supply: '69,000,000,000',
      ticker: '$FROGGIE',
      policy_id: '79906b9c8d2fbddeba9658387a2a1187f3edd8f546e5dc49225710a1',
      fingerprint: 'asset19c3e54qhtme5pptxsgpwu4ea60904drzlyxn0l',
      governance_wallets: ['$froggiepond', 'stake1uytl7zf2sc2nxkjdjdnar05u4gfkuzdm0dyxrn7vvws833sy9t6ur']
    };
    
    export const FroggieNFTs = () => {
    
      const handleCopyButtonClick = () => {
        // define for each string in `token`
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
          <CardContent>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                color="primary.main"
              >
                $FROGGIE NFTs
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
            <video width="100%" height="100%" controls>
              <source src='https://video.twimg.com/tweet_video/FxAaXPOWYAAWga3.mp4' type="video/mp4" />
            </video>
  
    
            </Box>
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              fullWidth
              variant="text"
            >
              Tweet
            </Button>
          </CardActions>
        </Card></ThemeProvider>
      );
    };
    
    