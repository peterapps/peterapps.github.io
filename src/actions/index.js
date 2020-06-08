import axios from "axios";
import moment from "moment/moment.js";

export const SERIES_THUMBNAILS_LOADED = "SERIES_THUMBNAILS_LOADED";
export const EPISODES_THUMBNAILS_LOADED = "EPISODES_THUMBNAILS_LOADED";

export function loadSeriesThumbnails(dispatch, allSeries) {
  const fetchData = async () => {
    let thumbnails = Array(allSeries.length);
    for (let i = 0; i < allSeries.length; ++i) {
      const url = allSeries[i].episodes[0].url;
      if (url.includes("youtube.com/")) {
        // Get YouTube ID from URL
        const id = url.split("v=")[1];
        thumbnails[i] =
          "https://img.youtube.com/vi/" + id + "/maxresdefault.jpg";
      } else {
        const result = await axios.get(
          "https://vimeo.com/api/oembed.json?url=" + url
        );
        thumbnails[i] = result.data.thumbnail_url;
      }
    }
    dispatch({
      type: SERIES_THUMBNAILS_LOADED,
      seriesThumbnails: thumbnails
    });
  };

  fetchData();
}

export function loadEpisodesThumbnails(dispatch, series, episodes) {
  const fetchData = async () => {
    let thumbnails = Array(episodes.length);
    let metadata = Array(episodes.length);
    for (let i = 0; i < episodes.length; ++i) {
      const url = episodes[i].url;
      if (url.includes("youtube.com/")) {
        // Get YouTube ID from URL
        const id = url.split("v=")[1];
        thumbnails[i] =
          //"https://img.youtube.com/vi/" + id + "/maxresdefault.jpg";
          "https://i.ytimg.com/vi/" + id + "/maxresdefault.jpg";
        metadata[i] = {
          date: episodes[i].date,
          description: episodes[i].description
        };
      } else {
        const result = await axios.get(
          "https://vimeo.com/api/oembed.json?url=" + url
        );
        thumbnails[i] = result.data.thumbnail_url;
        metadata[i] = {
          date:
            episodes[i].date ||
            moment(result.data.upload_date).format("MMM D, YYYY"),
          description: episodes[i].description || result.data.description
        };
      }
    }
    dispatch({
      type: EPISODES_THUMBNAILS_LOADED,
      episodesThumbnails: thumbnails,
      series: series,
      episodesMetadata: metadata
    });
  };

  fetchData();
}
