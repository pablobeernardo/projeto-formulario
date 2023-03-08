import UserModel from "../model/user-model";


export interface Props{

}

export interface ControllerState{
    name: string;
    age: string;
    email: string;
    message: string;
    birthday: string;
    cpf: string;
    telefone: string;
    endereco: string;
    formSent: boolean;
}

export interface ViewState{
    name: string;
    email: string;
    message: string;
    handleChange: any; 
    handleSubmit: any;
}

export interface ViewProps{
    name: string;
    age: string;
    email: string;
    message: string;
    birthday: string;
    cpf: string;
    telefone: string;
    endereco: string;
    handleChange: any; 
    handleSubmit: any;
    formSent: boolean;
}

export interface HttpResponse{
    message: string;
    status: number;
    data: any
}