import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { NextPageWithLayout } from '@/types'
import AOS from "aos";
import "aos/dist/aos.css";
import "@/assets/scss/style.scss";

import { QueryClientProvider, QueryClient, Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Router } from 'next/router';
import NProgress from 'nprogress';



Router.events.on('routeChangeStart', () => {
    NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
    NProgress.done();
});

Router.events.on('routeChangeError', () => {
    NProgress.done();
});



type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const CustomApp = ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout = Component.getLayout ?? ((page) => page)
    const [queryClient] = React.useState(() => new QueryClient())
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <QueryClientProvider client={queryClient} >
            <Hydrate state={pageProps.dehydratedState}>
                {getLayout(<Component {...pageProps} />)}
            </Hydrate>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default CustomApp