import React from "react";
import styled from "styled-components";

interface closeBtnProps {
    children?: React.ReactNode;
    onClick: () => void;
    style?: React.CSSProperties;

}



export const CloseBtn = ( { children, onClick, style }: closeBtnProps  ) => {
  return (
    <StyledWrapper style={style} onClick={onClick}>
      <button className="button">
        <span className="X" />
        <span className="Y" />
      </button>
      {children}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
  position: relative;
  width: 4em;
  height: 4em;
  border: none;
  background: rgba(219, 41, 85, 0.73);
  border-radius: 5px;
  transition: background 0.5s;
}

.X {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2em;
  height: 1.5px;
  background-color: rgb(255, 255, 255);
  transform: translateX(-50%) rotate(45deg);
}

.Y {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2em;
  height: 1.5px;
  background-color: #fff;
  transform: translateX(-50%) rotate(-45deg);
}

.close {
  position: absolute;
  display: flex;
  padding: 0.8rem 1.5rem;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  top: -70%;
  left: 50%;
  width: 3em;
  height: 1.7em;
  font-size: 12px;
  background-color: rgb(19, 22, 24);
  color: rgb(187, 229, 236);
  border: none;
  border-radius: 3px;
  pointer-events: none;
  opacity: 0;
}

.button:hover {
  background-color: rgb(211, 21, 21);
}

.button:active {
  background-color: rgb(130, 0, 0);
}

.button:hover > .close {
  animation: close 0.2s forwards 0.25s;
}

@keyframes close {
  100% {
    opacity: 1;
  }
}

`;

