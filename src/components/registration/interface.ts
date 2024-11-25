interface State {
    name: string;
    cities: string[];
  }
  
export interface CountryData {
    country: string;
    states: State[];
}

export interface userInfo {
  next:number
  phone_number:string
  password:string;
  email:string
  user_name:string
  otp : string
  checkBox: boolean
  dob : string
  gender : string
  referral : string
  base64 : string | ArrayBuffer | null
}
