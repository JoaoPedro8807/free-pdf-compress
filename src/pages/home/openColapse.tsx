import React from 'react'
import styled from 'styled-components';


interface OpenColapseBtnProps {
    onClick: () => void
    btnTitle?: string
}
export const OpenColapseBtn: React.FC<OpenColapseBtnProps> = ( { onClick, btnTitle }: OpenColapseBtnProps ) => {
  return (
    <StyledWrapper onClick={onClick}>
      <div className="wrapper">
        <input type="checkbox" />
        <div className="btn" />
        <div className="tooltip"><svg /><span>{btnTitle}</span></div>
        <svg />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .wrapper {
    --background: #62abff;
    --icon-color: #414856;
    --shape-color-01: #b8cbee;
    --shape-color-02: #7691e8;
    --shape-color-03: #fdd053;
    --width: 40px;
    --height: 40px;
    --border-radius: var(--height);
    width: var(--width);
    height: var(--height);
    position: relative;
    border-radius: var(--border-radius);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wrapper .btn {
    background: var(--background);
    width: var(--width);
    height: var(--height);
    position: relative;
    z-index: 3;
    border-radius: var(--border-radius);
    box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-animation: plus-animation-reverse 0.5s ease-out forwards;
    animation: plus-animation-reverse 0.5s ease-out forwards;
  }
  .wrapper .btn::before,
  .wrapper .btn::after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 4px;
    background: #fff;
  }
  .wrapper .btn::before {
    width: 4px;
    height: 15px;
  }
  .wrapper .btn::after {
    width: 15px;
    height: 4px;
  }
  .wrapper .tooltip {
    width: fit-content;
    height: 75px;
    border-radius: 70px;
    position: absolute;
    z-index: 2;
    box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);
    opacity: 0;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: opacity 0.15s ease-in, top 0.15s ease-in, width 0.15s ease-in;
    
  }
  .wrapper .tooltip > span {
    position: relative;
    width: 100%;
    white-space: nowrap;
    opacity: 0;
  }
  .wrapper .tooltip > svg {
    width: 100%;
    height: 26px;
    display: block;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
  }
  .wrapper .tooltip > svg .icon {
    fill: none;
    stroke: var(--icon-color);
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-linejoin: round;
    opacity: 0.4;
    transition: opacity 0.3s ease;
  }
  .wrapper .tooltip > svg:hover .icon {
    opacity: 1;
  }
  .wrapper .tooltip::after {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    margin-left: -10px;
    bottom: -8px;
    transform: rotate(45deg);
    z-index: 0;
  }
  .wrapper > svg {
    width: 300px;
    height: 300px;
    position: absolute;
    z-index: 1;
    transform: scale(0);
  }
  .wrapper > svg .shape {
    fill: none;
    stroke: none;
    stroke-width: 3px;
    stroke-linecap: round;
    stroke-linejoin: round;
    transform-origin: 50% 20%;
  }
  .wrapper input {
    border-radius: var(--border-radius);
    cursor: pointer;
    position: absolute;
    z-index: 5;
    opacity: 0;
    width: 40px;
    height: 40px;
  }
  .wrapper input:checked ~ svg {
    -webkit-animation: pang-animation 1.2s ease-out forwards;
    animation: pang-animation 1.2s ease-out forwards;
  }
  .wrapper input:checked ~ svg .shape:nth-of-type(1) {
    transform: translate(25px, 30%) rotate(40deg);
  }
  .wrapper input:checked ~ svg .shape:nth-of-type(2) {
    transform: translate(-4px, 30%) rotate(80deg);
  }
  .wrapper input:checked ~ svg .shape:nth-of-type(3) {
    transform: translate(12px, 30%) rotate(120deg);
  }
  .wrapper input:checked ~ svg .shape:nth-of-type(4) {
    transform: translate(8px, 30%) rotate(160deg);
  }
  .wrapper input:checked ~ svg .shape:nth-of-type(5) {
    transform: translate(21px, 30%) rotate(200deg);
  }
  .wrapper input:checked ~ svg .shape:nth-of-type(6) {
    transform: translate(0px, 30%) rotate(240deg);
  }
  .wrapper input:checked ~ svg .shape:nth-of-type(7) {
    transform: translate(17px, 30%) rotate(280deg);
  }
  .wrapper input:checked ~ svg .shape:nth-of-type(8) {
    transform: translate(-3px, 30%) rotate(320deg);
  }
  .wrapper input:checked ~ svg .shape:nth-of-type(9) {
    transform: translate(25px, 30%) rotate(360deg);
  }
  .wrapper input:checked ~ .btn {
    -webkit-animation: plus-animation 0.5s ease-out forwards;
    animation: plus-animation 0.5s ease-out forwards;
  }
  .wrapper input:checked ~ .tooltip {
    width: fit-content;
    padding: 30px;
    -webkit-animation: stretch-animation 1s ease-out forwards 0.15s;
    animation: stretch-animation 1s ease-out forwards 0.15s;
    top: -90px;
    opacity: 1;
  }

  .wrapper input:checked ~ .tooltip > span {
    opacity: 1;
  }

  @-webkit-keyframes pang-animation {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    40% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.1);
      opacity: 0;
    }
  }

  @keyframes pang-animation {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    40% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.1);
      opacity: 0;
    }
  }
  @-webkit-keyframes plus-animation {
    0% {
      transform: rotate(0) scale(1);
    }
    20% {
      transform: rotate(60deg) scale(0.93);
    }
    55% {
      transform: rotate(35deg) scale(0.97);
    }
    80% {
      transform: rotate(48deg) scale(0.94);
    }
    100% {
      transform: rotate(45deg) scale(0.95);
    }
  }
  @keyframes plus-animation {
    0% {
      transform: rotate(0) scale(1);
    }
    20% {
      transform: rotate(60deg) scale(0.93);
    }
    55% {
      transform: rotate(35deg) scale(0.97);
    }
    80% {
      transform: rotate(48deg) scale(0.94);
    }
    100% {
      transform: rotate(45deg) scale(0.95);
    }
  }
  @-webkit-keyframes plus-animation-reverse {
    0% {
      transform: rotate(45deg) scale(0.95);
    }
    20% {
      transform: rotate(-15deg);
    }
    55% {
      transform: rotate(10deg);
    }
    80% {
      transform: rotate(-3deg);
    }
    100% {
      transform: rotate(0) scale(1);
    }
  }
  @keyframes plus-animation-reverse {
    0% {
      transform: rotate(45deg) scale(0.95);
    }
    20% {
      transform: rotate(-15deg);
    }
    55% {
      transform: rotate(10deg);
    }
    80% {
      transform: rotate(-3deg);
    }
    100% {
      transform: rotate(0) scale(1);
    }
  }
  @-webkit-keyframes stretch-animation {
    0% {
      transform: scale(1, 1);
    }
    10% {
      transform: scale(1.1, 0.9);
    }
    30% {
      transform: scale(0.9, 1.1);
    }
    50% {
      transform: scale(1.05, 0.95);
    }
    100% {
      transform: scale(1, 1);
    }
  }
  @keyframes stretch-animation {
    0% {
      transform: scale(1, 1);
    }
    10% {
      transform: scale(1.1, 0.9);
    }
    30% {
      transform: scale(0.9, 1.1);
    }
    50% {
      transform: scale(1.05, 0.95);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  .socials {
    position: fixed;
    display: block;
    left: 20px;
    bottom: 20px;
  }
  .socials > a {
    display: block;
    width: 30px;
    opacity: 0.2;
    transform: scale(var(--scale, 0.8));
    transition: transform 0.3s cubic-bezier(0.38, -0.12, 0.24, 1.91);
  }
  .socials > a:hover {
    --scale: 1;
  }`;

