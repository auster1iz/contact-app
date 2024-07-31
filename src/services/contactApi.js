import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, REQUEST_URLS } from '../constants/api'

const ContactsTag = 'Contacts'
const SingleContactTag = 'SingleContact'

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Contacts'],
  endpoints: (build) => ({
    getAllContacts: build.query({
      query: () => ({
        url: REQUEST_URLS.getContacts,
        params: { sort: 'created:desc' },
      }),
      providesTags: [{ type: ContactsTag }],
    }),
    getSingleContact: build.query({
      query: (id) => ({
        url: REQUEST_URLS.getSingleContact.replace('${id}', id),
      }),
      providesTags: [{ type: SingleContactTag }],
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
          url: REQUEST_URLS.createContact,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: [{ type: ContactsTag }],
    }),
    deleteContact: build.mutation({
      query: (id) => ({
        url: REQUEST_URLS.deleteContact.replace('${id}', id),
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: ContactsTag }],
    }),
    addNewTag: build.mutation({
      query: ({ id, tags }) => {
        return {
          url: REQUEST_URLS.addTags.replace('${id}', id),
          method: 'PUT',
          body: {
            tags,
          },
        }
      },
      invalidatesTags: [{ type: SingleContactTag }, { type: ContactsTag }],
    }),
  }),
})
