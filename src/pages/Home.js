import React from 'react';
import CardComponent from '../components/CardComponent';
import './Home.css';
import Slider from '../components/Slider';
import cardItemImage1_1 from '../images/best-1.jpg';
import cardItemImage1_2 from '../images/best-2.jpg';
import cardItemImage1_3 from '../images/best-3.jpg';
import cardItemImage1_4 from '../images/best-4.jpg';
import cardItemImage2_1 from '../images/online-1.jpg';
import cardItemImage2_2 from '../images/online-2.jpg';
import cardItemImage2_3 from '../images/online-3.jpg';
import cardItemImage2_4 from '../images/online-4.jpg';
import cardItemImage3_1 from '../images/thum-1-1.png';
import cardItemImage3_2 from '../images/thum-1-2.png';
import cardItemImage3_3 from '../images/thum-1-3.jpg';
import cardItemImage3_4 from '../images/thum-1-4.png';
import cardItemImage4_1 from '../images/thum-2-1.png';
import cardItemImage4_2 from '../images/thum-2-2.png';
import cardItemImage4_3 from '../images/thum-2-3.png';
import cardItemImage4_4 from '../images/thum-2-4.png';

const Home = () => {

  const cardContent1 = {
    isBest : false,
    title : "이번주 베스트셀링 강의",
    cardItem : [
      {
        img : cardItemImage1_1,
        category : [
          '평생소장',
          '용호수',
          '사전예약'
        ],
        itemTitle : "한번에 끝내는 영상 촬영과 편집 초격차 패키지 Online.",
        itemText : "기획/촬영부터 편집까지 한번에 끝내는 영상 제작 마스터 클래스"
      },
      {
        img : cardItemImage1_2,
        category : [
          '평생소장',
          '전체오픈',
          '채널관리'
        ],
        itemTitle : "디지털 마케팅 MAX 올인원 패키지 Online.",
        itemText : "디지털 마케팅 기초부터 실전까지! 온라인으로 만나보세요"
      },
      {
        img : cardItemImage1_3,
        category : [
          '프론트엔드',
          '백엔드',
          '풀스택'
        ],
        itemTitle : "풀스택 개발 취업완성 스쿨",
        itemText : "스쿨 중에서도 가장 많은 전문가 인력이 함께하는 강의! 비전공자도 프론트엔드, 백엔드 모두 이해하는 개발자가 되도록 10명의 전문가들이 함께 합니다. 6개월간 컴퓨터 사이언스는 기본으로, HTML/CSS, JavaScript부터 Python으로 배우는 백엔드까지. 확실하게 배워 바로 실무에 투입되어도 문제 없는 신입 개발자로 성장해보세요."
      },
      {
        img : cardItemImage1_4,
        category : [
          '1:1관리',
          '매주환급',
          '데이터사이언스'
        ],
        itemTitle : "데이터 사이언스 온라인 완주반 6기",
        itemText : "데이터 사이언스 독학하는 당신에게 딱 맞는 강의. 실제 취업반에서 듣는 퀄리티 높은 강의에 1:1 과외같은 밀착케어까지!"
      }
    ]
  };

  const cardContent2 = {
    isBest : false,
    title : "온라인 완주반",
    cardItem : [
      {
        img : cardItemImage2_1,
        category : [
          "1:1질문답변",
          "학습상담",
          "매주환급"
        ],
        itemTitle : "엑셀+데이터분석 온라인 완주반",
        itemText : "엑셀 독학하는 당신에게 딱 맞는 27일 엑셀 온라인 완주반! 10년+ 엑셀/데이터 분석 전문가의 1:1 밀착케어로 완성하는 실무 엑셀 + 데이터 분석 스킬!"
      },
      {
        img : cardItemImage2_2,
        category : [
          '제품디자인',
          '라이노',
          '키샷'
        ],
        itemTitle : "제품 디자인 포트폴리오 온라인 완주반 1기",
        itemText : "업계 최고 제품 디자이너의 실무 프로세스, 내 포트폴리오에 담아내기!"
      },
      {
        img : cardItemImage2_3,
        category : [
          "1:1관리",
          "매주환급",
          "이모티콘"
        ],
        itemTitle : "승인받는 이모티콘 만들기 온라인 완주반",
        itemText : "이모티콘은 누구나 만들 수 있지만 승인받는 이모티콘은 아무나 만들 수 없습니다. 카카오톡 이모티콘 14개 승인! 작가님과 함께하는 내 이모티콘으로 수익창출!"
      },
      {
        img : cardItemImage2_4,
        category : [
          '1:1컨설팅',
          '매주환급',
          '인스타그램'
        ],
        itemTitle : "인스타그램 정복! 우리 가게 매출 늘리기 온라인 완주반",
        itemText : "인스타그램 월간 사용자 10억명! 똑같은 운영법으로는 계정 키우기 힘들어요! 업종 별, 개인의 상황에 딱-맞는 맞춤 인스타그램 계정"
      }
    ]
  };

  const cardContent3 = {
    isBest : false,
    title : "마케팅/크리에이티브/파이낸스 인기강의",
    cardItem : [
      {
        img : cardItemImage3_1,
        category : [
          "평생소장",
          "권오상",
          "재무제표"
        ],
        itemTitle : "권오상의 금융 아카데미 - 재무제표 분석 기초",
        itemText : "온라인 최초공개 CPA/CFA 스타강사 권오상 회계사가 전하는 진짜 실무이야기"
      },
      {
        img : cardItemImage3_2,
        category : [
          '평생소장',
          'UX',
          'UI'
        ],
        itemTitle : "한번에 끝내는 UX/UI 디자인 초격차 패키지 Online.",
        itemText : "이론과 실무 프로세스를 통한 UX 디자인부터 스케치와 어도비XD 등 클론디자인 학습을 통한 UI 디자인까지"
      },
      {
        img : cardItemImage3_3,
        category : [
          '평생소장',
          '사전예약',
          'PPT'
        ],
        itemTitle : "100억을 움직이는 단 10장의 PPT Online.",
        itemText : "이노션 출신 기획자의 통하는 PPT! 10시간으로 기획부터 디자인, 스피치까지 프레젠테이션 마스터!"
      },
      {
        img : cardItemImage3_4,
        category : [
          '평생소장',
          '엑셀마스터',
          '사전예약'
        ],
        itemTitle : "한 번에 끝내는 엑셀 실무 초격차 패키지 Online.",
        itemText : "엑셀 강의 + 1,135개 엑셀 서식 및 디자인 템플릿 무료 | 엑셀 쌩기초부터 고급 기능까지"
      }
    ]
  };

  const cardContent4 = {
    isBest : false,
    title : "프로그래밍/데이터 사이언스 인기강의",
    cardItem : [
      {
        img : cardItemImage4_1,
        category : [
          '평생소장',
          '카이스트공익',
          '전체오픈'
        ],
        itemTitle : "6개월 치 업무를 하루 만에 끝내는 업무자동화",
        itemText : "대한민국 직장인, 개인 사업자 여러분! 오늘도 귀찮은 반복 업무에 스트레스 받으셨나요? 6개월 치 업무를 하루 만에 끝낸 '카이스트 공익'이 여러분의 칼퇴를 도와 드립니다! 여러 정부기관과 기업체 자문 경험을 토대로, 예제를 따라만 하면 업무를 자동화할 수 있는 강의를 준비했습니다. By 반병현"
      },
      {
        img : cardItemImage4_2,
        category : [
          '평생소장',
          '전체오픈',
          '파이썬'
        ],
        itemTitle : "파이썬 웹 개발 올인원 패키지 Online.",
        itemText : "배우기도 쉬운데, 실무 활용도까지 높은 파이썬, 기본문법부터 실무 예제까지! 온라인 강의로 시작하세요!"
      },
      {
        img : cardItemImage4_3,
        category : [
          '평생소장',
          '쇼핑몰데이터',
          '전체오픈'
        ],
        itemTitle : "파이썬을 활용한 이커머스 데이터 분석 올인원 패키지 Online.",
        itemText : "이커머스 데이터를 활용해 데이터 분석을 배우고, 실제 서비스에 적용하여 매출을 높이는 의사결정을 할 수 있습니다."
      },
      {
        img : cardItemImage4_4,
        category : [
          '평생소장',
          '논문리뷰',
          '2차오픈'
        ],
        itemTitle : "딥러닝을 활용한 추천시스템 구현 올인원 패키지 Online.",
        itemText : "알고리즘, 머신러닝/딥러닝, 논문리뷰, 데이터 실습, 성능평가까지 현업 프로세스에 필요한 추천시스템의 A to Z"
      }
    ]
  };


  return (
    <main>
        <Slider />
        <section className="content-section">
          <CardComponent contentData={cardContent1} />
          {/* <SideBanner1 /> */}
          <CardComponent contentData={cardContent2} />
          <CardComponent contentData={cardContent3} />
          <CardComponent contentData={cardContent4} />
          {/* <SideBanner2 /> */}
        </section>
    </main>
  )
}

export default Home;
