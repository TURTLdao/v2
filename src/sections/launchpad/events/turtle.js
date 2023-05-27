import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader,
    IconButton, Divider, Stack, SvgIcon, Typography,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from '@mui/material';
    
  import GlobeAltIcon from '@heroicons/react/24/solid/GlobeAltIcon';
  
  
  const token = 
  {
    avatar: '/token-images/froggie.png',
    name: 'Froggie Koin',
    city: '69,000,000,000',
    timezone: '$FROGGIE',
    jobTitle: 'Senior Developer',
  };
  
  
  export const TurtleEvents = () => {
    
    const handleClick = () => {
    
    };
  
    const future_events =
    {
      event_1: '$TURTL Token Sale ',
      event_2: ' N/A '
    }

    const current_events =
    {
      event_1: ' N/A ',
      event_2: ' N/A '
    }
    
    const past_events =
    {
      event_1: ' N/A ',
      event_2: ' N/A '
    }
  
  return (
    <Card sx={{
      backgroundColor: '#2d2d2d',
      border: "2px solid #4CAF50"
    }}>
      <CardHeader
        sx={{ color: 'primary.main' }}
        title="$FROGGIE Events"
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
              Discover what new is happening within the Froggie Koin ecosystem.
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
                      <IconButton onClick={handleClick}>
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
                <TableRow
                  hover
                >
                  <TableCell style={{ fontWeight: 'bold', color: 'white' }}>
                    <center>{past_events['event_1']}</center>
                  </TableCell>

                </TableRow>

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
    
    