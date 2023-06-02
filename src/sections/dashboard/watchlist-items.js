
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
      discord_link: 'https://discord.gg/FNQ2BXpqkM',
      buy_link: '',
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
      discord_link: 'https://discord.gg/bBMjY3SvBr',
      buy_link: '',
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
      discord_link: 'https://discord.gg/ZnVZbmVMzr',
      buy_link: '',
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
      discord_link: 'https://discord.gg/mqNHWb7hbX',
      buy_link: '',
    },
  ];

  return dao_table_items;
};

export const getPopularWatchlistItems = (market_data) => {
  const popular_table_items = [
    {
      id: 0,
      name: 'iUSD',
      ticker: '$iUSD',
      coin_logo: ' ',
      price: market_data.iusd_market.price,
      marketcap: market_data.iusd_market.marketcap,
      to_ada: market_data.iusd_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/Indigo_protocol',
      discord_link: 'https://discord.gg/YUbduZezdP',
      buy_link: '',
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
      buy_link: '',
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
      buy_link: '',
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
      buy_link: '',
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
      buy_link: '',
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
      buy_link: '',
    },
    {
      id: 6,
      name: 'SingularityNET',
      ticker: '$AGIX',
      coin_logo: 'https://github.com/TURTLdao/token-images/blob/main/aigx.png?raw=true',
      price: market_data.agix_market.price,
      marketcap: market_data.agix_market.marketcap,
      to_ada: market_data.agix_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/singularitynet',
      discord_link: 'https://discord.com/invite/snet',
      buy_link: '',
    },
  ];
  const sortedItems = popular_table_items.sort((a, b) => b.price - a.price);

  return sortedItems;
};

export const getAllWatchlistItems = (market_data) => {
  const all_table_items = [
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
      discord_link: 'https://discord.gg/FNQ2BXpqkM',
      buy_link: '',
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
      discord_link: 'https://discord.gg/bBMjY3SvBr',
      buy_link: '',
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
      discord_link: 'https://discord.gg/ZnVZbmVMzr',
      buy_link: '',
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
      discord_link: 'https://discord.gg/mqNHWb7hbX',
      buy_link: '',
    },
    {
      id: 4,
      name: 'iUSD',
      ticker: '$iUSD',
      coin_logo: ' ',
      price: market_data.iusd_market.price,
      marketcap: market_data.iusd_market.marketcap,
      to_ada: market_data.iusd_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/Indigo_protocol',
      discord_link: 'https://discord.gg/YUbduZezdP',
      buy_link: '',
    },
    {
      id: 5,
      name: 'SnekCoin',
      ticker: '$SNEK',
      coin_logo: 'https://github.com/TURTLdao/token-images/blob/main/snek.png?raw=true',
      price: market_data.snek_market.price,
      marketcap: market_data.snek_market.marketcap,
      to_ada: market_data.snek_market.to_ada,
      dao_support_link: '',
      twitter_link: '',
      discord_link: '',
      buy_link: '',
    },
    {
      id: 6,
      name: 'World Mobile Token',
      ticker: '$WMT',
      coin_logo: 'https://github.com/TURTLdao/token-images/blob/main/wmt.png?raw=true',
      price: market_data.wmt_market.price,
      marketcap: market_data.wmt_market.marketcap,
      to_ada: market_data.wmt_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/wmtoken',
      discord_link: 'https://discord.gg/worldmobile',
      buy_link: '',
    },
    {
      id: 7,
      name: 'Meld',
      ticker: '$MELD',
      coin_logo: 'https://github.com/TURTLdao/token-images/blob/main/meld.png?raw=true',
      price: market_data.meld_market.price,
      marketcap: market_data.meld_market.marketcap,
      to_ada: market_data.meld_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/MELD_Defi',
      discord_link: 'https://discord.gg/caDXKq75ys',
      buy_link: '',
    },
    {
      id: 8,
      name: 'Minswap Token',
      ticker: '$MIN',
      coin_logo: 'https://github.com/TURTLdao/token-images/blob/main/min.png?raw=true.png',
      price: market_data.min_market.price,
      marketcap: market_data.min_market.marketcap,
      to_ada: market_data.min_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/MinswapDEX',
      discord_link: 'https://discord.gg/minswap',
      buy_link: '',
    },
    {
      id: 9,
      name: 'AADA',
      ticker: '$AADA',
      coin_logo: 'https://github.com/TURTLdao/token-images/blob/main/aada.png?raw=true',
      price: market_data.aada_market.price,
      marketcap: market_data.aada_market.marketcap,
      to_ada: market_data.aada_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/AadaFinance',
      discord_link: 'https://discord.com/invite/zZPHeH78BE',
      buy_link: '',
    },
    {
      id: 10,
      name: 'SingularityNET',
      ticker: '$AGIX',
      coin_logo: 'https://github.com/TURTLdao/token-images/blob/main/aigx.png?raw=true',
      price: market_data.agix_market.price,
      marketcap: market_data.agix_market.marketcap,
      to_ada: market_data.agix_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/singularitynet',
      discord_link: 'https://discord.com/invite/snet',
      buy_link: '',
    },
    {
      id: 11,
      name: 'HOSKY Token',
      ticker: '$HOSKY',
      coin_logo: 'https://pbs.twimg.com/profile_images/1601027808611942401/T4nLVQit_400x400.jpg',
      price: market_data.hosky_market.price,
      marketcap: market_data.hosky_market.marketcap,
      to_ada: market_data.hosky_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/singularitynet',
      discord_link: 'https://discord.com/invite/snet',
      buy_link: '',
    },
    {
      id: 12,
      name: 'Sundae',
      ticker: '$SUNDAE',
      coin_logo: 'https://github.com/TURTLdao/token-images/blob/main/aigx.png?raw=true',
      price: market_data.sundae_market.price,
      marketcap: market_data.sundae_market.marketcap,
      to_ada: market_data.sundae_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/singularitynet',
      discord_link: 'https://discord.com/invite/snet',
      buy_link: '',
    },
    {
      id: 13,
      name: 'Milk',
      ticker: '$MILK',
      coin_logo: 'https://github.com/TURTLdao/token-images/blob/main/aigx.png?raw=true',
      price: market_data.milk_market.price,
      marketcap: market_data.milk_market.marketcap,
      to_ada: market_data.milk_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/singularitynet',
      discord_link: 'https://discord.com/invite/snet',
      buy_link: '',
    },
    {
      id: 14,
      name: 'Cornucopias Token',
      ticker: '$COPI',
      coin_logo: 'https://github.com/TURTLdao/token-images/blob/main/aigx.png?raw=true',
      price: market_data.copi_market.price,
      marketcap: market_data.copi_market.marketcap,
      to_ada: market_data.copi_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/singularitynet',
      discord_link: 'https://discord.com/invite/snet',
      buy_link: '',
    },
    {
      id: 15,
      name: 'Indigo DAO Token',
      ticker: '$INDY',
      coin_logo: 'https://github.com/TURTLdao/token-images/blob/main/aigx.png?raw=true',
      price: market_data.indy_market.price,
      marketcap: market_data.indy_market.marketcap,
      to_ada: market_data.indy_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/singularitynet',
      discord_link: 'https://discord.com/invite/snet',
      buy_link: '',
    },
    {
      id: 16,
      name: 'SOCIETY',
      ticker: '$SOCIETY',
      coin_logo: 'https://github.com/TURTLdao/token-images/blob/main/aigx.png?raw=true',
      price: market_data.society_market.price,
      marketcap: market_data.society_market.marketcap,
      to_ada: market_data.society_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/singularitynet',
      discord_link: 'https://discord.com/invite/snet',
      buy_link: '',
    },
    {
      id: 17,
      name: 'Shen USD',
      ticker: '$SHEN',
      coin_logo: 'https://github.com/TURTLdao/token-images/blob/main/aigx.png?raw=true',
      price: market_data.shen_market.price,
      marketcap: market_data.shen_market.marketcap,
      to_ada: market_data.shen_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/singularitynet',
      discord_link: 'https://discord.com/invite/snet',
      buy_link: '',
    },
    {
      id: 18,
      name: 'NEWM Token',
      ticker: '$NEWM',
      coin_logo: 'https://github.com/TURTLdao/token-images/blob/main/aigx.png?raw=true',
      price: market_data.newm_market.price,
      marketcap: market_data.newm_market.marketcap,
      to_ada: market_data.newm_market.to_ada,
      dao_support_link: '',
      twitter_link: 'https://twitter.com/singularitynet',
      discord_link: 'https://discord.com/invite/snet',
      buy_link: '',
    },
  ];

  const sortedItems = all_table_items.sort((a, b) => b.price - a.price);

  return sortedItems;
};
