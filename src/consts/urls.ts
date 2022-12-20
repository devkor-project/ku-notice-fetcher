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
  {
    provider: '화학과',
    categoryId: 55,
    url: 'http://chem.korea.ac.kr/news04',
  },
  {
    provider: '공과대학',
    categoryId: 10,
    url: 'https://eng.korea.ac.kr/eng/community/notice.do',
  },
  {
    provider: '공과대학',
    categoryId: 13,
    url: 'https://eng.korea.ac.kr/eng/community/webzine.do',
  },
  {
    provider: '공과대학',
    categoryId: 14,
    url: 'https://eng.korea.ac.kr/eng/community/review.do',
  },
  {
    provider: '공과대학',
    categoryId: 15,
    url: 'https://eng.korea.ac.kr/eng/community/questions.do',
  },

  {
    provider: '경영대학',
    categoryId: 16,
    url: 'https://biz.korea.ac.kr/news/notice.html?kind=10',
  },
  {
    provider: '경영대학',
    categoryId: 17,
    url: 'https://biz.korea.ac.kr/news/academic.html',
  },

  {
    provider: '의과대학',
    categoryId: 18,
    url: 'http://medicine.korea.ac.kr/web/www/-111',

  },

  {
    provider: '의과대학',
    categoryId: 19,
    url: 'http://medicine.korea.ac.kr/web/www/-112',
  },
  {
    provider: '국제대학',
    categoryId: 21,
    url: 'https://int.korea.edu/kuis/community/notice_dis.do',
  },

  {
    provider: '국제대학',
    categoryId: 22,
    url: 'https://int.korea.edu/kuis/community/notice_gsis.do',
  },

  {
    provider: '국제대학',
    categoryId: 23,
    url: 'https://int.korea.edu/kuis/community/news.do',
  },
  {
    provider: '국제대학',
    categoryId: 24,
    url: 'https://int.korea.edu/kuis/community/faculty_news.do',
  },

  {
    provider: '국제대학',
    categoryId: 25,
    url: 'https://int.korea.edu/kuis/community/optn_job.do',
  },
  {
    provider: '국제대학',
    categoryId: 26,
    url: 'https://int.korea.edu/kuis/community/optn_other.do',
  },
  {
    provider: '문과대학',
    categoryId: 27,
    url: 'https://libart.korea.ac.kr/libart/notice/notice.do',
  },
  {
    provider: '문과대학',
    categoryId: 28,
    url: 'https://libart.korea.ac.kr/libart/notice/business.do',
  },

  {
    provider: '사범대학',
    categoryId: 29,
    url: 'https://kuedu.korea.ac.kr/educa/notice/notice01.do',
  },
  {
    provider: '사범대학',
    categoryId: 30,
    url: 'https://kuedu.korea.ac.kr/educa/notice/notice02.do',
  },
  {
    provider: '사범대학',
    categoryId: 31,
    url: 'https://kuedu.korea.ac.kr/educa/notice/hire.do',
  },
  {
    provider: '미디어학부',
    categoryId: 32,
    url: 'https://mediacom.korea.ac.kr/mediacom/faculty/notice.do',
  },
  {
    provider: '미디어학부',
    categoryId: 33,
    url: 'https://mediacom.korea.ac.kr/mediacom/about/notice2.do',
  },
  {
    provider: '생명과학대학',
    categoryId: 34,
    url: 'https://lifesci.korea.ac.kr/lifesci/reference/notice.do',
  },
  {
    provider: '생명과학대학',
    categoryId: 35,
    url: 'https://lifesci.korea.ac.kr/lifesci/reference/news.do',
  },
  {
    provider: '생명과학대학',
    categoryId: 36,
    url: 'https://lifesci.korea.ac.kr/lifesci/reference/hire.do',
  },
  {
    provider: '생명과학대학',
    categoryId: 37,
    url: 'https://lifesci.korea.ac.kr/lifesci/reference/collusion.do',
  },
  {
    provider: '생명과학대학',
    categoryId: 38,
    url: 'https://lifesci.korea.ac.kr/lifesci/reference/seminar.do',
  },
  {
    provider: '간호대학',
    categoryId: 39,
    url: 'https://nursing.korea.ac.kr/nursing/community/notice.do',
  },
  {
    provider: '간호대학',
    categoryId: 40,
    url: 'https://nursing.korea.ac.kr/nursing/community/notice_under.do',
  },
  {
    provider: '간호대학',
    categoryId: 41,
    url: 'https://nursing.korea.ac.kr/nursing/community/notice_grad.do',
  },
  {
    provider: '간호대학',
    categoryId: 42,
    url: 'https://nursing.korea.ac.kr/nursing/community/job_info.do',
  },
  {
    provider: '자유전공학부',
    categoryId: 43,
    url: 'https://sis.korea.ac.kr/sis/join/notice.do',
  },
  {
    provider: '정경대학',
    categoryId: 44,
    url: 'https://hoan.korea.ac.kr/hoan/commu/notice.do',
  },

  {
    provider: '보건과학대학',
    categoryId: 45,
    url: 'https://chs.korea.ac.kr/chs/notice/notice.do',
  },
  {
    provider: '보건과학대학',
    categoryId: 46,
    url: 'https://chs.korea.ac.kr/chs/notice/notice2.do',
  },
  {
    provider: '보건과학대학',
    categoryId: 47,
    url: 'https://chs.korea.ac.kr/chs/notice/photogallery.do',
  },
  {
    provider: '보건과학대학',
    categoryId: 48,
    url: 'https://chs.korea.ac.kr/chs/for_students/infor05.do',
  },
  {
    provider: '스마트보안학부',
    categoryId: 49,
    url: 'https://gss.korea.ac.kr/ime/board/smart_notice.do',
  },
  {
    provider: '이과대학',
    categoryId: 50,
    url: 'https://science.korea.ac.kr/science/board/science/news_re.do',
  },
  {
    provider: '이과대학',
    categoryId: 51,
    url: 'https://science.korea.ac.kr/science/board/department/notice_re.do',
  },
  {
    provider: '이과대학',
    categoryId: 52,
    url: 'https://science.korea.ac.kr/science/board/graduate/notice_re.do',
  },
  {
    provider: '심리학부',
    categoryId: 53,
    url: 'https://psy.korea.ac.kr/NewsNEvent/Notice',
  },
  {
    provider: '화공생명공학과',
    categoryId: 56,
    url: 'https://cbe.korea.ac.kr/wp/%ec%84%b8%eb%af%b8%eb%82%98-%ec%95%88%eb%82%b4/%ec%b7%a8%ec%97%85%ec%a0%95%eb%b3%b4/',
  },
  {
    provider: '화공생명공학과',
    categoryId: 57,
    url: 'https://cbe.korea.ac.kr/wp/notice/',
  },
  {
    provider: '건축사회환경공학과',
    categoryId: 58,
    url: 'https://ace.korea.ac.kr/bbs/board.php?bo_table=sub5_2',
  },
  {
    provider: '건축사회환경공학과',
    categoryId: 59,
    url: 'https://ace.korea.ac.kr/bbs/board.php?bo_table=sub5_5',
  },
  {
    provider: '기계공학과',
    categoryId: 60,
    url: 'https://me.korea.ac.kr/me/news/notice.do',
  },
  {
    provider: '기계공학과',
    categoryId: 61,
    url: 'https://me.korea.ac.kr/me/news/job.do',
  },
  {
    provider: '전기전자공학부',
    categoryId: 62,
    url: 'https://ee.korea.ac.kr/community/undernotice.html',
  },
  {
    provider: '전기전자공학부',
    categoryId: 63,
    url: 'https://ee.korea.ac.kr/community/job.html',
  },
];

export default urls;
