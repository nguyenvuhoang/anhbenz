import swal from 'sweetalert';
import { CONFIRMED_GET_NEWS, CONFIRMED_GET_NEWS_DETAILS } from './types/NewsType';
import { getNEWS, getNEWSDetails } from './../../services/NewsListService';


export function confirmedGetNewsAction(news) {
    return {
        type: CONFIRMED_GET_NEWS,
        news,
    };
};

export function confirmedGetNewsDetailsAction(newsdetails) {
    return {
        type: CONFIRMED_GET_NEWS_DETAILS,
        payload: newsdetails,
    };
};

export function getNewsAction() {
    return (dispatch) => {
        getNEWS().then((response) => {
            let news = response.result.data;
            dispatch(confirmedGetNewsAction(news));
        }).catch((error) => {
            const errorMessage = error.response.data
            if (errorMessage.errorcode !== 0) {
                swal("Oops", errorMessage.messagedetail, "error");
            }
        });
    };
};

export function getNewsDetailsAction(postData) {
    return (dispatch) => {
        getNEWSDetails(postData).then((response) => {
            let news = response.result.data;
            dispatch(confirmedGetNewsDetailsAction(news));
        }).catch((error) => {
            const errorMessage = error.response.data
            if (errorMessage.errorcode !== 0) {
                swal("Oops", errorMessage.messagedetail, "error");
            }
        });
    };
};
