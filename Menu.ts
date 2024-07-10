import read = require("readline-sync");
import { colors } from "./src/util/color";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";
import { Conta } from "./src/model/Conta";

export function main(this: any) {

    let contas: ContaController = new ContaController();
    let opcao, numero, agencia, tipo, saldo, limite, valor, numeroDestino, aniversario: number;
    let titular: string;
    const tiposContas = ['Conta Corrente', 'Conta Poupanca'];
    let conta: Conta | null = null; // Corrigida a declaração da variável 'conta'

    const contacorrente: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    const contapoupanca: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();

    while (true) {
        console.log(colors.bg.black, colors.fg.yellow,
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Buscar Por Titular                   ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = read.questionInt("");

        if (opcao == 0) {
            console.log(colors.fg.greenstrong, "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);

                console.log("\nDigite o Número da Agência: ");
                agencia = read.questionInt("");

                console.log("\nDigite o Nome do Titular da Conta: ");
                titular = read.question("");

                console.log("\nDigite o Tipo da Conta: ");
                tipo = read.keyInSelect(tiposContas, "", { cancel: false }) + 1;

                console.log("\nDigite o Saldo da Conta (R$): ");
                saldo = read.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log("Digite o Limite da Conta:");
                        limite = read.questionFloat("");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular,
                                saldo, limite));
                        break;

                    case 2:
                        console.log("Digite o Dia do Aniversário da Conta Poupança: ");
                        aniversario = read.questionFloat("");
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo,
                            titular, saldo, aniversario));
                        break;
                }

                keyPress();
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", colors.reset);

                contas.listarTodas();

                keyPress();
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                console.log("Digite o Numero da Conta: ");
                numero = read.questionInt("");
                contas.procurarPorNumero(numero);

                keyPress();
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", colors.reset);

                console.log("Digite o número da Conta: ");
                numero = read.questionInt("");

                conta = contas.buscarNoArray(numero);

                if (conta != null) {
                    console.log("Digite o número da agência: ");
                    agencia = read.questionInt("");

                    console.log("Digite o Nome do Títular da Conta: ");
                    titular = read.question("");

                    tipo = (conta as ContaCorrente | ContaPoupanca).tipo;

                    console.log("\nDigite o Saldo da conta (R$): ");
                    saldo = read.questionFloat("");

                    switch (tipo) {
                        case 1:
                            console.log("Digite o Limite da Conta (R$): ");
                            limite = read.questionFloat("");
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular,
                                    saldo, limite));
                            break;

                        case 2:
                            console.log("Digite o Dia do aniversário da Conta Poupança: ");
                            aniversario = read.questionInt("");
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo,
                                aniversario));
                            break;
                    }
                } else {
                    console.log(colors.fg.red, "\nA Conta numero: " + numero + " não foi encontrada!", colors.reset);
                }

                keyPress();
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", colors.reset);

                console.log("\nDigite o Numero da Conta: ");
                numero = read.questionInt("");
                contas.deletar(numero);

                keyPress();
                break;
            case 6:
                console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);

                console.log("Digite o número da conta: ");
                numero = read.questionInt("");

                console.log("Digite o valor do saque (R$): ");
                valor = read.questionFloat("");

                contas.sacar(numero, valor);

                keyPress();
                break;
            case 7:
                console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);

                console.log("Digite o número da conta: ");
                numero = read.questionInt("");

                console.log("Digite o valor do depósito (R$): ");
                valor = read.questionFloat("");

                conta = contas.buscarNoArray(numero);

                if (conta != null) {
                    conta.depositar(valor);
                    console.log(colors.fg.green, "\nO Depósito na Conta número: " + numero + " foi efetuado com sucesso!", colors.reset);
                } else {
                    console.log(colors.fg.red, "\nA Conta número: " + numero + " não foi encontrada!", colors.reset);
                }

                keyPress();
                break;
            case 8:
                console.log(colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", colors.reset);

                console.log("Digite o número da conta de origem: ");
                numero = read.questionInt("");

                console.log("Digite o número da conta de destino: ");
                numeroDestino = read.questionInt("");

                console.log("Digite o valor da transferência (R$): ");
                valor = read.questionFloat("");

                contas.transferir(numero, numeroDestino, valor);

                keyPress();
                break;

            case 9:
                console.log("Pesquise pelo nome: ")

                console.log("\nDigite o Nome do Titular da Conta: ");
                titular = read.question("");
                contas.procurarPorTitular(titular)

                break;
            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);

                keyPress();
                break;
        }
    }
}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    read.prompt();
}

main();
