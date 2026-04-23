import { Adicional } from "./Adicional";

export class AdicionalQueijo extends Adicional {
    getDescricao(): string {
        return super.getDescricao() + ' + queijo'
    }
    getPreco(): number {
        return super.getPreco() + 2
    }
}