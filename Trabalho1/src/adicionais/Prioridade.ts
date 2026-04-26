import { Adicional } from "./model";

export class Prioridade extends Adicional {

    getDescricao(): string {
        return super.getDescricao() + ` 
        Seu servico ter prioridade de resolucao`
    }
    getPreco(): number {
        return super.getPreco() + (super.getPreco() * 30/100)
    }
}