import { useState, useEffect } from "react";
import { searchItem } from "apis/MovieDB";

export const useMedia = (page) => {
  const [mediaQuery, setMediaQuery] = useState("avengers");
  const [debounce, setDebounce] = useState(mediaQuery);
  const [medias, setMedias] = useState([]);
  const [popularMedias, setPopularMedias] = useState([]);

  const getMedia = page === "movie" ? "movie" : "tv";

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounce(mediaQuery ? mediaQuery : "avengers");
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [mediaQuery]);

  useEffect(() => {
    const getMedias = async () => {
      const {
        data: { results },
      } = await searchItem.get(`/search/${getMedia}?`, {
        params: {
          query: debounce,
        },
      });
      const renderedMedias = results.slice([0], [4]);
      setMedias(renderedMedias);
    };

    getMedias();
  }, [debounce]);

  useEffect(() => {
    const getPopularMedias = async () => {
      const {
        data: { results },
      } = await searchItem.get(`/${getMedia}/popular?`, {
        params: {
          query: debounce,
        },
      });
      const renderedPopularMedias = results.slice([0], [10]);

      setPopularMedias(renderedPopularMedias);
    };

    getPopularMedias();
  }, []);

  return { mediaQuery, debounce, medias, popularMedias };
};
