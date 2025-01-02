export const baseUrl = import.meta.env.VITE_PUBLIC_STRAPI_BASE_URL.replace('/api', '');
export const apiUrl = `${baseUrl}/api`;
export const token = localStorage.getItem('authToken');
export const userId = localStorage.getItem('userId');