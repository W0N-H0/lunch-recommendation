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

//~91줄까지 자동완성을 위한 CSS
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
        border: 2px solid black;
        border-radius: 5px;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        animation: ${blinkingText} 1.3s ease infinite;
        font-size: 1.8rem;
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
  margin-top: -1px;
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
  food1,
  food2,
  food3,
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

  //  useEffect(() => {
  //   if (!rolling) {
  //     const slot1Top = slotRefs[0].current.style.top;
  //     slotRefs.slice(1).forEach((slotRef) => {
  //       slotRef.current.style.top = slot1Top;
  //     });
  //   }
  // }, [rolling]);

  useEffect(() => {
    if (!rolling) {
      onSlotFinish();
      const slot1Top = slotRefs[0].current.style.top;
      const slot3Top = `calc(${slot1Top} - 5px)`;
      slotRefs[2].current.style.top = slot3Top;
      slotRefs.slice(1, 2).forEach((slotRef) => {
        slotRef.current.style.top = slot1Top;
      });
    }
  }, [rolling, onSlotFinish]);

  const roll = () => {
    onClick();
    const totalRotations = 10;
    setRolling(true);

    const rotationInterval = setInterval(() => {
      slotRefs.forEach((slotRef, i) => {
        const selected = triggerSlotRotation(slotRef, i, foods);
        if (i === 0) {
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
    }, totalRotations * 400);
  };

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

  // TODO : input과 dropdown 상태 관리를 위한 handler가 있어야 합니다.
  const handleInputChange = (event) => {
    /**
     * handleInputChange 함수는
     * - input값 변경 시 발생되는 change 이벤트 핸들러입니다.
     * - input값과 상태를 연결시킬 수 있게 controlled component로 만들 수 있고
     * - autocomplete 추천 항목이 dropdown으로 시시각각 변화되어 보여질 수 있도록 상태를 변경합니다.
     *
     * handleInputChange 함수를 완성하여 아래 3가지 기능을 구현합니다.
     *
     * onChange 이벤트 발생 시
     * 1. input값 상태인 inputValue가 적절하게 변경되어야 합니다.
     * 2. input값 유무 상태인 hasText가 적절하게 변경되어야 합니다.
     * 3. autocomplete 추천 항목인 options의 상태가 적절하게 변경되어야 합니다.
     * Tip : options의 상태에 따라 dropdown으로 보여지는 항목이 달라집니다.
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
     * - autocomplete 추천 항목을 클릭할 때 발생되는 click 이벤트 핸들러입니다.
     * - dropdown에 제시된 항목을 눌렀을 때, input값이 해당 항목의 값으로 변경되는 기능을 수행합니다.
     *
     * handleInputChange 함수를 완성하여 아래 기능을 구현합니다.
     *
     * onClick 이벤트 발생 시
     * 1. input값 상태인 inputValue가 적절하게 변경되어야 합니다.
     * 2. autocomplete 추천 항목인 options의 상태가 적절하게 변경되어야 합니다.
     */
    setInputValue(clickedOption);
    setOptions([clickedOption]);
    setShowDropdown(false);
  };

  const handleDeleteButtonClick = () => {
    /**
     * handleDeleteButtonClick 함수는
     * - input의 오른쪽에 있는 X버튼 클릭 시 발생되는 click 이벤트 핸들러입니다.
     * - 함수 작성을 완료하여 input값을 한 번에 삭제하는 기능을 구현합니다.
     *
     * handleDeleteButtonClick 함수를 완성하여 아래 기능을 구현합니다.
     *
     * onClick 이벤트 발생 시
     * 1. input값 상태인 inputValue가 빈 문자열이 되어야 합니다.
     */
    setInputValue("");
    setShowDropdown(false);
    setSelectedOption(null); // 삭제 버튼 클릭 시 선택된 옵션 초기화
  };

  // Advanced Challenge: 상하 화살표 키 입력 시 dropdown 항목을 선택하고, Enter 키 입력 시 input값을 선택된 dropdown 항목의 값으로 변경하는 handleKeyUp 함수를 만들고,
  // 적절한 컴포넌트에 onKeyUp 핸들러를 할당합니다. state가 추가로 필요한지 고민하고, 필요 시 state를 추가하여 제작하세요.
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
