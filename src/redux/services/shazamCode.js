import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core7.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-KEY', '87a213de5emshb7203bccc9a90bap12bbc1jsn188405f12602');
      headers.set('X-RapidAPI-Host', 'shazam-core7.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/get-top-songs-in-world' }),
    getSongDetails: builder.query({ query: (songid) => `/songs/get_details?id=${songid}` }),
    getSongRelated: builder.query({ query: (songid) => `/tracks/related?=${songid}` }),
  }),
});

export const { useGetTopChartsQuery, useGetSongDetailsQuery, useGetSongRelatedQuery } =
  shazamCoreApi;
