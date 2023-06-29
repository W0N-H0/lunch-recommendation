import styled from "styled-components";

const Container = styled.div`
  border-radius: 5px;
  border: 3px solid black;
  border-bottom: 0px;
  width: 1100px;
  height: 720px;
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
  background: white;
  border-bottom: 0px;
`;

// 메인창
const MainWrap = styled.div`
  height: 80%;
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
`

const ResultIcon = styled.img`
 width:800px;
 height:215px;
`

// 추천가기
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
  margin: 10px;
  padding: 0;
`;

// 버튼 이미지
const AcctionImg = styled.img`
  width: 40px;
  height: 40px;
`;


const MainModal = () => {
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

                    {/* 동작 버튼 */}
                    <AcctionBtnWrap>
                        <AcctionBtn><AcctionImg src="/images/hide-btn.png" alt="hide button" /></AcctionBtn>
                        <AcctionBtn><AcctionImg src="/images/close-btn.png " alt="close button" /></AcctionBtn>
                    </AcctionBtnWrap>
                </TopBarWrap>

                {/* 일단 흰 배경으로 감춤.. 추후 없애는 편으로.. */}
                <SecondBarWrap />


                {/* 메인창 */}
                <MainWrap>

                    <MainText> 오늘은 (당첨) </MainText>
                    <ResultIcon src="/images/korean-food.png" alt="" />
                    <ResultClick>
                        <ResultText>추천 가기</ResultText>
                    </ResultClick>


                </MainWrap>


                {/* 하단바 */}
                <FooterBarWrap>
                    <div>
                        <img src="/images/emojione-fire.png" alt="" />
                    </div>
                    <div>I LOVE (당첨)</div>
                </FooterBarWrap>
            </Container>
        </div>
    );
};

export default MainModal;