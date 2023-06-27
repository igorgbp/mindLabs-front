export class UserLogged {
    first_name?:string;
    last_name?:string;
    id?:string;
}

export class AddressList{
    addresses?:Address[];
}

export class Address {
    street?: string;
    number?: number;
    
}