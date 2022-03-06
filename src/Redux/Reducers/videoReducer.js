import {
  GET_VIDEO_SUCCESS,
  GET_VIDEO_FAILURE,
  GET_VIDEO_LOADING,
} from 'Redux/Constant/videoTypes';

export const videoReducer = (
  state = {
    video: [],
    message: null,
    hasNextPage: null,
    nextPageToken: null,
    loading: null,
    firstRender: null,
  },
  action
) => {
  //dispatch(action) send data to action
  switch (action.type) {
    case GET_VIDEO_LOADING:
      return {
        loading: true,
      };
    case GET_VIDEO_SUCCESS:
      return {
        videos: action.payload.video,
        hasNextPage: action.payload.hasNextPage,
        nextPageToken: action.payload.nextPageToken,
        loading: false,
        firstRender: action.payload.firstRender,
      };
    case GET_VIDEO_FAILURE:
      return {
        message: action.payload.message,
        loading: false,
      };
    default:
      return state;
  }
};
