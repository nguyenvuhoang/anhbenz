import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    authorization?: boolean;
    getLayout?: (page: ReactElement) => ReactNode;
};

interface ResultObject<T> {
    result: {
        data: T
    }
}
interface ResultArray<T> {
    result: {
        data: T[]
    }
}


export interface News {
    id: string
    name: string
    title: string
    type: string
    url: string
    pubdt: string
    image: string
    summary: string
    content: string
    username: string
    createdt: string
    nextnews: any
    prevnews: any
}

export interface NewsQueryArrray extends ResultArray<News> { }
export interface NewsQueryObject extends ResultObject<News> { }