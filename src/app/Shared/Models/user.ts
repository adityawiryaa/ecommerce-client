export class User {
    _id : string;
    email : string;
    name: string ;
    password : string ;
    firstname : string;
    lastname : string;
    age : string;
    address : string;
}

export class UpdateUser {
    name : string;
    password : string;
    firstname : string;
    lastname : string;
    age : string;
    address : string;
}
export class addressUser {
    country: string;
    province: string;
    city : string;
    district: string;
    village : string;
    phone : number;
    zip : number;
}