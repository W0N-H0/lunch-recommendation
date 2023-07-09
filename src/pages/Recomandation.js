import axios from "axios";
import styled from "styled-components";
import Slots from "../components/Slots";
import Menu from "../components/Menu";
import MapModalSec from "../components/MapModalSec";
import React, { useRef, useState, useEffect } from "react";
import BlogModal from "../components/BlogModal";
import { useLocation } from "react-router-dom"; // useNavigate로 전달한 쿼리파라미터값(uri)을 사용하기 위한 훅
import "slick-carousel/slick/slick.css"; // 가로스크롤 캐러셀 구현을 위한 css
import "slick-carousel/slick/slick-theme.css"; // 가로스크롤 캐러셀 구현을 위한 css
import Slider from "react-slick"; // 가로스크롤 캐러셀 구현을 위한 컴포넌트

const BackgroundImage = styled.div`
  background-image: url("/images/racomandation.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  border-radius: 5px;
  border: 3px solid black;
  border-bottom: 0px;
  width: 1275px;
  height: 825px;
  text-align: center;
  margin: 70px auto;
  box-shadow: 5px 10px 10px 5px gray;
`;

// 상단바-1
const TopBarWrap = styled.div`
  border-bottom: 3px solid black;
  height: 7%;
  background: #ffb630;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

// 상단바-2
const SecondBarWrap = styled(TopBarWrap)`
  background: #ffd178;
  height: 5%;
`;

// 메인창
const MainWrap = styled.div`
  height: 80%;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

// 하단바
const FooterBarWrap = styled(TopBarWrap)`
  border-radius: 0px 0px 5px 5px;
  border-top: 3px solid black;
  justify-content: flex-start;
  font-size: 1.3rem;
  > div {
    margin: 0 10px 0 0;
    > img {
      width: 40px;
      height: 40px;
    }
  }
`;

const AcctionBtnWrap = styled.div`
  display: flex;
`;

const AcctionBtn = styled.button`
  background-color: transparent;
  border: none;
  margin: 10px;
  padding: 0;
  cursor: pointer;
`;

const AcctionImg = styled.img`
  width: 40px;
  height: 40px;
`;

const AcctionImgStar = styled.img`
  width: 33px;
  height: 33px;
`;

const LinkWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: -200px;
`;

const LinkBarWrap = styled.div`
  width: 600px;
  height: 40px;
  border-radius: 20px;
  border: 3px solid black;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const LinkBar = styled.p`
  font-weight: bold;
  font-size: 25px;
`;

// 지역구 보러가기 버튼
const MapBtn = styled.button`
  width: 160px;
  height: 32px;
  border-radius: 10px;
  border: 2px solid #000;
  background: white;
  margin: 0 10px;
  cursor: pointer;
`;

const MapText = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 15px;
  margin: 0;
  font-weight: bold;
`;

// 추천식당 창
const RecomandationWrap = styled.div`
  background-color: #ffe9da;
  border-radius: 25px;
  border-end-end-radius: 0px;
  border-end-start-radius: 0px;
  border: 3px solid #000;
  width: 600px;
  margin: 20px 0;
  position: relative;
`;

// 추천 음식
const TopWrap = styled.div`
  border-bottom: 3px solid #000;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  > h1 {
    font-size: 2rem;
  }
`;

// 가로스크롤
const SliderContainer = styled.div`
  margin: 10px 10px 0px 17px;
  border-radius: 10px;
  overflow: hidden;
  height: 260px;
  width: 560px;
`;

const StyledSlider = styled(Slider)`
  height: 300px;
  width: 100%;
  position: relative;

  .slick-slide div {
    //슬라이더  컨텐츠
    cursor: pointer;
  }

  .slick-list {
    background-color: #ffe9da;
  }

  .slick-slide img {
    width: 258px;
    height: 230px;
    border-radius: 10px;
    border: 3px solid black;
    // 이미지 시작점 설정을 위한 마진
    margin-left: 130px;
  }

  .slick-dots {
    bottom: 40px;
    margin: 0px;
  }
`;

const ImageContainer = styled.div`
  margin: 0px 50px 0px 50px;
`;

const Image = styled.img`
  width: 300px;
  height: 140px;
  object-fit: fill;
`;

// 추천 음식 사진
const ImgWrap = styled.div`
  height: 230px;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  > div {
    height: 230px;
    width: 270px;
    border-radius: 10px;
    border: 3px solid #000;
    background: #fba;
    > img {
      width: 270px;
      height: 230px;
      border-radius: 5px;
    }
  }
`;

// 추천 정보
const InformationWrap = styled.div`
  margin: 10px 10px 10px 10px;
  display: flex;
  flex-wrap: wrap;
  > h1 {
    font-size: 1.8rem;
    padding-bottom: 10px;
  }
  > p {
    font-size: 1.2rem;
  }
  > div {
    font-size: 1.2rem;
  }
  .InformationText {
    height: 25px;
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
    margin: 10px;
    > a {
      width: 430px;
      line-height: 1.8rem;
      margin-left: 1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      &:link {
        color: black;
      }
      &:hover {
        font-weight: bold;
      }
      &:visited {
        color: black;
      }
    }
    > span {
      color: #777;
      margin-left: 1rem;
    }
    > h4 {
      white-space: nowrap;
      font-weight: normal;
    }
  }
  .address1 {
    line-height: 1.8rem;
  }
  .address2 {
    width: 430px;
    height: 25px;
    line-height: 1.8rem;
    margin-left: 1rem;
  }
`;

// 상세 보기
const ViewDetails = styled.div`
  border-radius: 10px;
  border: 3px solid #000;
  height: 60px;
  width: 500px;
  background: #f2c198;
  position: absolute;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 47px 20px 47px;
  cursor: pointer;
`;

const Recomandation = () => {
  // axios로 받은 검색 데이터를 저장해두는 상태
  const [data, setData] = useState([]);
  // 검색결과 데이터중 1번째 추천음식점 이미지를 저장해두는 useState
  const [image1, setImage1] = useState([]);
  // 검색결과 데이터중 2번째 추천음식점 이미지를 저장해두는 useState
  const [image2, setImage2] = useState([]);
  // useNavigate로 전달한 쿼리파라미터의 값(uri)의 값을 활용하기 위한 변수선언
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const food = searchParams.get("food");
  const inputValue = searchParams.get("inputValue");

  // 검색결과 5개중 랜덤으로 2개를 뽑기 위한 함수
  const getRandomItems = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/v1/search/local.json", {
          params: {
            query: `${inputValue} ${food} `,
            display: 5,
          },
          headers: {
            "X-Naver-Client-Id": "2epbJX2GaPPxglloNsL_",
            "X-Naver-Client-Secret": "FBtejVg8km",
          },
        });
        const randomItems = getRandomItems(response.data.items, 2);

        // 받아온 데이터의 일부 title가 <b>,</b>를 포함하기에, 해당 값을 제거하기 위한 코드
        console.log(response);
        const modifiedItems = randomItems.map((item) => {
          let str = item.title;
          str = str.replace(/<\/?b>/g, "");
          return { ...item, title: str };
        });
        setData(modifiedItems);
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        console.log(message);
      }
    };

    fetchData();
  }, []);

  // 이미지를 받아오는 API의 쿼리에 검색 API결과가 필요하기 때문에,
  // 검색 API가 실행된 후 실행하기 위해 data(검색api 결과)가 변동이 있을때 이미지 API실행
  useEffect(() => {
    // 첫번째(data[0] 검색결과 이미지를 받아오는 API
    const imageData1 = async () => {
      try {
        const response = await axios.get("/v1/search/image", {
          params: {
            query: `${data[0].title}${food}`,
            display: 100,
          },
          headers: {
            "X-Naver-Client-Id": "2epbJX2GaPPxglloNsL_",
            "X-Naver-Client-Secret": "FBtejVg8km",
          },
        });
        console.log(response);

        setImage1(response.data.items);
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        console.log(message);
      }
    };

    // 두번째(data[1] 검색결과 이미지를 받아오는 API
    const imageData2 = async () => {
      try {
        const response = await axios.get("/v1/search/image", {
          params: {
            query: `${data[1].title}${food}`,
            display: 100,
          },
          headers: {
            "X-Naver-Client-Id": "2epbJX2GaPPxglloNsL_",
            "X-Naver-Client-Secret": "FBtejVg8km",
          },
        });
        console.log(response);

        setImage2(response.data.items);
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        console.log(message);
      }
    };

    imageData1();
    imageData2();
  }, [data]);

  // 첫번째 음식점 블로그 api받아오는 코드
  const [blogData1, setblogData1] = useState();
  useEffect(() => {
    const fetchblogData1 = async () => {
      try {
        const response = await axios.get("/v1/search/blog.json", {
          params: {
            query: `${data[0].title} 내돈내산`,
            display: 4,
          },
          headers: {
            "X-Naver-Client-Id": "2epbJX2GaPPxglloNsL_",
            "X-Naver-Client-Secret": "FBtejVg8km",
          },
        });
        // title <br>,</br> 문자열 필터링 로직 추가
        const responseData = response.data.items.map((item) => {
          let str = item.title;
          str = str.replace(/<\/?b>/g, "");
          return { ...item, title: str };
        });

        setblogData1(responseData);
        console.log(response);
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        console.log(message);
      }
    };

    fetchblogData1();
  }, [image1]);

  // 두번째 음식점 블로그 api받아오는 코드
  const [blogData2, setblogData2] = useState();
  useEffect(() => {
    const fetchblogData2 = async () => {
      try {
        const response = await axios.get("/v1/search/blog.json", {
          params: {
            query: `${data[1].title} 내돈내산`,
            display: 4,
          },
          headers: {
            "X-Naver-Client-Id": "2epbJX2GaPPxglloNsL_",
            "X-Naver-Client-Secret": "FBtejVg8km",
          },
        });

        // title <br>,</br> 문자열 필터링 로직 추가
        const responseData = response.data.items.map((item) => {
          let str = item.title;
          str = str.replace(/<\/?b>/g, "");
          return { ...item, title: str };
        });

        setblogData2(responseData);
        console.log(response);
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        console.log(message);
      }
    };

    fetchblogData2();
  }, [image2]);

  // 지역구 모달창
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // 상세보기 음식점1 모달창
  const [showReview, setShowReview] = useState(false);
  // 상세보기 음식점2 모달창
  const [showReview2, setShowReview2] = useState(false);

  const [selectedModalIndex, setSelectedModalIndex] = useState(null);

  const openReview = (index) => {
    if (index === 0) {
      setShowReview(true);
    } else if (index === 1) {
      setShowReview2(true);
    }
    setSelectedModalIndex(index);
  };

  const closeReview = () => {
    setShowReview(false);
    setShowReview2(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1.6,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    cssEase: "linear",
    autoplay: true,
    pauseOnHover: true,
  };

  return (
    <>
      {/* 데이터 불러오기전 분기*/}
      {data.length > 0 && image1.length > 0 ? (
        <BackgroundImage>
          <Container>
            {/* 상단바-1 */}
            <TopBarWrap>
              {/* 동작 버튼 */}
              <AcctionBtnWrap>
                {/* 방향키 */}
                <AcctionBtn>
                  <AcctionImg src="/images/left-btn.png" alt="back button" />
                </AcctionBtn>
                <AcctionBtn>
                  <AcctionImg src="/images/right-btn.png" alt="next button" />
                </AcctionBtn>
              </AcctionBtnWrap>

              {/* 링크 느낌 구현 */}
              <LinkWrap>
                <LinkBarWrap>
                  <LinkBar>
                    https:// 프로젝트.참숯가마/{inputValue}_{food}_추천
                  </LinkBar>
                  <AcctionImgStar src="/images/star.png" alt="bookmark" />
                </LinkBarWrap>

                <AcctionBtn>
                  <AcctionImg src="/images/btn.png" alt="reflash button" />
                </AcctionBtn>
              </LinkWrap>

              {/* 동작 버튼 */}
              <AcctionBtnWrap>
                <AcctionBtn>
                  <AcctionImg src="/images/hide-btn.png" alt="hide button" />
                </AcctionBtn>
                <AcctionBtn>
                  <AcctionImg src="/images/close-btn.png " alt="close button" />
                </AcctionBtn>
              </AcctionBtnWrap>
            </TopBarWrap>

            {/* 상단바-2 */}
            <SecondBarWrap>
              <MapBtn>
                <MapText onClick={openModal}> 지역구 보러가기 </MapText>
              </MapBtn>
            </SecondBarWrap>

            {/* 모달창 띄우는 곳*/}
            {showModal ? (
              <MapModalSec openModal={openModal} closeModal={closeModal} />
            ) : (
              ""
            )}

            {/* 메인창 */}
            <MainWrap>
              {/* 추천 창 1 */}
              {data.map((recommendation, index) => (
                <RecomandationWrap key={index}>
                  <TopWrap>
                    <h1>
                      (추천 {index + 1}) {recommendation.category}
                    </h1>
                  </TopWrap>
                  <SliderContainer>
                    <StyledSlider {...settings}>
                      {/* 100개의 사진data중에서 정상적인 사진을 추출하기 위해 "맛집" 키워드로 필터링 */}
                      {/*.filter((item) => item.title.includes("맛집")) 필터 적용할까말까*/}
                      {index === 0 &&
                        image1
                          .filter((item) => item.title.includes("맛집"))
                          .filter((item) => !item.thumbnail.includes("output"))
                          .slice(0, 5)
                          .map((item, index) => (
                            <div key={index}>
                              <img src={item.thumbnail} alt="Thumbnail" />
                            </div>
                          ))}

                      {/* 2번째 음식점 사진 랜더링 */}
                      {index === 1 &&
                        image2
                          .filter((item) => item.title.includes("맛집"))
                          .filter((item) => !item.thumbnail.includes("output"))
                          .slice(0, 5)
                          .map((item, index) => (
                            <div key={index}>
                              <img src={item.thumbnail} alt="Thumbnail" />
                            </div>
                          ))}
                    </StyledSlider>
                  </SliderContainer>

                  <InformationWrap>
                    <h1 className="InformationText">
                      {" "}
                      {recommendation.title}{" "}
                    </h1>
                    <p className="InformationText">
                      <h4>사이트 :</h4>
                      {recommendation.link ? (
                        <a target="_blank" href={recommendation.link}>
                          {recommendation.link}
                        </a>
                      ) : (
                        <span>
                          {recommendation.title}은 사이트를 제공하고 있지
                          않습니다.
                        </span>
                      )}
                    </p>
                    <div className="InformationText">
                      <div className="address1">주소 :</div>{" "}
                      <div className="address2">
                        {recommendation.roadAddress}
                      </div>
                    </div>
                  </InformationWrap>

                  <ViewDetails
                    onClick={() => {
                      openReview(index);
                    }}
                  >
                    <h1> 상세보기 </h1>
                  </ViewDetails>

                  {/* 상세보기 띄우는 곳*/}
                  {showReview || showReview2 ? (
                    <BlogModal
                      openReview={openReview}
                      closeReview={closeReview}
                      blogData1={blogData1}
                      blogData2={blogData2}
                      data={data}
                      selectedModalIndex={selectedModalIndex}
                    />
                  ) : (
                    ""
                  )}
                </RecomandationWrap>
              ))}
            </MainWrap>

            {/* 메인창 끝 */}

            {/* 하단바 */}
            <FooterBarWrap>
              <div>
                <img src="/images/emojione-fire.png" alt="" />
              </div>
              <div>I LOVE SEOUL</div>
            </FooterBarWrap>
          </Container>
          {/* <BlogModal /> */}

          <Menu />
        </BackgroundImage>
      ) : (
        <div>데이터를 불러오는 중입니다..</div>
      )}
    </>
  );
};

export default Recomandation;
