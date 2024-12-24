export interface BundleProducts {
     name: string
     main: string
     items: string[]
}

export interface UserProfile {
     id: number
     username: string
     email: string
     telpNumber: string
     provider: string
     confirmed: boolean
     blocked: boolean,
     createdAt: string
     updatedAt: string
     profilePicture: UploadResponse
}

export interface ImageFormat {
     name: string;
     hash: string;
     ext: string;
     mime: string;
     path: null;
     width: number;
     height: number;
     size: number;
     sizeInBytes: number;
     url: string;
}

export interface UploadResponse {
     id: number;
     name: string;
     alternativeText: null;
     caption: null;
     width: number;
     height: number;
     formats: {
          large: ImageFormat;
          medium: ImageFormat;
          small: ImageFormat;
          thumbnail: ImageFormat;
     };
     hash: string;
     ext: string;
     mime: string;
     size: number;
     url: string;
     previewUrl: null;
     provider: string;
     provider_metadata: null;
     createdAt: string;
     updatedAt: string;
}