import React from "react";
import loading from "../img/loading.gif";
import styled from "styled-components";

const ClickVideo = styled.img`
  width:230px;
  height:80px;
`
//
const RollContainer = ({ rolling, roll }) => {
  return (
    <div className="rollContainer">
      <div
        className={!rolling ? "roll rolling" : "roll"}
        onClick={!rolling ? roll : undefined}
        disabled={rolling}
      >
        {rolling ? (
          <ClickVideo src={loading} alt="loading gif" />
        ) : (
          "C L I C K !"
        )}
      </div>
    </div>
  );
};

export default RollContainer;
