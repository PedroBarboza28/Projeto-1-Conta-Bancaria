import { Conta } from "../model/Conta";
import { colors } from "../util/color";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
    
    private listaContas: Array<Conta> = new Array<Conta>();
    private numero: number = 0;

    gerarNumero(): number {
        return ++this.numero;
    }

    procurarPorNumero(numero: number): void {
        let buscarConta = this.buscarNoArray(numero);
        
        if (buscarConta != null) {
            buscarConta.visualizar();
        } else {
            console.log(colors.fg.red, "\nConta número: " + numero + " não foi encontrada!", colors.reset);
        }
    }

    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green, "\nA Conta número: " + conta.numero + " foi criada com sucesso!", colors.reset);
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.green, "\nConta número: " + conta.numero + " foi atualizada com sucesso!", colors.reset);           
        } else {
            console.log(colors.fg.red, "\nA conta número " + conta.numero + " não foi encontrada!", colors.reset);
        }
    }

    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(colors.fg.green, "\nA Conta número: " + numero + " foi apagada com sucesso!", colors.reset);
        } else {
            console.log(colors.fg.red, "\nA Conta número " + numero + " não foi encontrada!", colors.reset);
        }
    }

    sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {
            if (conta.sacar(valor)) {
                console.log(colors.fg.green, "\nO saque na Conta número: " + numero + " foi efetuado com sucesso!", colors.reset);
            } else {
                console.log(colors.fg.red, "\nSaldo insuficiente na Conta número: " + numero + "!", colors.reset);
            }
        } else {
            console.log(colors.fg.red, "\nA Conta número: " + numero + " não foi encontrada!", colors.reset);
        }
    }

    depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {
            conta.depositar(valor);
            console.log(colors.fg.green, "\nO depósito na Conta número: " + numero + " foi efetuado com sucesso!", colors.reset);
        } else {
            console.log(colors.fg.red, "\nA Conta número: " + numero + " não foi encontrada!", colors.reset);
        }
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if (contaOrigem != null && contaDestino != null) {
            if (contaOrigem.sacar(valor)) {
                contaDestino.depositar(valor);
                console.log(colors.fg.green, "\nTransferência de R$ " + valor + " da Conta número: " + numeroOrigem + " para a Conta número: " + numeroDestino + " foi efetuada com sucesso!", colors.reset);
            } else {
                console.log(colors.fg.red, "\nSaldo insuficiente na Conta número: " + numeroOrigem + "!", colors.reset);
            }
        } else {
            if (contaOrigem == null) {
                console.log(colors.fg.red, "\nA Conta número: " + numeroOrigem + " não foi encontrada!", colors.reset);
            }
            if (contaDestino == null) {
                console.log(colors.fg.red, "\nA Conta número: " + numeroDestino + " não foi encontrada!", colors.reset);
            }
        }
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero) {
                return conta;
            }
        }
        return null;
    }
}
