import { useState, useEffect } from "react";
import { searchItem } from "apis/MovieDB";

export const useMedia = (page, defaultQuery) => {
  const [mediaQuery, setMediaQuery] = useState(defaultQuery);
  const [debounce, setDebounce] = useState(mediaQuery);
  const [medias, setMedias] = useState([]);
  const [popularMedias, setPopularMedias] = useState([]);

  const getPage = page === "movie" ? "movie" : "tv";

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounce(mediaQuery ? mediaQuery : "Avengers");
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [mediaQuery]);

  useEffect(() => {
    const search = async () => {
      const {
        data: { results },
      } = await searchItem.get(`/search/${getPage}?`, {
        params: {
          query: debounce,
        },
      });

      const renderedMedias = results.slice([0], [4]);

      setMedias(renderedMedias);
    };

    search();
  }, [debounce, getPage]);

  useEffect(() => {
    const getPopularMedias = async () => {
      const {
        data: { results },
      } = await searchItem.get(`/${getPage}/popular?`);

      const renderedPopularMedias = results.slice([0], [10]);

      setPopularMedias(renderedPopularMedias);
    };

    getPopularMedias();
  }, [getPage]);

  return { mediaQuery, setMediaQuery, medias, popularMedias };
};
