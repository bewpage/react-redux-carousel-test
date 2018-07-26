import {
    SET_TRANSLATE_VALUE,
    GET_IMAGES_SUCCESS,
    SET_INDEX
} from '../constants';

const initialState = {
    translateValue: 0,
    index: 0,
    images: []
};

const reducer_slider = (state = initialState, action) => {
  switch(action.type){
      case SET_TRANSLATE_VALUE:
          const { translateValue } = action;
          return {
              ...state,
              translateValue
          };
      case GET_IMAGES_SUCCESS:
          const { images } = action;
          return {
              ...state,
              images
          };
      case SET_INDEX:
          const { index } = action;
          return {
              ...state,
              index
          };
      default:
          return state
  }
};

export default reducer_slider;