import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => "/tasks",
        }),
    }),
});

export const { useGetTasksQuery } = baseApi;

export default baseApi;