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
} from "./StyledMedia";
import { useParams, useLocation } from "react-router";
import { searchMedia } from "apis/MovieDB";

const Media = () => {
  const [mediaInfo, setMediaInfo] = useState([]);
  const [acting, setActing] = useState([]);
  const [director, setDirector] = useState([]);
  const [images, setImages] = useState([]);
  const [background, setBackground] = useState([]);

  const { id } = useParams();

  const URL = "https://www.themoviedb.org/t/p/original";

  useEffect(() => {
    const search = async () => {
      const { data } = await searchMedia.get(`/movie/${id}?`);

      const imageURL = `${URL}${data.poster_path}`;

      setMediaInfo(data);
      setBackground(imageURL);
    };

    search();
  }, []);

  useEffect(() => {
    const getCast = async () => {
      const {
        data: { cast, crew },
      } = await searchMedia.get(`/movie/${id}/credits?`);
      const persons = cast.slice(0, 3);

      const directing = crew.find(
        (director) => director.department === "Directing"
      );

      setActing(persons);
      setDirector(directing);
    };

    getCast();
  }, []);

  useEffect(() => {
    const getImages = async () => {
      const {
        data: { backdrops },
      } = await searchMedia.get(`/movie/${id}/images?`);

      const renderedBackdrops = backdrops.slice(0, 3);

      setImages(renderedBackdrops);
    };

    getImages();
  }, []);

  return (
    <StyledMediaContainer>
      <StyledFloat background={background} />
      <StyledMediaItemsWrapper>
        <StyledMediaTitle>{mediaInfo.title}</StyledMediaTitle>
        <StyledMediaItemWrapper>
          <StyledMediaVote>
            <StyledMediaVoteNum>{mediaInfo.vote_average}</StyledMediaVoteNum>
          </StyledMediaVote>
          <StyledMediaButton>
            <StyledMediaFavIcon />
          </StyledMediaButton>
          <StyledFavTitle>Add to the favourites</StyledFavTitle>
        </StyledMediaItemWrapper>
        <StyledMediaInfoTitle>OVERVIEW</StyledMediaInfoTitle>
        <StyledMediaInfo>{mediaInfo.overview}</StyledMediaInfo>
        <StyledMediaCast>
          Starring
          {acting.map((person, index) => (
            <StyledMediaCastSpan key={index}>{person.name}</StyledMediaCastSpan>
          ))}
        </StyledMediaCast>
        <StyledMediaCast>
          Director<StyledMediaCastSpan>{director.name}</StyledMediaCastSpan>{" "}
        </StyledMediaCast>
        <StyledBackdropWrapper>
          {images.map((backdrop, index) => (
            <StyledBackdropContainer key={index}>
              <StyledBackdrop src={`${URL}${backdrop.file_path}`} />
            </StyledBackdropContainer>
          ))}
        </StyledBackdropWrapper>
      </StyledMediaItemsWrapper>
    </StyledMediaContainer>
  );
};

export default Media;
