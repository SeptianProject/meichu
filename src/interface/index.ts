export interface BundleProducts {
     name: string
     main: string
     items: string[]
}

export interface UserProfile {
     id: string
     username: string
     email: string
     provider: string
     confirmed: boolean
     blocked: boolean,
     createdAt: string
     updatedAt: string
}