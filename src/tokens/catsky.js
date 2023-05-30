function CatskyInformation(catsky_price) {
    // String tools
    const formatter = new Intl.NumberFormat('en-US');
  
    // Basic
    const coin_name = 'Catsky Token';
    const ticker = '$CATSKY';
    const token_logo = '/token-images/catsky.png';
  
    // Raw Economics
    const raw_supply = 1000000000000;
    const raw_price = catsky_price;
    const raw_marketcap = Number(raw_supply * raw_price).toFixed(0);
  
    // Formatted Economics
    const formatted_marketcap = formatter.format(raw_marketcap);
    const formatted_price = Number(raw_price).toFixed(8);
    const formatted_supply = formatter.format(raw_supply);
  
    // Dashboard Information
    const marketcap_title = ticker + ' Marketcap';
    const price_title = ticker + ' Price';
  
    // Token Events
    const future_events = {
      event_1: ' N/A ',
      event_1_link: '',
      event_2: ' N/A '
    };
    const current_events = {
      event_1: ' N/A ',
      event_1_link: '',
      event_2: ' N/A '
    };
    const past_events = {
      event_1: ' N/A ',
    };

    const verfied_buy_information = {
        buy_link: 'https://app.minswap.org/swap?currencySymbolA=&tokenNameA=&currencySymbolB=9b426921a21f54600711da0be1a12b026703a9bd8eb9848d08c9d921&tokenNameB=434154534b59',
        ticker: ticker,
      };
    
    const token_bio_information = {
      coin_name: coin_name,
      coin_motto: 'Believers in Cardano',
      coin_paragraph_1: 'Catsky Token is more than just a token; its a mission to make a substantial impact in the crypto world. With continuous development, Catsky offers unique NFT airdrops to its holders, fostering a community driven by creativity and innovation. Dive into the thrilling and engaging crypto journey that Catsky Token provides.',
      coin_paragraph_2: '',
      coin_about_image: 'https://pbs.twimg.com/profile_banners/1651627976759341056/1684892915/1500x500',
      website_link: 'https://catsky.io/',
      ticker: ticker
    };
  
    const token_profile_information = {
      avatar: token_logo,
      name: coin_name,
      supply: formatted_supply,
      ticker: ticker,
      policy_id: '9b426921a21f54600711da0be1a12b026703a9bd8eb9848d08c9d921',
      fingerprint: 'asset18zpauqujk3cu9cypneh8t7l46wmrwa5klmslnm',
      governance_wallets: ['$catsky.catsky', 'stake1u9kqvuy7upxvegggjk42txxkzd4fvs0xa94a5c93y9nxp6c9cngv0'],
      cardano_scan: 'https://cardanoscan.io/token/9b426921a21f54600711da0be1a12b026703a9bd8eb9848d08c9d921434154534b59'
    };
  
    const data = {
      future_events,
      current_events,
      past_events,
      formatter,
      coin_name,
      ticker,
      token_logo,
      raw_supply,
      raw_price,
      raw_marketcap,
      formatted_marketcap,
      formatted_price,
      formatted_supply,
      marketcap_title,
      price_title,
      verfied_buy_information,
      token_bio_information,
      token_profile_information
    };
  
    return data;
  }
  
  export default CatskyInformation;
  