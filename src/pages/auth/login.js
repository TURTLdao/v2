import { useCallback, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Page() {
  const router = useRouter();
  const auth = useAuth();

  const handleSkip = useCallback(
    () => {
      auth.skip();
      router.push('/launchpad');
    },
    [auth, router]
  );

  const theme = createTheme({
    palette: {
      primary: {
        main: "#4CAF50"
      }
    }
  });

  return (
    <>
    <ThemeProvider theme={theme}>
      <Head>
        <title>
          Login | Devias Kit
        </title>
      </Head>
      <Box
        sx={{
          backgroundColor: '#1d1d1d',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%'
          }}
        >
          <div>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography
                color="white"
                variant="body2"
              >
                Haven&apos;t used Cardano yet?
                &nbsp;
                <Link
                  component={NextLink}
                  href="/auth/register"
                  underline="hover"
                  variant="subtitle2"
                  style={{ color: 'primary.main' }}
                >
                  Eternl 
                </Link>
                  &nbsp;- The most trusted Cardano web wallet
              </Typography>
            </Stack>

              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#4CAF50", color: 'white' }}
                disabled='true'
              >
                Connect Wallet
              </Button>
              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                onClick={handleSkip}
                style={{ color: '#d1d1d1' }}
              >
                Skip connecting wallet
              </Button>    
          </div>
        </Box>
      </Box>
      </ThemeProvider>
    </>
  );
}

Page.getLayout = (page) => (
  <AuthLayout>
    {page}
  </AuthLayout>
);

