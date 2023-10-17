import React, { useRef, useState, useEffect } from "react";
import GameWarp from "./GameWrap";
import RollContainer from "./RollContainer";
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
import styled, { keyframes } from "styled-components";

const boxShadow = "0 4px 6px rgb(32 33 36 / 28%)";

const blinkingText = keyframes`
  0% {
    color: #000;
  }
  49% {
    color: #000;
  }
  60% {
    color: transparent;
  }
  99% {
    color: transparent;
  }
  100% {
    color: #000;
  }
`;

export const MainGame = styled.div`
  height: 410px;
  width: 1000px;
  background: #fbe1d2;
  border: 3px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  // 상단 랜덤 슬롯 상자
  div.GameWarp {
    display: flex;
    flex-direction: column;
    margin: 20px 0 17px 0;
    div.SlotMachine {
      background: #ffebe7;
      width: 800px;
      height: 215px;
      border: 3px solid black;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin: 10px;
      /* color: red; */
      div.slotContainer {
        background-color: #f5d3bf;
        width: 700px;
        height: 147px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        border: 3px solid black !important;
        padding: 7px 5px 0 0px;
        img.coin1 {
          position: absolute;
          top: 90px;
          left: 27px;
          width: 35px;
          height: 35px;
        }
        img.coin2 {
          position: absolute;
          top: 90px;
          left: 737px;
          width: 35px;
          height: 35px;
        }
        div.line {
          position: absolute;
          top: 106px;
          left: 65px;
          width: 670px;
          height: 35px;
          border-top: 3px dashed #d29a8c;
          z-index: 1;
        }
        div.slot {
          position: relative;
          display: flex;
          flex-direction: row;
          height: 150px;
          width: 200px;
          margin: 0px 20px 10px 10px;
          section {
            position: absolute;
            background-color: white;
            width: 210px;
            height: 154px;
            border-radius: 2px !important;
            border-left: 3px solid black !important;
            border-right: 3px solid black !important;
            overflow: hidden;
            text-align: center;
            font-size: 25px;
            div.container {
              position: absolute;
              top: 2px;
              width: 100%;
              margin: 40px 0 0 0;
              transition: top 0.5s ease;
              text-align: center;
              z-index: 2;
              img {
                width: 110px;
                height: 90px;
              }
            }
          }
        }
      }
    }
  }
  // 하단 랜덤 셀렉트 상자
  div.subWarp {
    width: 1000px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    div.regionSelect {
      margin: 5px 50px 0 50px;
      select {
        background-color: #fff2e9;
        letter-spacing: 0.1rem;
        color: gray;
        width: 200px;
        height: 50px;
        border: 2px solid black;
        border-radius: 5px;
        font-size: 1.2rem;
        padding: 10px;
        cursor: pointer;
        &:focus {
          border-color: black;
          box-shadow: 0 0 0 0.5px black;
          color: black;
          outline: none;
        }
        option {
          border-radius: 5px;
        }
      }
      div.districtChoice {
        margin-top: 12.5px;
        line-height: 150%;
        color: #777;
      }
    }
    div.rollContainer {
      div.roll {
        background-color: #f9b2a6;
        width: 230px;
        height: 80px;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        animation: ${blinkingText} 1.3s ease infinite;
        font-size: 1.8rem;
        cursor: pointer;
        border: solid 2px black;

        &:active {
          box-shadow: inset -5px -5px 5px rgba(225, 225, 225, 0.5),
            inset 8px 0px 16px rgba(0, 0, 0, 0.1);
        }

        &:hover {
          background-color: #ea8573;
          transition: 0.5s;
        }
      }
    }
    div.dropDownContainer {
      box-sizing: border-box;
      margin: 5px 50px 0 50px;
      background-color: #fff2e9;
      width: 200px;
      height: 50px;
      border: 2px solid black;
      border-radius: 5px;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      div.inputContainer {
        display: flex;
        margin-left: 10px;
        align-items: center;
        z-index: 3;
        position: relative;
        input {
          box-sizing: border-box;
          background-color: transparent;
          border: none;
          outline: none;
          font-size: 1.2rem;
          width: 171px;
          letter-spacing: 1px;
          margin: 0 -20px 0 10px;
        }
        div.deleteButton {
          cursor: pointer;
          font-size: 1.25rem;
        }
      }
    }
  }
`;

const MapChoice = styled.div`
  position: absolute;
  bottom: -60px;
  color: #777;
  width: 200px;
  line-height: 150%;
`;

// 지역구 입력값 보여주는 li
export const DropDownContainer = styled.ul`
  background-color: #fff2e9;
  position: absolute;
  top: 47.5px;
  width: 190px;
  list-style-type: none;
  margin-top: 3px;
  padding: 0.5rem 0 0 0.25rem;
  border: 2.2px solid black;
  border-radius: 5px;
  box-shadow: ${boxShadow};
  z-index: 999;

  > li {
    padding: 0 0.7rem;
    text-align: left;
    font-size: 1.2rem;
    letter-spacing: 1px;
    margin: 0 0 7px 0;

    // 드랍다운 선택시 CSS 추가
    &.selected {
      background-color: #f9b2a6;
    }
    &:hover {
      background-color: #f9b2a6;
    }
  }
`;

// 자동완성 CSS 끝

function Slots({
  setFood1,
  setFood2,
  setFood3,
  onClick,
  onSlotFinish,
  setResult,
  inputValue,
  setInputValue,
  options,
  setOptions,
  deselectedOptions,
}) {
  // const [food1, setFood1] = useState(koreanFood1);
  // const [food2, setFood2] = useState(koreanFood2);
  // const [food3, setFood3] = useState(koreanFood3);

  const [rolling, setRolling] = useState(false);

  const slotRefs = [useRef(null), useRef(null), useRef(null)];

  const foods = [
    [koreanFood1, chineseFood1, westernFood1, japaneseFood1, schoolFood1],
    [koreanFood2, chineseFood2, westernFood2, japaneseFood2, schoolFood2],
    [koreanFood3, chineseFood3, westernFood3, japaneseFood3, schoolFood3],
  ];

  useEffect(() => {
    if (!rolling) {
      // 슬롯이 다 돌아갔을때, result 상태를 true로 바꾸는 함수
      onSlotFinish();
      // 밑의 코드는 slot이 다돌았을때 슬롯 2,3의 값을 슬롯1의 값으로 동기화 시키는 코드임
      // 슬롯 도는 상태가 바뀌거나, 슬롯 종료 여부가 변경될때마다 아래의 코드가 실행됨
      // 아래 roll 함수에도 슬롯1의 상태에 슬롯2,3을 맞추는 로직이 있으나, 그것만으로는 구현이 안되서 추가한 코드임
      const slot1Top = slotRefs[0].current.style.top;
      const slot3Top = `calc(${slot1Top} - 5px)`;
      slotRefs[2].current.style.top = slot3Top;
      slotRefs.slice(1, 2).forEach((slotRef) => {
        slotRef.current.style.top = slot1Top;
      });
    }
  }, [rolling, onSlotFinish]);

  // 룰렛 클릭했을때 실행되는 함수
  const roll = () => {
    const totalRotations = 10; // 롤링횟수
    setRolling(true); // rolling 상태를 true로 바꿔줌

    const rotationInterval = setInterval(() => {
      // 슬롯 1,2,3 을돌며 triggerSlotRotation(실제 슬롯1,2,3가 움직이게 하는 함수 리턴값은 각 슬롯 배열안의 음식물임)
      slotRefs.forEach((slotRef, i) => {
        const selected = triggerSlotRotation(slotRef, i, foods);
        if (i === 0) {
          // 첫번째 슬롯의 음식 인덱스를 저장해두고
          // 두번째, 세번째 슬롯의 인덱스를 첫번째 슬롯인덱스와 일치시켜 같은 음식이 나오도로감
          const foodIndex = foods[0].indexOf(selected);
          setFood1(selected);
          setFood2(foods[1][foodIndex]);
          setFood3(foods[2][foodIndex]);
        }
      });
    }, 500);

    setTimeout(() => {
      clearInterval(rotationInterval);
      setRolling(false);

      // 슬롯 다돌고 결과 모달이 뜨기 전까지 delay를 주기 위한 코드

      setTimeout(() => {
        onClick();
      }, 800);
    }, totalRotations * 400);
  };

  // 실제 각 슬롯이 돌아가게 만들어주는 함수
  const triggerSlotRotation = (slotRef, slotIndex, foods) => {
    function setTop(top) {
      slotRef.current.style.top = `${top}px`;
    }

    const options = slotRef.current.children;
    const filteredFoods = foods[slotIndex];
    const randomOption = Math.floor(Math.random() * filteredFoods.length);
    const chosenOption = options[randomOption];
    setTop(-chosenOption.offsetTop + 1);
    return filteredFoods[randomOption];
  };

  // 자동완성 구현 부분
  const [hasText, setHasText] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // 드롭다운 검색결과 클릭했을때 창이 닫히도록 상태 추가
  const [selectedOption, setSelectedOption] = useState(null); // 검색결과 위아래 키입력 적용할 상태 추가

  // useEffect를 아래와 같이 활용할 수도 있습니다.
  useEffect(() => {
    if (inputValue === "") {
      setHasText(false);
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    /**
     * handleInputChange 함수는
     * - input값 변경 시 발생되는 change 핸들러함수
     * - autocomplete 추천 항목이 dropdown으로 시시각각 변화되어 보여질 수 있도록 상태를 변경
     *
     * onChange 이벤트 발생 시
     * 1. input값 상태인 inputValue가 적절하게 변경
     * 2. input값 유무 상태인 hasText가 적절하게 변경
     * 3. autocomplete 추천 항목인 options의 상태가 적절하게 변경
     */
    setInputValue(event.target.value);
    setHasText(true);
    setOptions(
      deselectedOptions.filter((el) => {
        return el.startsWith(event.target.value);
      })
    );
    setShowDropdown(true);
  };

  const handleDropDownClick = (clickedOption) => {
    /**
     * handleDropDownClick 함수는
     * - autocomplete 추천 항목을 클릭할 때 발생되는 click 핸들러 함수
     * - dropdown에 제시된 항목을 눌렀을 때, input값이 해당 항목의 값으로 변경되는 기능을 수행
     *
     * onClick 이벤트 발생 시
     * 1. input값 상태인 inputValue가 적절하게 변경
     * 2. autocomplete 추천 항목인 options의 상태가 적절하게 변경.
     */
    setInputValue(clickedOption);
    setOptions([clickedOption]);
    setShowDropdown(false);
  };

  const handleDeleteButtonClick = () => {
    /**
     * handleDeleteButtonClick 함수는
     * - input의 오른쪽에 있는 X버튼 클릭 시 발생되는 click 핸들러 함수
     * - 함수 작성을 완료하여 input값을 한 번에 삭제하는 기능을 구현
     *
     * onClick 이벤트 발생 시
     * 1. input값 상태인 inputValue가 빈 문자열로 상태변경
     */
    setInputValue("");
    setShowDropdown(false);
    setSelectedOption(null); // 삭제 버튼 클릭 시 선택된 옵션 초기화
  };

  const handleKeyUp = (event) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      // 상하 화살표 키 입력 시 dropdown 항목 선택
      // 선택된 옵션이 없는 경우 첫 번째 옵션 선택

      // 현재 인덱스를 나타내는 변수와 마지막 인덱스 변수를 선언
      const currentIndex = options.indexOf(selectedOption);
      const lastIndex = options.length - 1;

      let newIndex;
      if (event.key === "ArrowUp") {
        // ↑ 버튼 입력 현재인덱스가 0번째 인덱스(첫번째)요소 일경우, 마지막 인덱스로 설정
        // 0번 인덱스가 아닌경우 현재 인덱스 -1
        newIndex = currentIndex <= 0 ? lastIndex : currentIndex - 1;
        // ↓ 버튼 입력 마지막 인덱스 일경우, 0번 인덱스로 설정
        // 마지막 인덱스가 아닌경우 현재 인덱스 +1
      } else if (event.key === "ArrowDown") {
        newIndex = currentIndex >= lastIndex ? 0 : currentIndex + 1;
      }
      // 위에서 구한 newIndex로 options[newIndex]로 값에 접근하고 해당 값을 selectedOption 값으로 상태변화
      setSelectedOption(options[newIndex]);
    } else if (event.key === "Enter") {
      // Enter 키 입력 시 선택된 dropdown 항목의 값으로 input값 변경
      // selectedOption 값이 있다면 (초기값은 null, 위에 작업을 거치면 값이 생김)
      if (selectedOption) {
        // inputValue 상태변화 (값변경)
        setInputValue(selectedOption);
        setShowDropdown(false); // 검색결과 앤터 클릭시 드랍다운 닫히도록
      }
    }
  };

  return (
    <MainGame>
      <GameWarp slotRefs={slotRefs} foods={foods}></GameWarp>

      {/* 1번 */}
      <div className="subWarp">
        <div className="regionSelect">
          <select className="select">
            <option disabled selected>
              지역선택
            </option>
            <option value="seoul"> 서울시</option>
          </select>
          <div className="districtChoice">
            현재는 서울시에서만, <br /> 선택이 가능합니다.
          </div>
        </div>

        {/* 2번 */}
        <RollContainer rolling={rolling} roll={roll} />

        {/* 3번 */}
        <div className="dropDownContainer">
          <div className="inputContainer">
            <input
              type="text"
              placeholder="지역구 입력"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyUp}
            ></input>
            <div className="deleteButton" onClick={handleDeleteButtonClick}>
              X
            </div>
          </div>

          {!hasText || !showDropdown ? (
            <MapChoice>
              지역구 미입력시,
              <br />
              랜덤으로 안내드립니다.
            </MapChoice>
          ) : (
            <DropDown
              options={options}
              handleComboBox={handleDropDownClick}
              selectedOption={selectedOption}
            />
          )}
        </div>
      </div>
    </MainGame>
  );
}

export default Slots;

export const DropDown = ({ options, handleComboBox, selectedOption }) => {
  return (
    <DropDownContainer>
      {/* input 값에 맞는 autocomplete 선택 옵션이 보여지는 역할 */}
      {/* 검색결과 없을때 case 추가 */}
      {/* selectedOption props 추가 (드랍다운 키보드 입력시 하이라이트 css적용하기 위해) */}
      {options.length === 0 ? (
        <li>일치하는 검색 결과가 없습니다.</li>
      ) : (
        options.map((el, index) => (
          <li
            key={index}
            onClick={() => handleComboBox(el)}
            className={selectedOption === el ? "selected" : ""}
          >
            {el}
          </li>
        ))
      )}
    </DropDownContainer>
  );
};
