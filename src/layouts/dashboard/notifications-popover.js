import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { Box, Divider, MenuItem, MenuList, Popover, Typography } from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';

import { Avatar, Card, CardContent, Stack, SvgIcon} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const NotificationsPopover = (props) => {
  const { anchorEl, onClose, open } = props;
  const router = useRouter();
  const auth = useAuth();

  const handleSignOut = useCallback(
    () => {
      onClose?.();
      auth.signOut();
      router.push('/auth/login');
    },
    [onClose, auth, router]
  );

  const theme = createTheme({
    palette: {
      primary: {
        main: "#4CAF50"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom'
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 650, background: '#1d1d1d', border: "2px solid #4CAF50" } }}
    >
    <Box
      sx={{
        py: 1.5,
        px: 2
      }}
    >
      <Typography variant="overline" sx={{ color: 'primary.main' }}>
        Notifications
      </Typography>
    </Box>
      <MenuList
        disablePadding
        dense
        sx={{
          p: '8px',
          '& > *': {
            borderRadius: 1
          }
        }}
      >
      <MenuItem  >
          
  <Card sx={{ minWidth: "100%", background: '#2d2d2d', border: "2px solid #4CAF50"}} >
    <CardContent>
      <Stack
        alignItems="flex-start"
        direction="row"
        justifyContent="space-between"
        spacing={3}
      >
        <Stack spacing={1}>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography
            color="primary.main"
            variant="h6"
          >
            TurtleDao Dashboard Launch
          </Typography>
          <Typography variant="p" sx={{ color: '#7d7d7d'}}>
            Date: 26<sup>nd</sup> / May / 2023
          </Typography>
          <Typography variant="p" sx={{ color: 'white'}}>
            TurtleDAO has finally launched it's Cardano dashboard after extensive development.
          </Typography>
          </Box>
        </Stack>
        
      </Stack>
    </CardContent>
  </Card>
      </MenuItem>
      </MenuList>
    </Popover></ThemeProvider>
  );
};

NotificationsPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
};
