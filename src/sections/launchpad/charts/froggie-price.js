import PropTypes from 'prop-types';
import ComputerDesktopIcon from '@heroicons/react/24/solid/ComputerDesktopIcon';
import DeviceTabletIcon from '@heroicons/react/24/solid/DeviceTabletIcon';
import PhoneIcon from '@heroicons/react/24/solid/PhoneIcon';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  SvgIcon,
  Typography,
  useTheme
} from '@mui/material';
import { Chart } from 'src/components/chart';
import SavingsIcon from '@mui/icons-material/Savings';
import PaymentsIcon from '@mui/icons-material/Payments';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useEffect } from 'react';


const useChartOptions = (labels) => {
  const theme = useTheme();

  return {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  };
};

const iconMap = {
  Banked: (
    <SvgIcon>
      <SavingsIcon  />
    </SvgIcon>
  ),
  Unbanked: (
    <SvgIcon>
      <PaymentsIcon  />
    </SvgIcon>
  )
};

export const FroggiePriceChart = (props) => {
  const { chartSeries, labels, sx } = props;
  const chartOptions = useChartOptions(labels);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#4CAF50"
      }
    }
  });

  
  useEffect(() => {
    async function fetchData() {
    }

    fetchData();
  }, []);
  
  const series = [{
    name: "Price",
    data: [0.0001, 0.0003, 0.0003, 0.0004, 0.0003, 0.0002, 0.0003, 0.0005, 0.0003]
  }];


  return (
  <ThemeProvider theme={theme}>
    <Card sx={{ 
        backgroundColor: '#2d2d2d',
        border: "2px solid #4CAF50"
    }}>
      <CardHeader sx={{ color: "primary.main" }} title="$FROGGIE Price Chart - Work In Progress (WIP)" />
      <CardContent sx={{ background: ' ' }}>
        <Chart
          height={300}
          options={chartOptions}
          series={series}
          type="line"
          width="100%"
        />
      </CardContent>
    </Card></ThemeProvider>
  );
};

FroggiePriceChart.propTypes = {
  chartSeries: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  sx: PropTypes.object
};
