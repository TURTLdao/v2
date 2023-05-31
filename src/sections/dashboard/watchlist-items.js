
export const getDaoWatchlistItems = (market_data) => {
  const dao_table_items = [
    {
      id: 0,
      name: 'Turtle Token',
      ticker: '$TURTL',
      coin_logo: '/token-images/turtl.png',
      price: market_data.turtle_market.price,
      marketcap: market_data.turtle_market.marketcap,
      to_ada: market_data.turtle_market.to_ada,
      dao_support_link: 'https://turtledao-dashboard.vercel.app/tokens/turtle',
      twitter_link: 'https://twitter.com/_TurtleDAO',
      discord_link: '',
      social_link_3: '',
    },
    {
      id: 1,
      name: 'Froggie Koin',
      ticker: '$FROGGIE',
      coin_logo: '/token-images/froggie.png',
      price: market_data.froggie_market.price,
      marketcap: market_data.froggie_market.marketcap,
      to_ada: market_data.froggie_market.to_ada,
      dao_support_link: 'https://turtledao-dashboard.vercel.app/tokens/froggie',
      twitter_link: 'https://twitter.com/Froggieo_',
      discord_link: '',
      social_link_3: '',
    },
    {
      id: 2,
      name: 'AdaKonda Coin',
      ticker: '$KONDA',
      coin_logo: '/token-images/konda.png',
      price: market_data.konda_market.price,
      marketcap: market_data.konda_market.marketcap,
      to_ada: market_data.konda_market.to_ada,
      dao_support_link: 'https://turtledao-dashboard.vercel.app/tokens/konda',
      twitter_link: 'https://twitter.com/AdaKondaCoin',
      discord_link: '',
      social_link_3: '',
    },
    {
      id: 3,
      name: 'Catsky Token',
      ticker: '$CATSKY',
      coin_logo: '/token-images/catsky.png',
      price: market_data.catsky_market.price,
      marketcap: market_data.catsky_market.marketcap,
      to_ada: market_data.catsky_market.to_ada,
      dao_support_link: 'https://turtledao-dashboard.vercel.app/tokens/catsky',
      twitter_link: 'https://twitter.com/Catskycrypto',
      discord_link: '',
      social_link_3: '',
    },
  ];

  return dao_table_items;
};

export const getPopularWatchlistItems = (market_data) => {
  const popular_table_items = [
    {
      id: 0,
      name: 'SingularityNET',
      ticker: '$AGIX',
      coin_logo: 'https://github.com/TURTLdao/token-images/blob/main/aigx.png?raw=true',
      price: market_data.agix_market.price,
      marketcap: market_data.agix_market.marketcap,
      to_ada: market_data.agix_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/singularitynet',
      discord_link: 'https://discord.com/invite/snet',
      social_link_3: '',
    },
    {
      id: 1,
      name: 'SnekCoin',
      ticker: '$SNEK',
      coin_logo: 'https://github.com/TURTLdao/token-images/blob/main/snek.png?raw=true',
      price: market_data.snek_market.price,
      marketcap: market_data.snek_market.marketcap,
      to_ada: market_data.snek_market.to_ada,
      dao_support_link: '',
      twitter_link: '',
      discord_link: '',
      social_link_3: '',
    },
    {
      id: 2,
      name: 'World Mobile Token',
      ticker: '$WMT',
      coin_logo: 'https://github.com/TURTLdao/token-images/blob/main/wmt.png?raw=true',
      price: market_data.wmt_market.price,
      marketcap: market_data.wmt_market.marketcap,
      to_ada: market_data.wmt_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/wmtoken',
      discord_link: 'https://discord.gg/worldmobile',
      social_link_3: '',
    },
    {
      id: 3,
      name: 'Meld',
      ticker: '$MELD',
      coin_logo: 'https://github.com/TURTLdao/token-images/blob/main/meld.png?raw=true',
      price: market_data.meld_market.price,
      marketcap: market_data.meld_market.marketcap,
      to_ada: market_data.meld_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/MELD_Defi',
      discord_link: 'https://discord.gg/caDXKq75ys',
      social_link_3: '',
    },
    {
      id: 4,
      name: 'Minswap Token',
      ticker: '$MIN',
      coin_logo: 'https://github.com/TURTLdao/token-images/blob/main/min.png?raw=true.png',
      price: market_data.min_market.price,
      marketcap: market_data.min_market.marketcap,
      to_ada: market_data.min_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/MinswapDEX',
      discord_link: 'https://discord.gg/minswap',
      social_link_3: '',
    },
    {
      id: 5,
      name: 'AADA',
      ticker: '$AADA',
      coin_logo: 'https://github.com/TURTLdao/token-images/blob/main/aada.png?raw=true',
      price: market_data.aada_market.price,
      marketcap: market_data.aada_market.marketcap,
      to_ada: market_data.aada_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/AadaFinance',
      discord_link: 'https://discord.com/invite/zZPHeH78BE',
      social_link_3: '',
    },
  ];

  return popular_table_items;
};

export const getMemeWatchlistItems = (market_data) => {
  const meme_table_items = [
    {
      id: 0,
      name: 'SingularityNET',
      ticker: '$AGIX',
      coin_logo: '/token-images/turtl.png',
      price: 0,
      marketcap: 0,
      to_ada: 0,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/singularitynet',
      discord_link: 'https://discord.com/invite/snet',
      social_link_3: '',
    },
  ];

  return meme_table_items;
};
