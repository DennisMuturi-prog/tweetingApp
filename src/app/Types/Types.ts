export interface UnregisteredUser {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string ;
  dateOfBirth: string ;
  marketingSource: string;
  acceptTerms: boolean;
}
export interface RegisteredUser{
    email:string,
    password:string
}
export interface User{
    userId:string,
    username:string,
    email:string
}