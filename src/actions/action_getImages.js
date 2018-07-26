import {
    GET_IMAGES_SUCCESS,
    SET_INDEX
} from '../constants';


export const loadImages = () => {
    return dispatch => {
        fetch('./slider-config.json')
            .then(res => {
                return res.json();
            })
            .then(res => {
                dispatch(getImages(res));
            })
            .catch(e => console.log('error', e))
    }
};

export const getImages = (images) => {
    return {
        type: GET_IMAGES_SUCCESS,
        images
    }
};

export const setIndex = (index) => {
  return {
      type: SET_INDEX,
      index
  }
};