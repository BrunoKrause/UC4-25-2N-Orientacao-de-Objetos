import { Adicional } from "./model";

export class Bonus extends Adicional {
    
    getDescricao(): string {
        return super.getDescricao() + ' Você terá o direito de escolher mais um bonus ao final do serviço.'
    }
    getPreco(): number {
        return super.getPreco() + (super.getPreco() * 15/100)
    }
}