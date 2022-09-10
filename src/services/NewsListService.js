import axiosInstance from './AxiosInstance';

export function getNEWS() {
    return axiosInstance.get(
        `/${process.env.REACT_APP_NEWS_ENDPOINT}`,
    );
}

export function getNEWSDetails(postData) {
    return axiosInstance.get(
        `/${process.env.REACT_APP_NEWS_DETAIL_ENDPOINT}/${postData}`,

    );
}


export function formatData(data) {
    let list = [];
    for (let key in data) {
        list.push({ ...data[key], id: key });
    }

    return list;
}

