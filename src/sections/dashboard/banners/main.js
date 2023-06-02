import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader,
  IconButton, Divider, Stack, SvgIcon, Typography
} from '@mui/material';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const MainBanner = ({  }) => {
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
        border: "2px solid #4CAF50",
        maxHeight: 150
      }}>
        <CardContent>
            <Typography
              color="primary.main"
              variant="h6"
              sx={{   }}
            >
              TurtleDAO Platform
            </Typography>

            <Typography
              color="yellow"
              variant="caption"
              sx={{ marginBottom: 1 }}
            >
              v1.2
            </Typography>

            <Typography
              color="white"
              variant="body2"
              sx={{ marginBottom: 1 }}
            >
              Currently in a beta, TurtleDAO has released its platform for public usage.<br/>
              Users are welcomed to give feedback using Twitter and Discord.
            </Typography>
        </CardContent>
    
      </Card>
    </ThemeProvider>
  );
};

MainBanner.prototypes = {
  sx: PropTypes.object,
};
