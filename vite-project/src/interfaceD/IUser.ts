export default interface IUser {
    _id: string
    email: string
    firstname: string
    lastname: string
    isAdmin: boolean
    followers: any[]
    following: any[]
    createdAt: string
    updatedAt: string
    __v: number
    profilePicture?: string
    coverPicture?: string
  }
  