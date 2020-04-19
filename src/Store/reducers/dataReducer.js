import StarLink from '../../assets/icons/star-icon.png';
import Twitter from '../../assets/icons/twitter-colorred-icon.png';
import Telegram from '../../assets/icons/telegram-colorred-icon.png';
import Medium from '../../assets/icons/medium-icon.png';
import Discord from '../../assets/icons/discord-icon.png';
import Altmarkets from '../../assets/icons/altmarkets-iocn.png';
import Altilly from '../../assets/icons/altilly-iocn.png';
import Crex24 from '../../assets/icons/crex24-iocn.png';

const initialState = {
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
