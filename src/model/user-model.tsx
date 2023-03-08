export default class UserModel{
    name: string;
    age: string;
    email: string;
    message: string;
    birthday: string;
    cpf: string;
    telefone: string;
    endereco: string;

    constructor() {

    }

    toString(): string{
        return JSON.stringify(this);
    }

    toJson(userStringed: string): UserModel{
        return JSON.parse(userStringed) as UserModel;
    }
}


