import { Adicional } from "./Adicional";

export class AdicionalMaionese extends Adicional {
    getDescricao(): string {
        return super.getDescricao() + ' + Maionese'
    }
    getPreco(): number {
        return super.getPreco() + 1.50
    }
}