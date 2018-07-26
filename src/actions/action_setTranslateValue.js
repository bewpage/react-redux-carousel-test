import { SET_TRANSLATE_VALUE } from '../constants';


export const setTranslateValue = (translateValue) => {
    return{
        type: SET_TRANSLATE_VALUE,
        translateValue
    }
};