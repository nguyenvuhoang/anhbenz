import { createSelector } from 'reselect';

export const getNewsByID = (state, id) =>
    state.news.find((news) => news.id === id);

export const getNEWS = () => createSelector([getNewsByID], (news) => news);

