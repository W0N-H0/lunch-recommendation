import axios from "axios";
import styled from "styled-components";
import Slots from "../components/Slots";
import Menu from "../components/Menu";
import MapModalSec from "../components/MapModalSec";
import React, { useRef, useState, useEffect } from "react";
import BlogModal from "../components/BlogModal";
import { useLocation } from "react-router-dom"; // useNavigate로 전달한 쿼리파라미터값(uri)을 사용하기 위한 훅
//
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
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    margin: 10px;
  }
  .address1 {
    width: 110px;
    line-height: 1.8rem;
  }
  .address2 {
    width: 430px;
    line-height: 1.8rem;
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
  // axios로 받은 데이터를 저장해두는 상태
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  // useNavigate로 전달한 쿼리파라미터의 값(uri)의 값을 활용하기 위한 변수선언
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const food = searchParams.get("food");
  const inputValue = searchParams.get("inputValue");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/v1/search/local.json", {
          params: {
            query: `${inputValue} ${food} 맛집`,
            display: 2,
          },
          headers: {
            "X-Naver-Client-Id": "2epbJX2GaPPxglloNsL_",
            "X-Naver-Client-Secret": "FBtejVg8km",
          },
        });
        console.log(response);

        setData(response.data.items);
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
    // 이미지를 받아오는 API
    const fetchData2 = async () => {
      try {
        const response = await axios.get("/v1/search/image", {
          params: {
            query: `${data[0].title} 음식`,
            display: 4,
          },
          headers: {
            "X-Naver-Client-Id": "2epbJX2GaPPxglloNsL_",
            "X-Naver-Client-Secret": "FBtejVg8km",
          },
        });
        console.log(response);
        setImage(response.data.items);
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        console.log(message);
      }
    };

    fetchData2();
  }, [data]);

  // 지역구 모달창
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // 상세보기 모달창
  const [showReview, setShowReview] = useState(false);

  const openReview = () => {
    setShowReview(true);
  };

  const closeReview = () => {
    setShowReview(false);
  };

  return (
    <>
      {/* 데이터 불러오기전 분기*/}
      {data.length > 0 && image.length > 0 ? (
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
              <RecomandationWrap>
                <TopWrap>
                  <h1> (추천1) {data[0].category} </h1>
                </TopWrap>

                <ImgWrap>
                  {/* [API] 식당이미지 슬라이드 */}

                  <div>
                    <img src={image[0].thumbnail} alt="Thumbnail" />
                  </div>
                  <div>
                    <img src={image[1].thumbnail} alt="Thumbnail" />
                  </div>

                  {/* <div>  [API] 식당이미지3 </div>
                <div>  [API] 식당이미지4  </div> */}
                </ImgWrap>

                <InformationWrap>
                  <h1 className="InformationText">
                    {" "}
                    (업체명) {data[0].title}{" "}
                  </h1>
                  <p className="InformationText">
                    사이트 :{" "}
                    <a target="_blank" href={data[0].link}>
                      {data[0].link}
                    </a>
                  </p>
                  <div className="InformationText">
                    <div className="address1">(신) 주소 :</div>{" "}
                    <div className="address2">{data[0].roadAddress}</div>
                  </div>
                </InformationWrap>
                <ViewDetails onClick={openReview}>
                  <h1> 상세보기 </h1>
                </ViewDetails>
              </RecomandationWrap>

              {/* 추천 창 2 */}
              <RecomandationWrap>
                <TopWrap>
                  <h1> (추천2) {data[1].category} </h1>
                </TopWrap>

                <ImgWrap>
                  {/* [API] 식당이미지 슬라이드 */}

                  <div>{/* [API] 식당이미지1 */}</div>
                  <div>{/* [API] 식당이미지2 */}</div>

                  {/* <div>  [API] 식당이미지3 </div>
                <div>  [API] 식당이미지4  </div> */}
                </ImgWrap>

                <InformationWrap>
                  <h1 className="InformationText">
                    {" "}
                    (업체명) {data[1].title}{" "}
                  </h1>
                  <p className="InformationText">
                    사이트 :{" "}
                    <a target="_blank" href={data[1].link}>
                      {data[1].link}
                    </a>
                  </p>
                  <div className="InformationText">
                    <div className="address1">(신) 주소 :</div>{" "}
                    <div className="address2">{data[1].roadAddress}</div>
                  </div>
                </InformationWrap>
                <ViewDetails onClick={openReview}>
                  <h1> 상세보기 </h1>
                </ViewDetails>
              </RecomandationWrap>

              {/* 상세보기 띄우는 곳*/}
              {showReview ? (
                <BlogModal openReview={openReview} closeReview={closeReview} />
              ) : (
                ""
              )}
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
