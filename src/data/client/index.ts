import {
    GATEWAY_PATH,
    createArticleSearchRequest,
    createArticleRetrieveRequest,
    mapArticleDetailToNews,
    mapArticlesToNews,
    toNewsQueryObject,
    type ArticleRetrieveResponse,
    type ArticleSearchResponse,
} from "@/lib/articles";
import { NewsQueryArrray, NewsQueryObject } from "@/types";
import { HttpClient } from "./http-client";

async function retrieveArticleById(articleId: string) {
    const response = await HttpClient.post<ArticleRetrieveResponse>(
        GATEWAY_PATH,
        createArticleRetrieveRequest(articleId),
        {
            headers: {
                app: 'BO',
                lang: 'vi',
            },
        }
    );

    return mapArticleDetailToNews(response);
}

class Client {
    news = {
        all: async () => {
            const response = await HttpClient.post<ArticleSearchResponse>(
                GATEWAY_PATH,
                createArticleSearchRequest(),
                {
                    headers: {
                        app: 'BO',
                        lang: 'vi',
                    },
                }
            );
            return {
                result: {
                    data: mapArticlesToNews(response),
                },
            } satisfies NewsQueryArrray;
        },
        getbyid: async (blogid: string | undefined) => {
            if (!blogid) {
                throw new Error('Article id is required');
            }

            const post = await retrieveArticleById(blogid);
            return toNewsQueryObject(post) satisfies NewsQueryObject;
        }
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new Client();
