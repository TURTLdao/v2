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
  
    export const FroggieBio = () => {
    
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
        title="About Froggie Koin"
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
              variant="body1"
            >
              Froggie is here for everyone. Froggie is the new wave. Join us in the pond.
            </Typography>
            <Typography
              color="white"
              variant="body1"
              sx={{ marginBottom: 3 }}
            >
              <i>Froggie's are life, Froggie's are love and we want Froggie's to stay.</i>
            </Typography>
              <img src='https://github.com/TURTLdao/TURTL-images/blob/main/1.png?raw=true'
                style={{
                  height: 200,
                  mb: 2,
                  width: 200
                }}
              />
          </Box>
        </CardContent>
    
        <Divider />
    
        <CardActions>
            <Button
              sx={{ color: 'white' }}
              fullWidth='true'
              variant="contained"
              target='_blank'
              href='https://froggies.vercel.app/'
            >
                $FROGGIE Website
            </Button>
        </CardActions>
      </Card></ThemeProvider>
    );
    };
    
    