import { Adicional } from "./model";

export class Prioridade extends Adicional {

    getDescricao(): string {
        return super.getDescricao() + ' Seu serviço terá prioridade de resoluçao'
    }
    getPreco(): number {
        return super.getPreco() + (super.getPreco() * 30/100)
    }
}