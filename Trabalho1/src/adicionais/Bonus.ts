import { Adicional } from "./model";

export class Bonus extends Adicional {
    
    getDescricao(): string {
        return super.getDescricao() + ` 
        Voce tera o direito de escolher mais um bonus ao final do servico.`
    }
    getPreco(): number {
        return super.getPreco() + (super.getPreco() * 15/100)
    }
}