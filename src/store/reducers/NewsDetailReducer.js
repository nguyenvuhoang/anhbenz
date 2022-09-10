import { CONFIRMED_GET_NEWS_DETAILS } from '../actions/types/NewsType';

const initialState = {

}

export default function NewsDetailReducer(state = initialState, action) {
    if (action.type === CONFIRMED_GET_NEWS_DETAILS) {
        state = action.payload
        return {
            ...state,
        };
    }

    return state;
}



