import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {Person, PersonResponseType, SearchPersonParams} from "../types/types";
import {mapResponseForPersons, mapSearchResponseForPersons} from "./mapResponse";

const baseUrl = 'https://api.pipedrive.com/v1'
const apiToken = '1ea1013aac41a2ddf3cad734770baf50e29e2d7c'
const pageLimit = 20

export const apiService = createApi({
    reducerPath: 'apiService',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['Person', 'SearchPerson'],
    endpoints: (build) => ({
        getPersons: build.query<PersonResponseType, number>({
            query: (page: number) => ({
                url: '/persons',
                params: {
                    limit: pageLimit,
                    start: page * pageLimit,
                    api_token: apiToken,
                },
            }),
            transformResponse: (response: any) => {
                return {
                    items: mapResponseForPersons((response as any).data),
                    hasMoreItems: response["additional_data"]["pagination"]["more_items_in_collection"]
                }
            },
            providesTags: result => ['Person']
        }),
        searchPersons: build.query<PersonResponseType, SearchPersonParams>({
            query: (params: SearchPersonParams) => ({
                url: '/persons/search',
                params: {
                    term: params.searchQuery,
                    limit: pageLimit,
                    start: params.pageNumber * pageLimit,
                    api_token: apiToken,
                },
            }),
            transformResponse: (response: any) =>  {
                return {
                    items: mapSearchResponseForPersons((response as any).data.items),
                    hasMoreItems: response["additional_data"]["pagination"]["more_items_in_collection"]
                }
            },
            providesTags: result => ['SearchPerson']
        }),
        deletePerson: build.mutation<Person[], number>({
            query: (id: number) => ({
                url: `/persons/${id}`,
                method: 'DELETE',
                params: {
                    api_token: apiToken,
                }
            }),
            invalidatesTags: ['Person', 'SearchPerson']
        }),
        addPerson: build.mutation<Person[], unknown>({
            query: (payload) => ({
                url: `/persons`,
                method: 'POST',
                params: {
                    api_token: apiToken,
                },
                body: payload
            }),
            invalidatesTags: ['Person', 'SearchPerson']
        }),
    })
})
