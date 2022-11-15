import { page } from '@/interfaces/urls';

const urls: page[] = [
  {
    provider: 'info',
    categoryId: 1,
    url: 'https://info.korea.ac.kr/info/board/notice_under.do',
  },
  {
    provider: 'info',
    categoryId: 2,
    url: 'https://info.korea.ac.kr/info/board/news.do',
  },
  {
    provider: 'info',
    categoryId: 3,
    url: 'https://info.korea.ac.kr/info/board/course.do',
  },
  {
    provider: 'and',
    categoryId: 4,
    url: 'https://and.korea.ac.kr/kuand/reference/notice.do',
  }, {
    provider: 'and',
    categoryId: 5,
    url: 'https://and.korea.ac.kr/kuand/reference/employment.do',
  },
  {
    provider: 'and',
    categoryId: 6,
    url: 'https://and.korea.ac.kr/kuand/reference/contest.do',
  },
  {
    provider: 'chem',
    categoryId: 7,
    url: 'http://chem.korea.ac.kr/news01',
  },
];

export default urls;
