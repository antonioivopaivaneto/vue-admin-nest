export interface User {
    id:number;
    first_name: string;
    last_name:string;
    email:string;
    role: Role | null;
}

export interface Role{
    id:number;
    name:string;
}