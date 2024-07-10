import { Cliente } from './cliente';

export abstract class Conta {
    numeroConta: string;
    cliente: Cliente;
    saldo: number;

    constructor(numeroConta: string, cliente: Cliente) {
        this.numeroConta = numeroConta;
        this.cliente = cliente;
        this.saldo = 0.0;
    }

    abstract sacar(valor: number): void;
    abstract depositar(valor: number): void;
    abstract verificarSaldo(): number;
}