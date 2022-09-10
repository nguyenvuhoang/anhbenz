import { CONFIRMED_GET_NEWS } from './../actions/types/NewsType';

const initialState = []

export default function NewsReducer(state = initialState, action) {
    if (action.type === CONFIRMED_GET_NEWS) {
        state = action.news
        return [
            ...state,
        ];
    }

    return state;
}



