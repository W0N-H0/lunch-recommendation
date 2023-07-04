import axios from "axios";
import styled from "styled-components";
import Slots from "../components/Slots";
import Menu from "../components/Menu";
import MapModalSec from "../components/MapModalSec";
import React, { useRef, useState, useEffect } from "react";
//
const BackgroundImage = styled.div`
  background-image: url("/images/background-recomandation.png");
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
  .InformationText {
    margin: 10px;
  }
`;

// 상세 보기
const ViewDetails = styled.div`
  border-radius: 10px;
  border: 3px solid #000;
  height: 60px;
  width: 500px;
  background: #f2c198;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  cursor: pointer;
`;

const Recomandation = () => {
  // axios로 받은 데이터를 저장해두는 상태
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/v1/search/local.json", {
          params: {
            query: "마포구 한식 맛집",
            display: 2,
          },
          headers: {
            "X-Naver-Client-Id": "2epbJX2GaPPxglloNsL_",
            "X-Naver-Client-Secret": "FBtejVg8km",
          },
        });
        console.log(response);

        setData(response.data.items);
        console.log(data);
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        console.log(message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {data.length > 0 ? (
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
                  <LinkBar>https:// 프로젝트.참숯가마</LinkBar>
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
                {" "}
                <MapText> 지역구 보러가기 </MapText>{" "}
              </MapBtn>
            </SecondBarWrap>

            {/* 메인창 */}
            <MainWrap>
              {/* 추천 창 1 */}
              <RecomandationWrap>
                <TopWrap>
                  <h1> (추천1) {data[0].category} </h1>
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
                    (업체명) {data[0].title}{" "}
                  </h1>
                  <p className="InformationText">
                    사이트 :{" "}
                    <a target="_blank" href={data[0].link}>
                      {data[0].link}
                    </a>
                  </p>
                  <p className="InformationText">
                    (신) 주소 : {data[0].roadAddress}
                  </p>
                  <p className="InformationText">
                    (구) 주소 : {data[0].address}
                  </p>
                </InformationWrap>
                <ViewDetails>
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
                  <p className="InformationText">
                    (신) 주소 : {data[0].roadAddress}
                  </p>
                  <p className="InformationText">
                    (구) 주소 : {data[0].address}
                  </p>
                </InformationWrap>
                <ViewDetails>
                  <h1> 상세보기 </h1>
                </ViewDetails>
              </RecomandationWrap>
            </MainWrap>

            {/* 하단바 */}
            <FooterBarWrap>
              <div>
                <img src="/images/emojione-fire.png" alt="" />
              </div>
              <div>I LOVE SEOUL</div>
            </FooterBarWrap>
          </Container>
          <MapModalSec />
          <Menu />
        </BackgroundImage>
      ) : (
        <div>데이터를 불러오는 중입니다..</div>
      )}
    </>
  );
};

export default Recomandation;
