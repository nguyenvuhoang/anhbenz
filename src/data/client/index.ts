import { NewsQueryArrray, NewsQueryObject } from "@/types";
import { HttpClient } from "./http-client";
import { API_ENDPOINTS } from "./endpoints";

class Client {
    news = {
        all: () => HttpClient.get<NewsQueryArrray>(API_ENDPOINTS.NEWS),
        getbyid: (blogid: string | undefined) => HttpClient.get<NewsQueryObject>(`${API_ENDPOINTS.GET_DETAIL}/${blogid}`)
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new Client();