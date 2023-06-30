import styled from "styled-components";
import Slots from "../components/Slots";
import React, { useRef, useState, useEffect } from "react";
import koreanFood1 from "../img/koreanFood1.png";
import koreanFood2 from "../img/koreanFood2.png";
import koreanFood3 from "../img/koreanFood3.png";
import chineseFood1 from "../img/chineseFood1.png";
import chineseFood2 from "../img/chineseFood2.png";
import chineseFood3 from "../img/chineseFood3.png";
import westernFood1 from "../img/westernFood1.png";
import westernFood2 from "../img/westernFood2.png";
import westernFood3 from "../img/westernFood3.png";
import japaneseFood1 from "../img/japaneseFood1.png";
import japaneseFood2 from "../img/japaneseFood2.png";
import japaneseFood3 from "../img/japaneseFood3.png";
import schoolFood1 from "../img/schoolFood1.png";
import schoolFood2 from "../img/schoolFood2.png";
import schoolFood3 from "../img/schoolFood3.png";
import MapModalFir from "../components/MapModalFirst";
import MainModal from "../components/MainModal";

const deselectedOptions = [
  "강남구",
  "강동구",
  "강북구",
  "강서구",
  "관악구",
  "광진구",
  "구로구",
  "금천구",
  "노원구",
  "도봉구",
  "동대문구",
  "동작구",
  "마포구",
  "서대문구",
  "서초구",
  "성동구",
  "성북구",
  "송파구",
  "양천구",
  "영등포구",
  "용산구",
  "은평구",
  "종로구",
  "중구",
  "중랑구",
];

// 배경화면
const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/images/unnamed.png");
  background-size: cover;
`;

// [전체]홈페이지창
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
  background: #ea8573;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

// 상단바-2
const SecondBarWrap = styled(TopBarWrap)`
  height: 5%;
`;

// 메인창
const MainWrap = styled.div`
  height: 80%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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
`;

const MapText = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 15px;
  margin: 0;
  font-weight: bold;
  cursor: pointer;
`;

const MainTitle = styled.div`
  width: 1000px;
  height: 150px;
  border-radius: 15px;
  border: 3px solid black;
  background: linear-gradient(
      177deg,
      rgba(255, 39, 0, 0.38) 0%,
      rgba(234, 133, 115, 0) 100%
    ),
    #fff2e9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 30px;
`;

const MainTitleText = styled.h1`
  font-size: 50px;
  margin: 0;
  color: white;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
`;

const SuvTitleText = styled(MainTitleText)`
  color: #777;
  font-size: 20px;
  text-shadow: none;
`;

// 메인 창 하단 게임 부분
const MainGame = styled(MainTitle)`
  height: 430px;
  background: #fbe1d2;
`;

// 룰렛 작동 창 테두리
const GameWrap = styled.div`
  width: 900px;
  height: 250px;
  border-radius: 10px;
  border: 3px solid black;
  background: #ffebe7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

// 룰렛 작동 창
const RouletteWrap = styled.div`
  width: 800px;
  height: 200px;
  border: 3px solid black;
  background-color: white;
  border-radius: 10px;
`;

const CoinImgLeft = styled.img`
  position: absolute;
  left: 25px;
  top: 40%;
`;
const CoinImgRight = styled.img`
  position: absolute;
  right: 25px;
  top: 40%;
`;

// 게임 시작
const StartClick = styled.button`
  width: 250px;
  height: 125px;
  background-color: #f9b2a6;
  border: 3px solid black;
  border-radius: 10px;
`;
const StartText = styled.p`
  color: black;
  text-align: center;
  font-size: 40px;
  letter-spacing: 5px;
  margin: 0;
`;

//지역 선택
const MapModal = styled.div`
  width: 250px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid #000;
  background: #fff2e9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 메인 창 하단 버튼 부분
const MainGameBtnWram = styled.div`
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Main = () => {
  const [food1, setFood1] = useState(koreanFood1);
  const [food2, setFood2] = useState(koreanFood2);
  const [food3, setFood3] = useState(koreanFood3);
  // 슬롯이 다 돌아갔는지를 알려주는 useState
  const [result, setResult] = useState(0);

  // 클릭시 result값을 false로 바꿔줌
  const handleClick = () => {
    setResult(false);
    console.log("Result:", result);
  };

  const handleSlotFinish = () => {
    // 슬롯이 다 돌아갔을때, food1과 result 상태를 불러올수 있는 함수
    setResult(true);
    // console.log("Food1:", food1);
    console.log("Result:", result);
  };

  // // 지역구 모달창
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // 자동완성 구현
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(deselectedOptions);

  return (
    <>
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
              <MapText onClick={openModal}> 지역구 보러가기 </MapText>
            </MapBtn>
          </SecondBarWrap>

          {/* 모달창 띄우는 곳*/}
          {showModal ? (
            <MapModalFir openModal={openModal} closeModal={closeModal} />
          ) : (
            ""
          )}

          {/* 메인창 */}
          <MainWrap>
            {/* 타이틀 */}
            <MainTitle>
              <MainTitleText> 오늘 점심 뭐 먹지? </MainTitleText>
              <SuvTitleText> 서울시 점메추 룰렛 </SuvTitleText>
            </MainTitle>

            {/* 게임 */}
            <Slots
              food1={food1}
              food2={food2}
              food3={food3}
              setFood1={setFood1}
              setFood2={setFood2}
              setFood3={setFood3}
              onClick={handleClick}
              onSlotFinish={handleSlotFinish}
              setResult={setResult}
              inputValue={inputValue}
              setInputValue={setInputValue}
              options={options}
              setOptions={setOptions}
              deselectedOptions={deselectedOptions}
            />
          </MainWrap>

          {/* 하단바 */}
          <FooterBarWrap>
            <div>
              <img src="/images/emojione-fire.png" alt="" />
            </div>
            <div>I LOVE FOOD</div>
          </FooterBarWrap>
        </Container>
        <MainModal food1={food1} result={result} />
      </BackgroundImage>
    </>
  );
};

export default Main;
