import read = require("readline-sync");
import { colors } from "./src/util/color";

export function main (){
    
    while(true){
    let opcao: number;


        console.log(colors.bg.gray,colors.fg.black,                        
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
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", colors.reset);

        console.log("Entre com a opção desejada: ");
       
        opcao = read.questionInt("");

        if(opcao === 9){
            console.log("nBanco do Brazil com Z - O seu Futuro começa aqui!")
            Sobre();
            process.exit()
        }

        switch(opcao){
           
            case 1:
                console.log("\nCriar conta");
            break;

            case 2:
                console.log("\nListar todas as Contas");    
            break;

            case 3:
                console.log("\nBuscar Conta por Numero");
            break;

            case 4:    
                console.log("\nAtualizar Dados da Conta ");
            break;

            case 5:
                console.log("\nApagar Conta");    
            break;

            case 6:
                console.log("\nSacar");
            break;    

            case 7:
                console.log("\nDepositar");
            break;

            case 8:
                console.log("\nTransferir valores entre Contas");
            break;    

            case 9:
                console.log("\nSair");
            break;    

            default:
                console.log("\nOpcao Invalida!")
                break;
        }
        }}


        export function Sobre(): void {
         
            console.log("\n*****************************************************");
            console.log("Projeto Desenvolvido por: Pedro Barboza Machado ");
            console.log("Generation Brasil - generation@generation.org");
            console.log("github.com/conteudoGeneration");
            console.log("*****************************************************");
        }

        main()