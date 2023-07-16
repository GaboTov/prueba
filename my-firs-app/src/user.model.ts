export interface UserType{
    id: string
    name:string
    _id:string
    createDate: number
    updateDate: number
}

export interface UserPostType extends Omit<UserType ,'_id'> {

}

export interface UserPutType extends Omit<UserType ,'_id' | 'createDate'>{}