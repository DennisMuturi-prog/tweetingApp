export interface User{
    firstName:string,
    secondName:string,
    email:string
    password:string
    confirmPassword?:string,
    gender:string,
    dateOfBirth:string,
}
export interface RegisteredUser{
    email:string,
    password:string
}