import { useState, useEffect } from "react";
import { searchItem } from "apis/MovieDB";
import { useParams } from "react-router";

export const useItem = (item) => {
  const [info, setInfo] = useState([]);
  const [acting, setActing] = useState([]);
  const [director, setDirector] = useState([]);
  const [image, setImage] = useState([]);
  const [background, setBackground] = useState([]);

  const { id } = useParams();

  const URL = "https://www.themoviedb.org/t/p/w780";

  useEffect(() => {
    const search = async () => {
      const { data } = await searchItem.get(`/${item}/${id}?`);

      const imageURL = `${URL}${data.poster_path}`;

      setInfo(data);
      setBackground(imageURL);
    };

    search();
  }, []);

  useEffect(() => {
    const getCast = async () => {
      const {
        data: { cast, crew },
      } = await searchItem.get(`/${item}/${id}/credits?`);
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
    const getImage = async () => {
      const {
        data: { backdrops },
      } = await searchItem.get(`/${item}/${id}/images?`);

      const renderedBackdrops = backdrops.slice(0, 3);

      setImage(renderedBackdrops);
    };

    getImage();
  }, []);

  return {
    info,
    acting,
    director,
    image,
    background,
  };
};
