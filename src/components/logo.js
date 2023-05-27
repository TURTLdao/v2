import { useTheme } from '@mui/material/styles';

export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <img src='https://github.com/TURTLdao/TURTL-images/blob/main/TURTL-coin.png?raw=true'></img>
  );
};
