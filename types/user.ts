export interface UserInfo {
  profile: {
    id: string | null
    username: string | null
    email: string | null
    avatarUrl: string | null
    role: string | null
    status: string | null
    isDeleted: number | null
    createdAt: string | null
    updatedAt: string | null
  } | null
  accessToken: string | null
  refreshToken: string | null
}
export interface wallet {
  id: string | null
  ownerId: string | null
  address: string | null
  publisher: string | null
  chain: string | null
  isDeleted: number | null
  createdAt: string | null
  updatedAt: string | null
}
export interface loginPayload {
  publisher: string
  chain: string
  address: string
  signature: string
}


