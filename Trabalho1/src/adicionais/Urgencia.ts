import { Adicional } from "./model";

export class ExtraUrgencia extends Adicional {

    getDescricao(): string {
        return super.getDescricao() + ` 
        Tempo de entrega reduzido pela metade.`
    }
    getPreco(): number {
        return super.getPreco() + (super.getPreco() * 50/100)
    }
}