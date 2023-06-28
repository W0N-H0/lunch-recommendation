import styled from "styled-components";

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
  background: #f6b7a8;
`;

// 메인창
const MainWrap = styled.div`
  height: 80%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const LinkWrap = styled.div`
  display: flex;
  align-items: center;
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
`;

const MainTitleText = styled.h1`
  color: black;
  font-size: 50px;
  margin: 0;
  color: white;
`;

const SuvTitleText = styled(MainTitleText)`
  color: #777;
  font-size: 20px;
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

//지역구 입력
const MapSearch = styled(MapModal)``;

const MapInnerText = styled.p`
  font-weight: bold;
  color: #777;
`;
// 메인 창 하단 버튼 부분
const MainGameBtnWram = styled.div`
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Main = () => {
  return (
    <div>
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
              <AcctionImg src="/images/star.png" alt="bookmark" />
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
          {/* 타이틀 */}
          <MainTitle>
            <MainTitleText> 오늘 점심 뭐 먹지? </MainTitleText>
            <SuvTitleText> 서울시 점메추 룰렛 </SuvTitleText>
          </MainTitle>

          {/* 게임 */}
          <MainGame>
            {/* 룰렛 */}
            <GameWrap>
              <RouletteWrap>
                <CoinImgLeft src="/images/coin.png" alt="" />

                {/* 아이콘이랑 여기서 구현하시면 됩니다. */}

                <CoinImgRight src="/images/coin.png" alt="" />
              </RouletteWrap>
            </GameWrap>

            {/* 입력/작동 버튼 */}
            <MainGameBtnWram>
              <MapModal>
                <MapInnerText>지 역 선 택</MapInnerText>
              </MapModal>
              <StartClick>
                <StartText>Click!</StartText>
              </StartClick>
              <MapSearch>
                <MapInnerText>지 역 구 입 력</MapInnerText>
              </MapSearch>
            </MainGameBtnWram>
          </MainGame>
        </MainWrap>

        {/* 하단바 */}
        <FooterBarWrap>
          <div>
            <img src="/images/emojione-fire.png" alt="" />
          </div>
          <div>I LOVE SEOUL</div>
        </FooterBarWrap>
      </Container>
    </div>
  );
};

export default Main;
