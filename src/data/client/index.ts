import {
    GATEWAY_PATH,
    createArticleSearchRequest,
    createArticleRetrieveRequest,
    findArticleInFeed,
    mapArticleDetailToNews,
    mapArticlesToNews,
    toNewsQueryObject,
    type ArticleRetrieveResponse,
    type ArticleSearchResponse,
} from "@/lib/articles";
import { News, NewsQueryArrray, NewsQueryObject } from "@/types";
import { HttpClient } from "./http-client";

const gatewayOptions = {
    headers: {
        app: 'BO',
        lang: 'vi',
    },
};

function searchArticles() {
    return HttpClient.post<ArticleSearchResponse>(
        GATEWAY_PATH,
        createArticleSearchRequest(),
        gatewayOptions
    );
}

async function retrieveArticleById(articleId: string): Promise<News> {
    try {
        const response = await HttpClient.post<ArticleRetrieveResponse>(
            GATEWAY_PATH,
            createArticleRetrieveRequest(articleId),
            gatewayOptions
        );

        return mapArticleDetailToNews(response);
    } catch (retrieveError) {
        // WF_BO_RETRIEVE_ARTICLE requires a signed-in session, while the
        // public search feed already carries the full article content.
        const post = findArticleInFeed(await searchArticles(), articleId);

        if (!post) {
            throw retrieveError;
        }

        return post;
    }
}

class Client {
    news = {
        all: async () => {
            const response = await searchArticles();
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
