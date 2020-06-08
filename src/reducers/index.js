import {
  SERIES_THUMBNAILS_LOADED,
  EPISODES_THUMBNAILS_LOADED
} from "../actions/index.js";

const initialState = {
  seriesLoaded: false,
  seriesThumbnails: false,
  episodesLoaded: {},
  episodesThumbnails: {},
  episodesMetadata: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SERIES_THUMBNAILS_LOADED:
      return {
        ...state,
        seriesLoaded: true,
        seriesThumbnails: action.seriesThumbnails
      };
    case EPISODES_THUMBNAILS_LOADED:
      return {
        ...state,
        episodesLoaded: { ...state.episodesLoaded, [action.series]: true },
        episodesThumbnails: {
          ...state.episodesThumbnails,
          [action.series]: action.episodesThumbnails
        },
        episodesMetadata: {
          ...state.episodesMetadata,
          [action.series]: action.episodesMetadata
        }
      };
    default:
      return state;
  }
}
