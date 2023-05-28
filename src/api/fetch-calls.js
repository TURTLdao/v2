
export async function getLastPrice(baseId) {
  const response = await fetch('https://api-mainnet-prod.minswap.org/coinmarketcap/v2/pairs');
  const data = await response.json();

  const pair = data[baseId];

  if (pair && pair.last_price) {
    return pair.last_price;
  }

  return 0; // Return 0 if baseId or last_price is not found
}

export async function fetchMinswapFroggie() {
  try {
    const response = await fetch('https://api-mainnet-prod.minswap.org/coinmarketcap/v2/pairs');
    const data = await response.json();
    const pairs = data.data;
    
    // Find the froggie lovelance pair
    const specificPair = pairs["79906b9c8d2fbddeba9658387a2a1187f3edd8f546e5dc49225710a146524f47474945_lovelace"];

    if (specificPair) {
      const {
        base_id,
        base_name,
        base_symbol,
        quote_id,
        quote_name,
        quote_symbol,
        last_price,
        base_volume,
        quote_volume,
        lp_token_id,
        pool_id,
      } = specificPair;

      return {
        base_id,
        base_name,
        base_symbol,
        quote_id,
        quote_name,
        quote_symbol,
        last_price,
        base_volume,
        quote_volume,
        lp_token_id,
        pool_id,
      };
    } else {
      console.log('Pair not found.');
      return null;
    }
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
