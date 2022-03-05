import { combineReducers } from 'redux';

//Reducers
import { videoReducer } from 'Redux/Reducers/videoReducer';

const reducer = combineReducers({
  videoInfo: videoReducer,
});

export default reducer;
