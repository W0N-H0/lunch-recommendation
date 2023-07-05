import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  border: 3px solid black;
  border-bottom: 0px;
  width: 1100px;
  height: 720px;
  text-align: center;
  z-index: 999;
`;

// 상단바-1.
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

// 메인창
const MainWrap = styled.div`
  height: 85%;
  background: linear-gradient(
      135deg,
      #ffdc79 0%,
      rgba(255, 255, 255, 0.39) 79.69%,
      rgba(255, 255, 255, 0) 100%
    ),
    #ffdf85;

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
  margin: 10px;
  padding: 0;
`;

// 버튼 이미지
const AcctionImg = styled.img`
  width: 40px;
  height: 40px;
  display: flex;
  .closeButton {
    background-color: black;
    cursor: pointer;
  }
`;

//제목 문구
const TitleWrap = styled.div`
  > h1 {
    font-size: 3rem;
    margin: 30px;
  }
`;

// 후기 모음
const ReviewPostWrap = styled.div`
  display: flex;
  > div {
    width: 250px;
    border: 3px solid black;
    border-radius: 15px;
    margin: 0 10px;
    .reviewPostImg {
      height: 200px;
      border-bottom: 3px solid black;
      background-color: ivory;
    }
    .reviewPostText {
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      background-color: white;
      > h4 {
        font-size: 1.5rem;
        font-weight: bold;
      }
      > p {
        font-size: 1.2rem;
        color: #777;
        display: flex;
        padding: 0 10px;
      }
    }
  }
`;

const BlogModal = ({ closeReview }) => {
  return (
    <ModalBackground>
      <Container>
        {/* 상단바-1 */}
        <TopBarWrap>
          {/* 동작 버튼1 */}
          <AcctionBtnWrap>
            {/* 방향키 */}
            <AcctionBtn>
              <AcctionImg src="/images/left-btn.png" alt="back button" />
            </AcctionBtn>
            <AcctionBtn>
              <AcctionImg src="/images/right-btn.png" alt="next button" />
            </AcctionBtn>
          </AcctionBtnWrap>

          {/* 동작 버튼2 */}
          <AcctionBtnWrap>
            <AcctionBtn>
              <AcctionImg src="/images/hide-btn.png" alt="hide button" />
            </AcctionBtn>
            <AcctionBtn>
              <AcctionImg
                src="/images/close-btn.png "
                alt="close button"
                className="closeButton"
                onClick={closeReview}
              />
            </AcctionBtn>
          </AcctionBtnWrap>
        </TopBarWrap>
        {/* 상단바 끝 */}

        {/* 메인창 */}
        <MainWrap>
          <TitleWrap>
            <h1> [API] 식당 이름 </h1>
            <h1> 식당 후기 보기 </h1>
          </TitleWrap>
          <ReviewPostWrap>
            <div>
              <div className="reviewPostImg"></div>
              <div className="reviewPostText">
                <h4>블로그 title</h4>
                <p>dateTime</p>
              </div>
            </div>
            <div>
              <div className="reviewPostImg"></div>
              <div className="reviewPostText">
                <h4>블로그 title</h4>
                <p>dateTime</p>
              </div>
            </div>
            <div>
              <div className="reviewPostImg"></div>
              <div className="reviewPostText">
                <h4>블로그 title</h4>
                <p>dateTime</p>
              </div>
            </div>
            <div>
              <div className="reviewPostImg"></div>
              <div className="reviewPostText">
                <h4>블로그 title</h4>
                <p>dateTime</p>
              </div>
            </div>
          </ReviewPostWrap>
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
    </ModalBackground>
  );
};

export default BlogModal;
