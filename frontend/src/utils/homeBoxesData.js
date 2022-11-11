import { blue, white } from '../theme/colors';

export const homeBoxesDataOwlets = [
  {
    title: 'Articles',
    image: require('../assets/homework.png'),
    id: 'article',
    route: 'articles',
    textColor: blue,
    backgroundColor: '#A4E5EE',
  },
  { title: 'Activities', image: require('../assets/draw.png'), id: 'activity', textColor: white,  backgroundColor: '#EF5C62' },
  {
    title: 'Dictionary',
    image: require('../assets/dictionary.png'),
    id: 'dictionary',
    textColor: '#A4E5EE',
    backgroundColor: '#156081',
  },
  {
    title: 'Be a writer',
    image: require('../assets/studySet.png'),
    id: 'writer',
    textColor: '#156081',
    backgroundColor: '#FDC453',
  },
]

export const homeBoxesDataOwls = [
  {
    image: require('../assets/articlesOwls.png'),
    id: 'article',
    route: 'articles',
  },
  { image: require('../assets/activitiesOwls.png'), id: 'activity' },
  {
    image: require('../assets/dictionaryOwls.png'),
    id: 'dictionary',
  },
  {
    image: require('../assets/writerOwls.png'),
    id: 'writer',
  },
]