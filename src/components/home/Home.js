import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { db } from "firebase";
import { collection, query, getDocs } from "firebase/firestore";
import { setMovies } from "_redux/movieSlice";

import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";

import Recommends from "./Recommends";

function Home() {
  const dispatch = useDispatch();
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    async function getMoviesData() {
      const q = query(collection(db, "movies"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    }

    getMoviesData();
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />

      <Recommends title="Recommends for you" type="recommend" />
      <Recommends title="New to Disney+" type="new" />
      <Recommends title="Originals" type="original" />
      <Recommends title="Trending" type="trending" />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/bg/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
