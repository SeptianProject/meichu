export const baseUrl = import.meta.env.VITE_PUBLIC_STRAPI_BASE_URL.replace('/api', '');
export const apiUrl = `${baseUrl}/api`;

if (!baseUrl) {
     console.error("Error: Base URL is not defined. Check your environment variables.");
}