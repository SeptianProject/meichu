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
     likes: []
     requests: Requests[]
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

export interface Requests {
     id: number;
     name: string;
     productType: string;
     imvu: boolean;
     createdAt: string;
     isNew: boolean;
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

export interface ProductRequestsResponse {
     data: {
          id: number;
          attributes: {
               name: string;
               productType: string;
               imvu: boolean;
               createdAt: string;
               references: {
                    data: {
                         id: number,
                         attributes: {
                              name: string;
                              url: string;
                         }
                    }
               }
               user: {
                    data: {
                         id: number,
                         attributes: {
                              username: string;
                              email: string;
                         }
                    }
               }
          };
     }[]
}