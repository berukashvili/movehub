import { useState, useEffect } from "react";
import { searchItem } from "apis/MovieDB";
import { useParams } from "react-router";

export const useItem = (item) => {
  const [mediasInfo, setMediasInfo] = useState([]);
  const [mediasActing, setMediasActing] = useState([]);
  const [mediasDirector, setMediasDirector] = useState([]);
  const [mediasImages, setMediasImages] = useState([]);
  const [mediasBackground, setMediasBackground] = useState([]);

  const { id } = useParams();

  const URL = "https://www.themoviedb.org/t/p/w780";

  useEffect(() => {
    const search = async () => {
      const { data } = await searchItem.get(`/${item}/${id}?`);

      const imageURL = `${URL}${data.poster_path}`;

      setMediasInfo(data);
      setMediasBackground(imageURL);
    };

    search();
  }, []);

  useEffect(() => {
    const getMediasCast = async () => {
      const {
        data: { cast, crew },
      } = await searchItem.get(`/${item}/${id}/credits?`);
      const persons = cast.slice(0, 3);

      const directing = crew.find(
        (director) => director.department === "Directing"
      );

      setMediasActing(persons);
      setMediasDirector(directing);
    };

    getMediasCast();
  }, []);

  useEffect(() => {
    const getMediasImages = async () => {
      const {
        data: { backdrops },
      } = await searchItem.get(`/${item}/${id}/images?`);

      const renderedBackdrops = backdrops.slice(0, 3);

      setMediasImages(renderedBackdrops);
    };

    getMediasImages();
  }, []);

  return {
    mediasInfo,
    mediasActing,
    mediasDirector,
    mediasImages,
    mediasBackground,
  };
};
