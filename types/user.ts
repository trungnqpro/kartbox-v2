export interface Profile {
  id: string | null
  username: string | null
  email: string | null
  avatarUrl: string | null
  role: string | null
  status: string | null
  isDeleted: number | null
  createdAt: string | null
  updatedAt: string | null
}
export interface wallet {
  ownerId: string | null
  address: string | null
  publisher: string | null
  chain: string | null
  isDeleted: number | null
  createdAt: string | null
  updatedAt: string | null
}
export interface Account {
  publisher: string
  chain: string
  address: string
  signature: string
}
export interface UserInfo {
  profile: Profile | null
  accessToken: string | null
  refreshToken: string | null
}
