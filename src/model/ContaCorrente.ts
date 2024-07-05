import { Conta } from "./Conta";
export class ContaCorrente extends Conta {

private _limite: number;

constructor(numero:number , agencia:number, tipo:number, titular: string, saldo:number,
    limite:number){
      super(numero, agencia, tipo, titular, saldo);
      this._limite = limite;

}

public get limite(){
   return this._limite;

}

public set limite(limite: number){
  this._limite = limite;
}

public sacar(valor:number){

  if(this.saldo + this.limite < valor){
    console.log("Voce possui saldo insuficiente.");
    return false;
  }
  this.saldo = this.saldo - valor;
  return true;
}


public visualizar(): void {
  super.visualizar();
  console.log("Seu limite é de: " + this._limite.toFixed(2));
}

}