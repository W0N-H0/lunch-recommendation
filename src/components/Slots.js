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
import styled from "styled-components";

//~81줄까지 자동온성을 위한 CSS
const boxShadow = "0 4px 6px rgb(32 33 36 / 28%)";

export const InputContainer = styled.div`
  background-color: #fff2e9;
  margin: 3px 0px 0px 50px;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 2px solid black;
  border-radius: 5px;
  z-index: 3;

  &:focus-within {
    box-shadow: ${boxShadow};
  }

  > input {
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
    font-size: 1.2rem;
    text-align: center;
    width: 171px;
  }

  > div.delete-button {
    cursor: pointer;
  }
`;

export const DropDownContainer = styled.ul`
  background-color: #fff2e9;
  position: absolute;
  width: 212px;
  top: 755px;
  transform: translateX(49px);
  margin-left: auto;
  margin-right: auto;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  margin-top: -1px;
  padding: 0.5rem 0;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  border-radius: 5px;
  box-shadow: ${boxShadow};
  z-index: 3;

  > li {
    padding: 0 1rem;

    // 드랍다운 선택시 CSS 추가
    &.selected {
      background-color: #f1f1f1;
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

    onClick();
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
    <div className="MainGame">
      <GameWarp slotRefs={slotRefs} foods={foods}></GameWarp>
      {/* 여기 subWarp 만들고, 그 안에  rollContainer과 지역선택, 지역구입력 창 넣어야할듯 */}

      <div className="subWarp">
        <div className="regionSelect">
          <select>
            <option disabled selected>
              지역 선택
            </option>
            <option value="seoul"> 서울시</option>
          </select>
        </div>
        <RollContainer rolling={rolling} roll={roll} />

        <div className="dropDownContainer">
          <InputContainer>
            <input
              type="text"
              placeholder="지역구 입력"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyUp}
            ></input>
            <div className="delete-button" onClick={handleDeleteButtonClick}>
              X
            </div>
          </InputContainer>
          {/* 1. hasText state로 input값의 유무를 확인가능 */}
          {/* 2. DropDown컴포넌트의 props으로 options, handleComboBox 전달  */}
          {/* 3. showDropdown 상태 유의  */}
          {/* 4. selectedOption props 추가 전달*/}
          {!hasText || !showDropdown ? null : (
            <DropDown
              options={options}
              handleComboBox={handleDropDownClick}
              selectedOption={selectedOption}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Slots;

export const DropDown = ({ options, handleComboBox, selectedOption }) => {
  return (
    <DropDownContainer>
      {/* TODO : input 값에 맞는 autocomplete 선택 옵션이 보여지는 역할을 합니다. */}
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
