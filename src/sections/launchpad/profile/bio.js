import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader,
  IconButton, Divider, Stack, SvgIcon, Typography
} from '@mui/material';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const Bio = ({ token_bio_information }) => {
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
        title={"About " + token_bio_information.coin_name}
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
              {token_bio_information.coin_motto}
            </Typography>

            <Typography
              color="white"
              variant="body1"
              sx={{ marginBottom: 3 }}
            >
              {token_bio_information.coin_paragraph_1}
            </Typography>

            {token_bio_information.coin_paragraph_2 ? (
              <Typography
                color="white"
                variant="body1"
                sx={{ marginBottom: 3 }}
              >
                {token_bio_information.coin_paragraph_2}
              </Typography>
            ) : null}

            {token_bio_information.coin_about_image ? (
              <img src={token_bio_information.coin_about_image}
                style={{
                  height: 200,
                  mb: 2,
                }}
              />
            ) : null}
          </Box>
        </CardContent>
    
        <Divider />
    
        <CardActions>
            <Button
              sx={{ color: 'white' }}
              fullWidth='true'
              variant="contained"
              target='_blank'
              href={token_bio_information.website_link}
            >
                {token_bio_information.ticker} Website
            </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

Bio.prototypes = {
  sx: PropTypes.object,
  token_bio_information: PropTypes.string.isRequired,
};
