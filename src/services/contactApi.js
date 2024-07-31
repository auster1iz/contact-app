import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AUTH_TOKEN, BASE_URL } from '../constants/api'

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${AUTH_TOKEN}`)
      return headers
    },
  }),
  endpoints: (build) => ({
    getAllContacts: build.query({
      query: () => ({
        url: '/contacts',
      }),
    }),
  }),
})
