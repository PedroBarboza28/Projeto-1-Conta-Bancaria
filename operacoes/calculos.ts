
export function somar(num1 : number, num2 : number): number {

    return num1 + num2

};

export function subtrair(num1 : number, num2 : number): number {

    return num1 - num2

};

export function dividir(num1 : number, num2 : number): number | null {

    let divisao = num1 / num2;
    return (divisao != Infinity? divisao : null) ;
};

export function multiplicar(num1 : number, num2 : number): number {

    return num1 * num2

};

export function aluno(): void {

    console.log("Calculadora construída por Pedro Barboza Machado!")

};