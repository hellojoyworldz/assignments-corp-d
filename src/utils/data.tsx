import {
  ProfileCardItemProps,
  CityCardItemProps,
  CommonFilterDataProps,
} from './types'

export const profileItemData: ProfileCardItemProps[] = [
  {
    id: 1,
    title: 'Sed ut perspiciatis',
    contents:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.',
    imgPath: '/images/profile01.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor',
    contents:
      'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.',
    imgPath: '/images/profile02.jpg',
    imgAlt: 'Lore photo',
    link: '#',
  },
  {
    id: 3,
    title: 'Nemo enim ipsam',
    contents:
      'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.',
    imgPath: '/images/profile03.jpg',
    imgAlt: 'Nemo photo',
    link: '#',
  },
]

export const CityContinentFilterData: CommonFilterDataProps[] = [
  { id: 0, value: 'All' },
  { id: 1, value: 'Asia' },
  { id: 2, value: 'europe' },
  { id: 3, value: 'ameria' },
  { id: 4, value: 'oceania' },
]

export const CityRangeYearFilterData: CommonFilterDataProps[] = [
  { id: 1, value: 1000 },
  { id: 2, value: 1300 },
  { id: 3, value: 1700 },
  { id: 4, value: 2000 },
]

export const cityCardData: CityCardItemProps[] = [
  {
    id: 1,
    year: 1173,
    continentId: 2,
    continent: 'Europe',
    country: 'Italy',
    city: 'Pica',
    contents:
      "The Leaning Tower of Pisa, or simply the Tower of Pisa (torre di Pisa), is the campanile, or freestanding bell tower, of Pisa Cathedral. It is known for its nearly four-degree lean, the result of an unstable foundation. The tower is one of three structures in the Pisa's Cathedral Square (Piazza del Duomo), which includes the cathedral and Pisa Baptistry.",
    imgPath: '/images/city01.jpg',
    imgAlt: 'Pica photo',
  },
  {
    id: 2,
    year: 1882,
    continentId: 2,
    continent: 'Europe',
    country: 'Spain',
    city: 'Sagrada Família',
    contents:
      'The Basílica i Temple Expiatori de la Sagrada Família, otherwise known as Sagrada Família, is a church under construction in the Eixample district of Barcelona, Catalonia, Spain. It is the largest unfinished Catholic church in the world. Designed by Catalan architect Antoni Gaudí (1852–1926), in 2005 his work on Sagrada Família was added to an existing (1984) UNESCO World Heritage Site, "Works of Antoni Gaudí". On 7 November 2010, Pope Benedict XVI consecrated the church and proclaimed it a minor basilica.',
    imgPath: '/images/city02.jpg',
  },
  {
    id: 3,
    year: 1935,
    continentId: 3,
    continent: 'America',
    country: 'US',
    city: 'Fallingwater',
    contents:
      "Fallingwater is a house designed by the architect Frank Lloyd Wright in 1935. Situated in the Mill Run section of Stewart township, in the Laurel Highlands of southwest Pennsylvania, about 70 miles (110 km) southeast of Pittsburgh in the United States, it is built partly over a waterfall on the Bear Run river. The house was designed to serve as a weekend retreat for Liliane and Edgar J. Kaufmann, the owner of Pittsburgh's Kaufmann's Department Store.",
    imgPath: '/images/city03.jpg',
    imgAlt: 'Fallingwater',
  },
  {
    id: 4,
    year: 1173,
    continentId: 2,
    continent: 'Europe',
    country: 'Russia',
    city: "Saint Basil's Cathedral",
    contents:
      "The Cathedral of Vasily the Blessed (Russian: Собор Василия Блаженного, romanized: Sobor Vasiliya Blazhennogo), known in English as Saint Basil's Cathedral, is an Orthodox church in Red Square of Moscow, and is one of the most popular cultural symbols of Russia.",
    imgPath: '/images/city04.jpg',
    imgAlt: 'Russia',
  },
  {
    id: 5,
    year: 1968,
    continentId: 4,
    continent: 'Oceania',
    country: 'NewZealand',
    city: 'Aucklan',
    contents:
      "The Cathedral of Vasily the Blessed (Russian: Собор Василия Блаженного, romanized: Sobor Vasiliya Blazhennogo), known in English as Saint Basil's Cathedral, is an Orthodox church in Red Square of Moscow, and is one of the most popular cultural symbols of Russia.",
    imgPath: '',
    imgAlt: '',
  },
]
