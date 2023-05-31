import { SvgIcon } from '@mui/material';

// https://mui.com/material-ui/material-icons/?query=
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const items = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: (
      <SvgIcon fontSize="small">
        <DashboardIcon />
      </SvgIcon>
    )
  },
  {
    title: 'AAID',
    path: '/launchpad',
    icon: (
      <SvgIcon fontSize="small">
        <RocketLaunchIcon />
      </SvgIcon>
    )
  }
];

export const items2 = [
  {
    title: 'Watchlist',
    path: '/',
    disabled: true,
    icon: (
      <SvgIcon fontSize="small">
        <VisibilityIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Buy / Sell',
    path: '/',
    disabled: true,
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingCartIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Pool',
    path: '/',
    disabled: true,
    icon: (
      <SvgIcon fontSize="small">
        <StackedLineChartIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Farming',
    path: '/',
    disabled: true,
    icon: (
      <SvgIcon fontSize="small">
        <StackedLineChartIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Stake',
    path: '/',
    disabled: true,
    icon: (
      <SvgIcon fontSize="small">
        <StackedLineChartIcon />
      </SvgIcon>
    )
  }
];
