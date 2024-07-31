// I'm making requests to you API from proxy backend to avoid CORS
export const BASE_URL = 'https://proxy-production-bc7c.up.railway.app'

export const REQUEST_URLS = {
  getContacts: '/api/v1/contacts',
  getSingleContact: '/api/v1/contact/${id}',
  createContact: '/api/v1/contact',
  deleteContact: '/api/v1/contact/${id}',
  addTags: '/api/v1/contacts/${id}/tags',
}
