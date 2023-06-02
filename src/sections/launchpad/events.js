import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader,
  IconButton, Divider, Stack, SvgIcon, Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import PropTypes from 'prop-types';
import GlobeAltIcon from '@heroicons/react/24/solid/GlobeAltIcon';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const TokenEvents = ({ future_events, current_events, past_events, ticker, coinName }) => {
  
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4CAF50"
      }
    }
  });

  const handleClick = () => {
  
  };

return (
  <ThemeProvider theme={theme}>
  <Card sx={{
    background: 'radial-gradient(circle, rgba(42,97,44,1) 0%, rgba(45,45,45,1) 100%)',
    border: "2px solid #4CAF50"
  }}>
    <CardHeader
      sx={{ color: 'primary.main' }}
      title={ticker + " Events"}
      
    />
      <CardContent>
          {
            coinName ? 
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
              Discover what new is happening within the {coinName} ecosystem.
            </Typography>
        </Box> : null
          }

  
        <Typography sx={{ mt: 2 }}
          color="primary.main"
          variant="h6"
        >
          Future Events
        </Typography>
        
      <Card sx={{ mt: 3, mb: 5, backgroundColor: '#2d2d2d',
        border: "2px solid #4CAF50" }}>
        <CardContent>
          <Stack
            alignItems="flex-start"
            direction="column"
            justifyContent="space-between"
            spacing={2}
          >
          { future_events.event_1 ?
          <Table sx={{border: "2px solid white"}}>
            <TableBody>
              <TableRow
                hover
              >
                <TableCell style={{ fontWeight: 'bold', color: 'white' }}>
                  <center>{future_events['event_1']}</center>
                </TableCell>

                <TableCell>
                  <center>
                    <IconButton href={future_events.event_1_link} target='_blank'>
                      <SvgIcon fontSize="small" sx={{ color: 'primary.main' }}>
                        <GlobeAltIcon />
                      </SvgIcon>
                    </IconButton>
                  </center>
                </TableCell>

              </TableRow>

              {
                future_events.event_2 ?
              <TableRow
                hover
              >
                <TableCell style={{ fontWeight: 'bold', color: 'white' }}>
                  <center>{future_events['event_2']}</center>
                </TableCell>

                <TableCell>
                  <center>
                    <IconButton href={future_events.event_2_link} target='_blank'>
                      <SvgIcon fontSize="small" sx={{ color: 'primary.main' }}>
                        <GlobeAltIcon />
                      </SvgIcon>
                    </IconButton>
                  </center>
                </TableCell>

              </TableRow> : null
              }

              {
                future_events.event_3 ?
              <TableRow
                hover
              >
                <TableCell style={{ fontWeight: 'bold', color: 'white' }}>
                  <center>{future_events['event_3']}</center>
                </TableCell>

                <TableCell>
                  <center>
                    <IconButton href={future_events.event_3_link} target='_blank'>
                      <SvgIcon fontSize="small" sx={{ color: 'primary.main' }}>
                        <GlobeAltIcon />
                      </SvgIcon>
                    </IconButton>
                  </center>
                </TableCell>

              </TableRow> : null
              }

            </TableBody>
          </Table>
          : null
          }

            
            
          </Stack>
        </CardContent>
      </Card>
        
        
        <Typography sx={{ mt: 5 }}
          color="primary.main"
          variant="h6"
        >
          Current Events
        </Typography>
        
      <Card sx={{ mt: 3, mb: 5, backgroundColor: '#2d2d2d',
        border: "2px solid #4CAF50" }}>
        <CardContent>
          <Stack
            alignItems="flex-start"
            direction="column"
            justifyContent="space-between"
            spacing={2}
          >
          { current_events.event_1 ?
          <Table sx={{border: "2px solid white"}}>
            <TableBody>
              <TableRow
                hover
              >
                <TableCell style={{ fontWeight: 'bold', color: 'white' }}>
                  <center>{current_events['event_1']}</center>
                </TableCell>

                <TableCell>
                  <center>
                    <IconButton href={current_events.event_1_link} target='_blank'>
                      <SvgIcon fontSize="small" sx={{ color: 'primary.main' }}>
                        <GlobeAltIcon />
                      </SvgIcon>
                    </IconButton>
                  </center>
                </TableCell>

              </TableRow>
              
              {
                current_events.event_2 ?
              <TableRow
                hover
              >
                <TableCell style={{ fontWeight: 'bold', color: 'white' }}>
                  <center>{current_events['event_1']}</center>
                </TableCell>

                <TableCell>
                  <center>
                    <IconButton href={current_events.event_2_link} target='_blank'>
                      <SvgIcon fontSize="small" sx={{ color: 'primary.main' }}>
                        <GlobeAltIcon />
                      </SvgIcon>
                    </IconButton>
                  </center>
                </TableCell>

              </TableRow> : null
              }

              {
                current_events.event_3 ?
              <TableRow
                hover
              >
                <TableCell style={{ fontWeight: 'bold', color: 'white' }}>
                  <center>{current_events['event_1']}</center>
                </TableCell>

                <TableCell>
                  <center>
                    <IconButton href={current_events.event_3_link} target='_blank'>
                      <SvgIcon fontSize="small" sx={{ color: 'primary.main' }}>
                        <GlobeAltIcon />
                      </SvgIcon>
                    </IconButton>
                  </center>
                </TableCell>

              </TableRow> : null
              }

            </TableBody>
          </Table>
          : null
          }
            
            
          </Stack>
        </CardContent>
      </Card>



      <Typography 
        color="primary.main"
        variant="h6"
      >
        Past Events
      </Typography>

      <Card sx={{ mt: 3, backgroundColor: '#2d2d2d',
        border: "2px solid #4CAF50"  }}>
        <CardContent>
          <Stack
            alignItems="flex-start"
            direction="column"
            justifyContent="space-between"
            spacing={2}
          >
          { past_events.event_1 ?
          <Table sx={{border: "2px solid white"}}>
            <TableBody>
              <TableRow
                hover
              >
                <TableCell style={{ fontWeight: 'bold', color: 'white' }}>
                  <center>{past_events['event_1']}</center>
                </TableCell>

                <TableCell>
                  <center>
                    <IconButton href={past_events.event_1_link} target='_blank'>
                      <SvgIcon fontSize="small" sx={{ color: 'primary.main' }}>
                        <GlobeAltIcon />
                      </SvgIcon>
                    </IconButton>
                  </center>
                </TableCell>

              </TableRow>

              {
                past_events.event_2 ?
              <TableRow
                hover
              >
                <TableCell style={{ fontWeight: 'bold', color: 'white' }}>
                  <center>{past_events['event_2']}</center>
                </TableCell>

                <TableCell>
                  <center>
                    <IconButton href={past_events.event_2_link} target='_blank'>
                      <SvgIcon fontSize="small" sx={{ color: 'primary.main' }}>
                        <GlobeAltIcon />
                      </SvgIcon>
                    </IconButton>
                  </center>
                </TableCell>

              </TableRow> : null
              }

            </TableBody>
          </Table>
          : null
          }
          </Stack>
        </CardContent>
      </Card>

    </CardContent>
    <Divider />
  </Card>
  </ThemeProvider>
);
};

TokenEvents.prototypes = {
  sx: PropTypes.object,
  future_events: PropTypes.string.isRequired,
  current_events: PropTypes.string.isRequired,
  past_events: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  coinName: PropTypes.string,
};
