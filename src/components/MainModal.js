import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  border: 3px solid black;
  border-bottom: none;
  width: 1100px;
  height: 720px;
  text-align: center;
  z-index: 999;
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

// 메인창
const MainWrap = styled.div`
  height: 85%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// 당첨 문구
const MainText = styled.h1`
  font-size: 50px;
  margin: 0;
`;

const ResultIcon = styled.img`
  width: 700px;
  height: 140px;
  margin: 50px;
`;

// 추천가기.
const ResultClick = styled.div`
  width: 250px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f9b2a6;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #ea8573;
    transition: 0.7s;
  }
`;

const ResultText = styled.div`
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
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

// 상단 동작 버튼 div
const AcctionBtnWrap = styled.div`
  display: flex;
`;

// 상단 동작 버튼
const AcctionBtn = styled.button`
  background-color: transparent;
  border: none;
  margin: 16px 10px 10px 10px;
  padding: 0;
`;

// 버튼 이미지
const AcctionImg = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const MainModal = ({ inputValue, food1, result, handleClick }) => {
  let food = "";
  let foodImageName = "";
  switch (true) {
    case food1.includes("korean"):
      food = "한식";
      foodImageName = "korean-food";
      break;
    case food1.includes("chinese"):
      food = "중식";
      foodImageName = "chinese-food";
      break;
    case food1.includes("western"):
      food = "양식";
      foodImageName = "western-food";
      break;
    case food1.includes("japanese"):
      food = "일식";
      foodImageName = "japanese-food";
      break;
    case food1.includes("school"):
      food = "분식";
      foodImageName = "school-food";
      break;
    default:
      food = null;
      foodImageName = null;
      break;
  }
  const navigate = useNavigate();

  const goToRecomandation = () => {
    navigate(
      `/recomandation?inputValue=${encodeURIComponent(
        inputValue
      )}&food=${encodeURIComponent(food)}`
    );
  };

  return (
    <ModalBackground>
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

          {/* 동작 버튼 */}
          <AcctionBtnWrap>
            <AcctionBtn>
              <AcctionImg src="/images/hide-btn.png" alt="hide button" />
            </AcctionBtn>
            <AcctionBtn>
              <AcctionImg
                className="closeButton"
                src="/images/close-btn.png "
                alt="close button"
                onClick={handleClick}
              />
            </AcctionBtn>
          </AcctionBtnWrap>
        </TopBarWrap>

        {/* 메인창 */}
        <MainWrap>
          <MainText>
            {/* {food1.includes("korean") && result ? (
              <div>오늘은 한식!</div>
            ) : food1.includes("chinese") && result ? (
              <div>오늘은 중식!</div>
            ) : food1.includes("western") && result ? (
              <div>오늘은 양식!</div>
            ) : food1.includes("japanese") && result ? (
              <div>오늘은 일식!</div>
            ) : food1.includes("school") && result ? (
              <div>오늘은 분식!</div>
            ) : (
              <div> 음식을 추천중입니다. </div>
            )} */}
            {food && result ? (
              <div>오늘은 {food}!</div>
            ) : (
              <div>음식을 추천중입니다.</div>
            )}
          </MainText>
          <ResultIcon src={`/images/${foodImageName}.png`} alt="" />
          <ResultClick>
            <ResultText onClick={goToRecomandation} food1={food1}>
              추천 가기
            </ResultText>
          </ResultClick>
        </MainWrap>

        {/* 하단바 */}
        <FooterBarWrap>
          <div>
            <img src="/images/emojione-fire.png" alt="" />
          </div>
          <div>I LOVE {food}</div>
        </FooterBarWrap>
      </Container>
    </ModalBackground>
  );
};

export default MainModal;
