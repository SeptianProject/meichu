import { baseUrl } from ".";

export const getFullImageUrl = (path: string) => {
     if (!path) return '';
     const cleanPath = path.replace('/api', '');
     return `${baseUrl}${cleanPath}`;
}