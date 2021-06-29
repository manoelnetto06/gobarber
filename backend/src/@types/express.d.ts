// Vai sobrescrer uma tipagem do Express - inserindo o objeto user - adicionando uma informação nova
declare namespace Express {
    export interface Request {
        user: {
            id: string;
        };
    }
}
