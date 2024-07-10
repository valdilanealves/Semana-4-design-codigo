import { Conta } from './conta';
import { Cliente } from './cliente';

export class contaPoupanca extends Conta {
    depositar(valor: number): void {
        throw new Error('Method not implemented.');
    }
    verificarSaldo(): number {
        throw new Error('Method not implemented.');
    }
    taxaJuros: number;

    constructor(numeroConta: string, cliente: Cliente) {
        super(numeroConta, cliente);
        this.taxaJuros = 0.05;
    }

    calcularTaxa(): number {
        return this.saldo * this.taxaJuros;
    }

    sacar(valor: number): void {
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente para realizar o saque.");
        } else if (valor <= 0) {
            throw new Error("Valor de saque deve ser positivo.");
        } else {
            this.saldo -= valor;
        }
    }
}