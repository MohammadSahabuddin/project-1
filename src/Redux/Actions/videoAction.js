import {
  GET_VIDEO_SUCCESS,
  GET_VIDEO_FAILURE,
  GET_VIDEO_LOADING,
} from 'Redux/Constant/videoTypes';
import axios from 'axios';

export const getVideos = (pages) => async (dispatch) => {
  dispatch({ type: GET_VIDEO_LOADING });
  await axios
    .get(
      `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ID}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&part=snippet&maxResults=8&pageToken=${pages}`
    )
    .then((res) => {
      dispatch({
        type: GET_VIDEO_SUCCESS,
        payload: {
          video: res.data.items,
          nextPageToken: res.data.nextPageToken,
          hasNextPage: res.data.nextPageToken ? true : false,
          firstRender: pages ? true : false,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_VIDEO_FAILURE,
        payload: {
          message: err?.response?.data?.error?.message,
        },
      });
    });
};
