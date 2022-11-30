import { page } from '@/interfaces/urls';

const urls: page[] = [
  {
    provider: '정보대학',
    categoryId: 1,
    url: 'https://info.korea.ac.kr/info/board/notice_under.do',
  },
  {
    provider: '정보대학',
    categoryId: 2,
    url: 'https://info.korea.ac.kr/info/board/news.do',
  },
  {
    provider: '정보대학',
    categoryId: 3,
    url: 'https://info.korea.ac.kr/info/board/course.do',
  },
  {
    provider: '디자인조형학부',
    categoryId: 4,
    url: 'https://and.korea.ac.kr/kuand/reference/notice.do',
  }, {
    provider: '디자인조형학부',
    categoryId: 5,
    url: 'https://and.korea.ac.kr/kuand/reference/employment.do',
  },
  {
    provider: '디자인조형학부',
    categoryId: 6,
    url: 'https://and.korea.ac.kr/kuand/reference/contest.do',
  },
  {
    provider: '화학과',
    categoryId: 7,
    url: 'http://chem.korea.ac.kr/news01',
  },
];

export default urls;
