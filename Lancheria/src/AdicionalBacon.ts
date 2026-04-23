import { Adicional } from "./Adicional";

export class AdicionalBacon extends Adicional {

    getDescricao(): string {
        return super.getDescricao() + ' + bacon'
    }
    getPreco(): number {
        return super.getPreco() + 3
    }
}