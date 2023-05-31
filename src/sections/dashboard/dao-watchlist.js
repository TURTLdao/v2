import PropTypes from 'prop-types';
import { Box, Button, Card, CardActions, CardHeader, Divider, SvgIcon,
  Table, TableBody, TableCell, TableHead, TableRow, Typography
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { useState, useEffect } from 'react';

import { SocialIcon } from 'react-social-icons';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { getDaoWatchlistItems, getPopularWatchlistItems } from './watchlist-items';

export const TurtleDaoWatchlist = ({ market_data }) => {
 
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4CAF50"
      }
    }
  });

  const dao_watchlist_items = getDaoWatchlistItems(market_data);
  const popular_watchlist_items = getPopularWatchlistItems(market_data);

  const [activeTableTopButton, setActiveTableTopButton] = useState(1);
  const [tableItem, setTableItem] = useState(dao_watchlist_items);
  const [sortedItems, setSortedItems] = useState(tableItem);

  const sortByPrice = () => {
    const sortedByPrice = [...tableItem].sort((a, b) => b.price - a.price);
    setSortedItems(sortedByPrice);
  };

  const sortByMarketCap = () => {
    const sortedByMarketCap = [...tableItem].sort((a, b) => b.marketcap - a.marketcap);
    setSortedItems(sortedByMarketCap);
  };

  const sortById = () => {
    const sortedById = [...tableItem].sort((a, b) => a.id - b.id);
    setSortedItems(sortedById);
  };

  const handleTopButtonButtonClick = (btn_name) => {
    switch (btn_name) {
      case 'dao':
        setTableItem(dao_watchlist_items);
        setActiveTableTopButton(1);
        setSortedItems(dao_watchlist_items);
        break;
      case 'popular':
        setTableItem(popular_watchlist_items);
        setActiveTableTopButton(2);
        setSortedItems(popular_watchlist_items);
        break;
      default:
        setTableItem(dao_watchlist_items);
        setActiveTableTopButton(1);
        setSortedItems(dao_watchlist_items);
        break;
    }
  };

  return (
    <ThemeProvider theme={theme}>
    <Card sx={{
      backgroundColor: '#2d2d2d',
      border: "2px solid #4CAF50"
    }}>
      <CardHeader
        action={(
          <div>
            <Button
              variant={activeTableTopButton === 1 ? "contained" : "text"}
              size="small"
              onClick={() => handleTopButtonButtonClick('main')}
              sx={{ marginRight: "10px", color: 'white' }}
            >
              Main
            </Button>
            <Button
              variant={activeTableTopButton === 2 ? "contained" : "text"}
              size="small"
              onClick={() => handleTopButtonButtonClick('popular')}
              sx={{ marginRight: "10px", color: 'white' }}
            >
              Popular
            </Button>
          </div>
        )}
        sx={{ color: 'primary.main'}}
        title="TurtleDAO's Watchlist"
      />

      <Scrollbar 
    sx={{
      height: 350,
      width: "auto",
      '& .simplebar-content': {
        height: '100%',
        width: "auto"
      },
      '& .simplebar-scrollbar:before': {
        background: 'neutral.400'
      }
    }}>
        <Box  >
            <Button
              variant={"text"}
              size="small"
              sx={{ marginLeft: "20px", marginBottom: "10px", color: 'white' }}
              onClick={sortById}
            >
              Sort By: ID
            </Button>
            <Button
              variant={"text"}
              size="small"
              sx={{ marginLeft: "20px", marginBottom: "10px", color: 'white' }}
              onClick={sortByPrice}
            >
              Sort By: Price
            </Button>
            <Button
              variant={"text"}
              size="small"
              sx={{ marginLeft: "20px", marginBottom: "10px", color: 'white' }}
              onClick={sortByMarketCap}
            >
              Sort By: Marketcap
            </Button>

          <Table >
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: 'primary.main'}}>
                  <b><center>Logo</center></b>
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'primary.main'}}>
                  <b><center>Ticker</center></b>
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'primary.main'}}>
                  <b><center>Name</center></b>
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'primary.main'}}>
                  <b><center>Price</center></b>
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'primary.main'}}>
                  <b><center>Marketcap</center></b>
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'primary.main'}}>
                  <b><center>ADA Compare</center></b>
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'primary.main'}}>
                  <b><center>TurtleDAO Support</center></b>
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'primary.main'}}>
                  <b><center>Social</center></b>
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'primary.main'}}>
                  <b><center>Dex</center></b>
                </TableCell>
              </TableRow>
            </TableHead>
            
            <TableBody>
            {
              (sortedItems).map((item) => {

                return (
                  <TableRow
                    hover
                  >
                    <TableCell>
                      <center><img src={item.coin_logo} alt={item.ticker} width="30" height="30" /></center>
                    </TableCell>
                    <TableCell style={{ color: 'white' }}>
                      <center>{item.ticker}</center>
                    </TableCell>
                    <TableCell style={{ color: 'white' }}>
                      <center>{item.name}</center>
                    </TableCell>
                    <TableCell style={{ color: 'white' }}>
                      <center>₳ {Number(item.price).toFixed(10).toLocaleString()}</center>
                    </TableCell>
                    <TableCell style={{ color: 'white' }}>
                      <center>₳ {Number(item.marketcap).toFixed(2).toLocaleString()}</center>
                    </TableCell>
                    <TableCell style={{ color: 'white' }}>
                      <center>{Number(item.to_ada).toLocaleString()} {item.ticker}</center>
                    </TableCell>
                    <TableCell>
                      <center>
                      {
                      item.dao_support_link ?
                        <Button
                          variant={"contained"}
                          size="small"
                          onClick={() => handleTopButtonButtonClick('main')}
                          sx={{ marginRight: "10px", color: 'white' }}
                        >
                          Go
                        </Button> : <Button
                          variant={"contained"}
                          size="small"
                          onClick={() => handleTopButtonButtonClick('main')}
                          sx={{ marginRight: "10px" }}
                          disabled={true}
                        >
                          Go
                        </Button>
                      }
                      </center>
                    </TableCell>

                    <TableCell>

                      {
                      item.discord_link ?
                        <SocialIcon url={item.discord_link} style={{ height: 25, width: 25, marginRight: 4, marginLeft: 4 }} network="discord"/>
                      :
                        null
                      }

                      {
                      item.twitter_link ?
                        <SocialIcon url={item.twitter_link} style={{ height: 25, width: 25 }} network="twitter"/>
                      :
                        null
                      }

                    </TableCell>
                    <TableCell>
                      <center>
                      {
                      item.dao_support_link ?
                        <Button
                          variant={"contained"}
                          size="small"
                          onClick={() => handleTopButtonButtonClick('main')}
                          sx={{ marginRight: "10px", color: 'white' }}
                        >
                          Buy Now
                        </Button> : <Button
                          variant={"contained"}
                          size="small"
                          onClick={() => handleTopButtonButtonClick('main')}
                          sx={{ marginRight: "10px" }}
                          disabled={true}
                        >
                          Buy Now
                        </Button>
                      }
                      </center>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
    </Card></ThemeProvider>
  );
};

TurtleDaoWatchlist.prototypes = {
  sx: PropTypes.object,
  market_data: PropTypes.string.isRequired,
};