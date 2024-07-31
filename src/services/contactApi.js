import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants/api'

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Contacts'],
  endpoints: (build) => ({
    getAllContacts: build.query({
      query: () => ({
        url: '/api/v1/contacts',
        params: { sort: 'created:desc' },
      }),
      providesTags: [{ type: 'Contacts' }],
    }),
    getSingleContact: build.query({
      query: (id) => ({
        url: `/api/v1/contact/${id}`,
      }),
      providesTags: [{ type: 'SingleContact' }],
    }),
    createContact: build.mutation({
      query: ({ firstName, lastName, email }) => {
        const body = {
          fields: {
            ['first name']: [
              { value: firstName, modifier: '', label: 'first name' },
            ],
            ['last name']: [
              { value: lastName, modifier: '', label: 'last name' },
            ],
            email: [{ value: email, modifier: '', label: 'email' }],
          },
          record_type: 'person',
          privacy: {
            edit: null,
            read: null,
          },
          owner_id: null,
        }

        return {
          url: '/api/v1/contact',
          method: 'POST',
          body,
        }
      },
      invalidatesTags: [{ type: 'Contacts' }],
    }),
    deleteContact: build.mutation({
      query: (id) => ({
        url: `/api/v1/contact/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Contacts' }],
    }),
    addNewTag: build.mutation({
      query: ({ id, tags }) => {
        return {
          url: `/api/v1/contacts/${id}/tags`,
          method: 'PUT',
          body: {
            tags,
          },
        }
      },
      invalidatesTags: [{ type: 'SingleContact' }],
    }),
  }),
})
