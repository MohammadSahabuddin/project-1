import {
  GET_VIDEO_SUCCESS,
  GET_VIDEO_FAILURE,
  GET_VIDEO_LOADING,
} from 'Redux/Constant/videoTypes';
import axios from 'axios';

export const getVideos = () => async (dispatch) => {
  await axios
    .get(
      'https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UUdtljfn2uCmlMtiBcGbnxvQ&key=AIzaSyDyc4T-Ak6OVc4broGgVJfqwHGIe6AytlE&part=snippet&maxResults=8'
    )
    .then((res) => {
      dispatch({
        type: GET_VIDEO_SUCCESS,
        payload: {
          video: res.data.items,
          nextPageToken: res.data.nextPageToken,
          hasNextPage: res.data.nextPageToken ? true : false,
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
