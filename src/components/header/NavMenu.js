import React from "react";
import styled from "styled-components";

function NavMenu() {
  return (
    <Container>
      <a href="/home">
        <img src="/images/icons/home-icon.svg" />
        <span>HOME</span>
      </a>

      <a href="/search">
        <img src="/images/icons/search-icon.svg" />
        <span>SEARCH</span>
      </a>

      <a href="/watchlist">
        <img src="/images/icons/watchlist-icon.svg" />
        <span>WATCHLIST</span>
      </a>

      <a href="/original">
        <img src="/images/icons/original-icon.svg" />
        <span>ORIGINAL</span>
      </a>

      <a href="/movies">
        <img src="/images/icons/movie-icon.svg" />
        <span>MOVIES</span>
      </a>

      <a href="/series">
        <img src="/images/icons/series-icon.svg" />
        <span>SERIES</span>
      </a>
    </Container>
  );
}

export default NavMenu;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;
    }

    &:before {
      background-color: rgb(249, 249, 249);
      border-radius: 0px 0px 4px 4px;
      bottom: -6px;
      content: "";
      height: 2px;
      left: 0px;
      opacity: 0;
      position: absolute;
      right: 0px;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden;
      width: auto;
    }
  }

  &:hover {
    span:before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
