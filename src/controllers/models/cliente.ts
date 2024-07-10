export class Cliente {
    static find(arg0: (c: { id: any; }) => boolean) {
        throw new Error('Method not implemented.');
    }
    nomeCompleto: string;
    id: string;
    endereco: string;
    telefone: string;

    constructor(nomeCompleto: string, id: string, endereco: string, telefone: string) {
        this.nomeCompleto = nomeCompleto;
        this.id = id;
        this.endereco = endereco;
        this.telefone = telefone;
    }
}