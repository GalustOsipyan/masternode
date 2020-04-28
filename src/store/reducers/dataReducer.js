import StarLink from '../../assets/icons/star-icon.png';
import Twitter from '../../assets/icons/twitter-colorred-icon.png';
import Telegram from '../../assets/icons/telegram-colorred-icon.png';
import Medium from '../../assets/icons/medium-icon.png';
import Discord from '../../assets/icons/discord-icon.png';
import Altmarkets from '../../assets/icons/altmarkets-iocn.png';
import Altilly from '../../assets/icons/altilly-iocn.png';
import Crex24 from '../../assets/icons/crex24-iocn.png';
import BitcoinIconBig from '../../assets/icons/bitcoin-icon-big.png';
import BitcoinLogo from '../../assets/images/bitcoin-logo.png';

const initialState = {
  navbarData: [
    { id: 1, numberInfo: '4787', title: 'HOSTED MASTERNODES', textInfo: '2in last 24 hours' },
    { id: 2, numberInfo: '1.6M USD', title: 'TOTAL PRICE', textInfo: '221.98BTC' },
    { id: 3, numberInfo: '7.4K USD', title: 'BTC PRICE', textInfo: '1BTC' }
  ],
  currencyLogo: BitcoinLogo,
  currencyInfoListItemDataLeft: [
    { id: 1, heading: 'Coin name', text: 'Bitcoin Token BTCT' },
    { id: 2, heading: 'ROI (year)', text: '122%' },
    { id: 3, heading: 'Coins required', text: '10,000' }
  ],
  progressPercent: 50,
  currencyInfoListItemDataRight: [
    { id: 1, heading: 'Price (USD)', text: '0.01' },
    { id: 2, heading: 'Volume (USD)', text: '566.34' },
    { id: 3, heading: 'MN worth', text: '110.65' },
    { id: 4, heading: 'Network nodes', text: '345' },
    { id: 5, heading: 'Already running', text: '74' }
  ],
  currencyLogoAndName: {
    currencyLogo: BitcoinIconBig,
    currencyName: 'Bitcoin Toke',
    currencyAbbreviation: '(BTCT)',
  },
  linkTablesInfo: [
    {
      heading: 'Official Links',
      id: 1,
      linkTableBlockInfo: [
        { id: 1, icon: StarLink, text: 'Website', url: 'https://twitter.com' },
        { id: 2, icon: StarLink, text: 'ANN', url: 'https://twitter.com' },
        { id: 3, icon: StarLink, text: 'Github', url: 'https://twitter.com' },
        { id: 4, icon: StarLink, text: 'Explorer', url: 'https://twitter.com' },
      ],
    },
    {
      heading: 'Social Links',
      id: 2,
      linkTableBlockInfo: [
        { id: 1, icon: Twitter, text: 'Twitter', url: 'https://twitter.com' },
        { id: 2, icon: Telegram, text: 'Telegram', url: 'https://twitter.com' },
        { id: 3, icon: Medium, text: 'Medium', url: 'https://twitter.com' },
        { id: 4, icon: Discord, text: 'Discord', url: 'https://twitter.com' },
      ]
    },
    {
      heading: 'Exchanges Links',
      id: 3,
      linkTableBlockInfo: [
        { id: 1, icon: Altmarkets, text: 'Altmarkets', url: 'https://twitter.com' },
        { id: 2, icon: Altilly, text: 'Altilly', url: 'https://twitter.com' },
        { id: 3, icon: Crex24, text: 'Crex24', url: 'https://twitter.com' },
      ]
    }
  ],
  specificationsData: [
    {
      bigTableData: {
        id: 1,
        heading: 'Coin specifications',
      },
      specificationsDataList: [
        'Hashing algorithm',
        'Max supply',
        'Current supply',
        'Premine',
        'Block reward',
        'POS reward',
        'Block time',
        'Quark',
        '36,000,000 BTCT',
        '455,510 BTCT',
        '360,000 BTCT (1.00%)',
        '1.60 BTCT',
        '0.02 BTCT',
        '60',
      ]
    },
    {
      bigTableData: {
        id: 2,
        heading: 'Masternode Specifications',
      },
      specificationsDataList: [
        'ROI (annual)',
        'Masternode required ',
        'Masternode worth',
        'Masternode reward',
        'AVR reward frequency',
        'Active masternodes',
        'Coins Locked',
        '617%',
        '5,000 BTCT',
        '1,644.06 USD',
        '1.58 BTCT',
        '27m',
        '27',
        '135,000 BTCT (29.64%)',
      ]
    }
  ],
  rewardsData: [
    {
      id: 1, heading: 'Daily Reward',
      dataList: ['32.268908 BTCT', '0.000073 BTC', '0.503 USD']
    },
    {
      id: 2, heading: 'Weekly Reward',
      dataList: ['225.882353 BTCT', '0.000510 BTC', '3.522 USD']
    },
    {
      id: 3, heading: 'Monthly Reward',
      dataList: ['981.512605 BTCT', '0.002218 BTC', '15.304 USD']
    },
    {
      id: 4, heading: 'Yearly Reward',
      dataList: ['11,778.151261 BTCT', '0.026619 BTC', '183.647 USD']
    }
  ]
};

export default function dataReducer(state = initialState, action) {

  switch (action.type) {
    case 'ADD':
      return {
        counter: state.counter + 1
      };
    case 'SUB':
      return {
        counter: state.counter + 1
      };
    default:
      return state;
  }
}
