import { Cliente } from './cliente';
import { ContaCorrente } from './contaCorrente';
import { contaPoupanca } from './contaPoupanca';

export class Gerente {
    nomeCompleto: string;
    id: string;

    constructor(nomeCompleto: string, id: string) {
        this.nomeCompleto = nomeCompleto;
        this.id = id;
    }

    abrirContaCorrente(numeroConta: string, cliente: Cliente): ContaCorrente {
        return new ContaCorrente(numeroConta, cliente);
    }

    abrirContaPoupanca(numeroConta: string, cliente: Cliente): contaPoupanca {
        return new contaPoupanca(numeroConta, cliente);
    }
}