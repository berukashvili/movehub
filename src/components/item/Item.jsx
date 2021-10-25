import React, { useState, useEffect } from "react";
import {
  StyledMediaContainer,
  StyledFloat,
  StyledMediaItemsWrapper,
  StyledMediaTitle,
  StyledMediaItemWrapper,
  StyledMediaVote,
  StyledMediaVoteNum,
  StyledMediaButton,
  StyledMediaFavIcon,
  StyledFavTitle,
  StyledMediaInfoTitle,
  StyledMediaInfo,
  StyledMediaCast,
  StyledMediaCastSpan,
  StyledBackdropWrapper,
  StyledBackdrop,
  StyledBackdropContainer,
} from "./StyledItem";
import { searchItem } from "apis/MovieDB";
import { useParams } from "react-router";

const Item = ({ movies, popularMovies, shows, popularShows }) => {
  const [movieInfo, setMovieInfo] = useState([]);
  const [movieActing, setMovieActing] = useState([]);
  const [movieDirector, setMovieDirector] = useState([]);
  const [movieImages, setMovieImages] = useState([]);
  const [movieBackground, setMovieBackground] = useState([]);
  const [showInfo, setShowInfo] = useState([]);
  const [showActing, setShowActing] = useState([]);
  const [showDirector, setShowDirector] = useState([]);
  const [showImages, setShowImages] = useState([]);
  const [showBackground, setShowBackground] = useState([]);

  const { id } = useParams();

  console.log(id);

  const movieID = movies.map((movie) => {
    console.log(movie.id);
  });

  const showID = shows.map((show) => {
    console.log(show.id);
  });

  const URL = "https://www.themoviedb.org/t/p/original";

  //MOVIE ITEM SECTION START

  useEffect(() => {
    const search = async () => {
      const { data } = await searchItem.get(`/movie/${id}?`);

      const imageURL = `${URL}${data.poster_path}`;

      setMovieInfo(data);
      setMovieBackground(imageURL);
    };

    search();
  }, []);

  useEffect(() => {
    const getMovieCast = async () => {
      const {
        data: { cast, crew },
      } = await searchItem.get(`/movie/${id}/credits?`);
      const persons = cast.slice(0, 3);

      const directing = crew.find(
        (director) => director.department === "Directing"
      );

      setMovieActing(persons);
      setMovieDirector(directing);
    };

    getMovieCast();
  }, []);

  useEffect(() => {
    const getMovieImages = async () => {
      const {
        data: { backdrops },
      } = await searchItem.get(`/movie/${id}/images?`);

      const renderedBackdrops = backdrops.slice(0, 3);

      setMovieImages(renderedBackdrops);
    };

    getMovieImages();
  }, []);

  //MOVIE ITEM SECTION END

  //SHOW ITEM SECTION START

  useEffect(() => {
    const search = async () => {
      const { data } = await searchItem.get(`/tv/${id}?`);

      const imageURL = `${URL}${data.poster_path}`;

      setShowInfo(data);
      setShowBackground(imageURL);
    };

    search();
  }, []);

  useEffect(() => {
    const getShowCast = async () => {
      const {
        data: { cast, crew },
      } = await searchItem.get(`/tv/${id}/credits?`);
      const persons = cast.slice(0, 3);

      const directing = crew.find(
        (director) => director.department === "Directing"
      );

      setShowActing(persons);
      setShowDirector(directing);
    };

    getShowCast();
  }, []);

  useEffect(() => {
    const getShowImages = async () => {
      const {
        data: { backdrops },
      } = await searchItem.get(`/tv/${id}/images?`);

      const renderedBackdrops = backdrops.slice(0, 3);

      setShowImages(renderedBackdrops);
    };

    getShowImages();
  }, []);
  // SHOW  ITEM SECTION END

  return (
    <StyledMediaContainer>
      <StyledFloat movieBackground={movieBackground} />
      <StyledMediaItemsWrapper>
        <StyledMediaTitle>{movieInfo.title}</StyledMediaTitle>
        <StyledMediaItemWrapper>
          <StyledMediaVote>
            <StyledMediaVoteNum>{movieInfo.vote_average}</StyledMediaVoteNum>
          </StyledMediaVote>
          <StyledMediaButton>
            <StyledMediaFavIcon />
          </StyledMediaButton>
          <StyledFavTitle>Add to the favourites</StyledFavTitle>
        </StyledMediaItemWrapper>
        <StyledMediaInfoTitle>OVERVIEW</StyledMediaInfoTitle>
        <StyledMediaInfo>{movieInfo.overview}</StyledMediaInfo>
        <StyledMediaCast>
          Starring
          {movieActing.map((person, index) => (
            <StyledMediaCastSpan key={index}>{person.name}</StyledMediaCastSpan>
          ))}
        </StyledMediaCast>
        <StyledMediaCast>
          Director
          <StyledMediaCastSpan>{movieDirector.name}</StyledMediaCastSpan>{" "}
        </StyledMediaCast>
        <StyledBackdropWrapper>
          {movieImages.map((backdrop, index) => (
            <StyledBackdropContainer key={index}>
              <StyledBackdrop src={`${URL}${backdrop.file_path}`} />
            </StyledBackdropContainer>
          ))}
        </StyledBackdropWrapper>
      </StyledMediaItemsWrapper>
    </StyledMediaContainer>
  );
};

export default Item;
