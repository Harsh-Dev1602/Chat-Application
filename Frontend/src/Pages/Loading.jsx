import React from 'react'
import styled from 'styled-components';

function Loading() {
    return (
        <>
            <div style={{ minHeight: "calc( 100vh - 190px )" }} className=" bg-white flex   justify-center items-center space-y-2 p-3">
                <StyledWrapper>
                    <div className="spinnerContainer">
                        <div className="spinner" />
                        <div className="loader">
                            <p>Loading</p>
                            <div className="words">
                                <span className="word">Message</span>
                                <span className="word">Message</span>
                                <span className="word">Message</span>
                                <span className="word">Message</span>
                            </div>
                        </div>
                    </div>
                </StyledWrapper>
            </div>
        </>
    )
}

const StyledWrapper = styled.div`
  .spinnerContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .spinner {
    width: 56px;
    height: 56px;
    display: grid;
    border: 4px solid #0000;
    border-radius: 50%;
    border-right-color: #7847ff;
    animation: tri-spinner 1s infinite linear;
  }

  .spinner::before,
  .spinner::after {
    content: "";
    grid-area: 1/1;
    margin: 2px;
    border: inherit;
    border-radius: 50%;
    animation: tri-spinner 2s infinite;
  }

  .spinner::after {
    margin: 8px;
    animation-duration: 3s;
  }

  @keyframes tri-spinner {
    100% {
      transform: rotate(1turn);
    }
  }

  .loader {
    color: black;
    font-family: "Poppins",sans-serif;
    font-weight: 500;
    font-size: 25px;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 40px;
    padding: 10px 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-radius: 8px;
  }

  .words {
    overflow: hidden;
  }

  .word {
    display: block;
    height: 100%;
    padding-left: 6px;
    color: #7847ff;
    animation: cycle-words 5s infinite;
  }

  @keyframes cycle-words {
    10% {
      -webkit-transform: translateY(-105%);
      transform: translateY(-105%);
    }

    25% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }

    35% {
      -webkit-transform: translateY(-205%);
      transform: translateY(-205%);
    }

    50% {
      -webkit-transform: translateY(-200%);
      transform: translateY(-200%);
    }

    60% {
      -webkit-transform: translateY(-305%);
      transform: translateY(-305%);
    }

    75% {
      -webkit-transform: translateY(-300%);
      transform: translateY(-300%);
    }

    85% {
      -webkit-transform: translateY(-405%);
      transform: translateY(-405%);
    }

    100% {
      -webkit-transform: translateY(-400%);
      transform: translateY(-400%);
    }
  }`;




export default Loading