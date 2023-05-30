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

export const TokenEvents = ({ future_events, current_events, past_events, ticker, coinName }) => {
  
  const handleClick = () => {
  
  };

return (
  <Card sx={{
    backgroundColor: '#2d2d2d',
    border: "2px solid #4CAF50"
  }}>
    <CardHeader
      sx={{ color: 'primary.main' }}
      title={ticker + " Events"}
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
            Discover what new is happening within the {coinName} ecosystem.
          </Typography>

        </Box>
  
        <Typography sx={{ mt: 5 }}
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

            </TableBody>
          </Table>

            
            
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
          <Table sx={{border: "2px solid white"}}>
            <TableBody>
              <TableRow
                hover
              >
                <TableCell style={{ fontWeight: 'bold', color: 'white' }}>
                  <center>{current_events['event_1']}</center>
                </TableCell>

              </TableRow>
              
            </TableBody>
          </Table>
            
            
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

          <Table sx={{border: "2px solid white"}}>
            <TableBody>
              {Object.keys(past_events).map((eventKey) => (
                <TableRow hover key={eventKey}>
                  <TableCell style={{ fontWeight: 'bold', color: 'white' }}>
                    <center>{past_events[eventKey]}</center>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          </Stack>
        </CardContent>
      </Card>

    </CardContent>
    <Divider />
  </Card>
);
};

TokenEvents.prototypes = {
  sx: PropTypes.object,
  future_events: PropTypes.string.isRequired,
  current_events: PropTypes.string.isRequired,
  past_events: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  coinName: PropTypes.string.isRequired,
};
