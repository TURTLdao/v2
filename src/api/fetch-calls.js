export async function getLastPrice(baseId) {
  const response = await fetch('https://api-mainnet-prod.minswap.org/coinmarketcap/v2/pairs');
  const data = await response.json();

  const pair = data[baseId];

  if (pair && pair.last_price) {
    return pair.last_price;
  }

  return 0; // Return 0 if baseId or last_price is not found
}

export async function fetchCoinData(coinName)
{
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/' + coinName + '/tickers');
    const data = await response.json();
    
    const priceUsd = parseFloat(data.tickers[0].converted_last.usd);
    return priceUsd;
  } catch (error) {
    console.log('Failed to fetch CoinGecko data for: ' + coinName + ' - ' + error.message);
  }
}
